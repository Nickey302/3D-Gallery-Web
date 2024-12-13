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
  medium: z.string().min(1, '매체를 입력해주세요'),
  file: z.any()
})

export function ArtworkUploadForm() {
  const { closeModal, selectedFrame } = useUploadStore()
  const [preview, setPreview] = useState(null)
  
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
      // frame_index가 undefined인 경우 체크
      if (selectedFrame === undefined || selectedFrame === null) {
        toast.error('프레임을 선택해주세요')
        return
      }

      // frame_index를 숫자로 변환
      const frameIndex = Number(selectedFrame)

      // 먼저 frame_index 중복 체크
      const { data: existingArtwork, error: checkError } = await supabase
        .from('artworks')
        .select('id')
        .eq('frame_index', frameIndex)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError
      }

      if (existingArtwork) {
        toast.error('이미 작품이 있는 프레임입니다')
        return
      }

      const file = values.file
      if (!file) {
        toast.error('파일을 선택해주세요')
        return
      }

      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      // 파일 업로드
      const { error: uploadError } = await supabase.storage
        .from('artworks')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // 파일 URL 가져오기
      const { data: { publicUrl } } = supabase.storage
        .from('artworks')
        .getPublicUrl(filePath)

      // 현재 로그인한 사용자 정보 가져오기
      const { data: { user } } = await supabase.auth.getUser()

      // 작품 정보 저장
      const artworkData = {
        title: values.title,
        description: values.description,
        medium: values.medium,
        file_url: publicUrl,
        is_displayed: true,
        user_id: user.id,
        frame_index: frameIndex
      }

      const { error: insertError } = await supabase
        .from('artworks')
        .insert([artworkData])

      if (insertError) throw insertError

      toast.success('작품이 업로드되었습니다')
      closeModal()
    } catch (error) {
      console.error('Upload error:', error)
      toast.error('업로드에 실패했습니다')
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
              <FormLabel>매체</FormLabel>
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
        <Button type="submit" className="w-full">업로드</Button>
      </form>
    </Form>
  )
} 