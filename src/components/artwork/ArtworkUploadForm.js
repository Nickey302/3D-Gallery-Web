'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useUploadStore } from '@/stores/uploadStore'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'
import { useState } from 'react'
import Image from 'next/image'

const formSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  description: z.string().min(1, '작품 설명을 입력해주세요'),
  medium: z.string().min(1, '아티스트의 이름이나 계정을 입력해주세요'),
  file: z.any()
})

export function ArtworkUploadForm() {
  const { closeModal, selectedFrame } = useUploadStore()
  const [preview, setPreview] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      medium: '',
      file: null
    }
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
      form.setValue('file', file)
    }
  }

  async function onSubmit(values) {
    try {
      setIsUploading(true)

      // frame_index 체크
      if (selectedFrame === undefined || selectedFrame === null) {
        toast.error('프레임을 선택해주세요')
        return
      }

      const frameIndex = Number(selectedFrame)

      // 파일 체크
      const file = values.file
      if (!file) {
        toast.error('파일을 선택해주세요')
        return
      }

      // 현재 사용자 확인
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      if (userError) throw userError

      // frame_index 중복 체크 수정
      const { data: existingArtwork, error: checkError } = await supabase
        .from('artworks')
        .select('id')
        .eq('frame_index', frameIndex)

      if (checkError) throw checkError

      if (existingArtwork?.length > 0) {
        toast.error('이미 작품이 있는 프레임입니다')
        return
      }

      // 파일 업로드 전 이름 및 경로 설정
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`

      // 파일 업로드
      const { error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      // 파일 URL 가져오기
      const { data: { publicUrl } } = supabase.storage
        .from('artworks')
        .getPublicUrl(fileName)

      // 작품 정보 저장
      const { error: insertError } = await supabase
        .from('artworks')
        .insert([{
          title: values.title,
          description: values.description,
          medium: values.medium,
          file_url: publicUrl,
          is_displayed: true,
          user_id: user.id,
          frame_index: frameIndex
        }])

      if (insertError) throw insertError

      toast.success('작품이 업로드되었습니다')
      closeModal()
    } catch (error) {
      console.error('Upload error:', error)
      toast.error('업로드에 실패했습니다: ' + error.message)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>작품 제목</FormLabel>
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
              <FormLabel>작품 이미지</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" onChange={handleFileChange} />
              </FormControl>
              {preview && (
                <div className="relative w-full h-48">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full"
          disabled={isUploading}
        >
          {isUploading ? '업로드 중...' : '업로드'}
        </Button>
      </form>
    </Form>
  )
} 