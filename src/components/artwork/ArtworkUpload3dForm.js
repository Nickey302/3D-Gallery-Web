'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useUpload3dStore } from '@/stores/upload3dStore'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'
import { useState, useEffect } from 'react'
import { useTransformStore } from '@/stores/transformStore'
import { pedestalPositions } from '@/constants/pedestalPositions'
import { useRouter } from 'next/navigation'
import { GALLERY_OFFSET } from '@/constants/galleryOffset'
import { useArtworkFormStore } from '@/stores/artworkFormStore'

const formSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  description: z.string().min(1, '작품 설명을 입력해주세요'),
  medium: z.string().min(1, '아티스트의 이름이나 계정을 입력해주세요'),
  file: z.any()
})

export function ArtworkUpload3dForm({ pedestalIndex, onClose }) {
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()
  const { 
    setPreviewModel, 
    setIsPreviewMode, 
    modelTransform,
    setModelTransform,
    setSelectedPedestalPosition,
    resetTransformStore 
  } = useTransformStore()
  
  const { setFormData } = useArtworkFormStore()

  useEffect(() => {
    const pedestalPosition = pedestalPositions.find(p => p.index === pedestalIndex)
    if (pedestalPosition) {
      setSelectedPedestalPosition(pedestalPosition)
      setModelTransform({
        position: { 
          x: pedestalPosition.position[0] + GALLERY_OFFSET.x, 
          y: pedestalPosition.position[1] + GALLERY_OFFSET.y + 1, 
          z: pedestalPosition.position[2] + GALLERY_OFFSET.z 
        },
        rotation: { 
          x: pedestalPosition.rotation[0], 
          y: pedestalPosition.rotation[1], 
          z: pedestalPosition.rotation[2] 
        },
        scale: { x: 1, y: 1, z: 1 }
      })
    }
  }, [pedestalIndex])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      medium: '',
      file: null
    }
  })

  console.log('Form 인스턴스:', form)

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // 파일 크기 체크 (예: 100MB)
    const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      toast.error('파일 크기가 너무 큽니다 (최대 100MB)')
      return
    }

    // 허용된 파일 형식 체크
    const allowedTypes = ['model/gltf-binary', 'model/gltf+json']
    if (!allowedTypes.includes(file.type) && 
        !['.glb', '.gltf'].includes(file.name.toLowerCase().slice(-4))) {
      toast.error('지원하지 않는 파일 형식입니다 (.glb 또는 .gltf 파일만 가능)')
      return
    }

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('models')
        .upload(fileName, file, {
          cacheControl: '3600',
          contentType: file.type || `model/${fileExt}`, // Content-Type 명시적 설정
          upsert: false
        })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('models')
        .getPublicUrl(fileName)

      // 프리뷰 설정
      setPreviewModel({ url: URL.createObjectURL(file) })
      setIsPreviewMode(true)
      form.setValue('file', file)

      // formData 업데이트
      setFormData(prev => ({
        ...prev,
        file_url: publicUrl,
        model_format: fileExt
      }))

    } catch (error) {
      console.error('파일 업로드 중 에러:', error)
      toast.error('파일 업로드에 실패했습니다')
    }
  }

  const checkExistingArtwork = async () => {
    try {
      console.log('받침대 인덱스 확인:', pedestalIndex)
      
      const { data, error } = await supabase
        .from('artworks_3d')
        .select('id')
        .eq('pedestal_index', pedestalIndex)
        .headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
        .maybeSingle()

      console.log('조회 결과:', { data, error })

      if (error) {
        console.error('받침대 중복 체크 중 에러:', error)
        throw error
      }

      return data
    } catch (error) {
      console.error('받침대 체크 중 에러:', error)
      throw error
    }
  }

  async function onSubmit(values) {
    console.log('onSubmit 함수 호출됨', values)
    try {
      setIsUploading(true)

      if (pedestalIndex === null || pedestalIndex === undefined) {
        toast.error('받침대를 선택해주세요')
        return
      }

      const file = values.file
      if (!file) {
        toast.error('파일을 선택해주세요')
        return
      }

      // 사용자 확인
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      if (userError) throw userError
      if (!user) {
        toast.error('로그인이 필요합니다')
        return
      }

      // 파일 업로드
      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}_${Date.now()}.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('models')
        .upload(fileName, file, {
          cacheControl: '3600',
          contentType: file.type || `model/${fileExt}`,
          upsert: false
        })

      if (uploadError) throw uploadError

      // 파일 URL 가져오기
      const { data: { publicUrl } } = supabase.storage
        .from('models')
        .getPublicUrl(fileName)

      // DB에 데이터 저장
      const { error: insertError } = await supabase
        .from('artworks_3d')
        .insert([{
          title: values.title,
          description: values.description,
          medium: values.medium,
          file_url: publicUrl,
          model_format: fileExt,
          pedestal_index: pedestalIndex,
          user_id: user.id,
          is_displayed: true,
          position_y: modelTransform.position.y + 1,
          rotation_x: modelTransform.rotation.x,
          rotation_y: modelTransform.rotation.y,
          rotation_z: modelTransform.rotation.z,
          scale_x: modelTransform.scale.x,
          scale_y: modelTransform.scale.y,
          scale_z: modelTransform.scale.z
        }])

      if (insertError) throw insertError

      // 성공 처리
      toast.success('작품이 성공적으로 업로드되었습니다')
      setFormData({
        ...values,
        file_url: publicUrl,
        pedestal_index: pedestalIndex,
        model_format: fileExt
      })
      setIsPreviewMode(true)
      setPreviewModel({ url: URL.createObjectURL(file) })

    } catch (error) {
      console.error('업로드 중 에러:', error)
      toast.error('파일 업로드 중 오류가 발생했습니다')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Form {...form}>
      <form 
        id="upload-form" 
        onSubmit={(e) => {
          console.log('Form submit 이벤트 발생')
          form.handleSubmit(onSubmit)(e)
        }} 
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>작품 설명</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="medium"
          render={({ field }) => (
            <FormItem>
              <FormLabel>아티스트</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={() => (
            <FormItem>
              <FormLabel>3D 모델 파일</FormLabel>
              <FormControl>
                <Input 
                  type="file" 
                  onChange={handleFileChange}
                  accept=".glb,.gltf"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isUploading}>
          {isUploading ? '업로드 중...' : '업로드'}
        </Button>
      </form>
    </Form>
  )
} 