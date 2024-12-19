import './globals.css'
import localFont from 'next/font/local'
import { ModelTransformControls } from '@/components/artwork/ModelTransformControls'

// 로컬 폰트 설정
const myFont = localFont({
  src: [
    {
      path: './fonts/NotoSansKR-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    // {
    //   path: './fonts/NotoSansKR-Light.ttf',
    //   weight: '200',
    //   style: 'normal',
    // }
  ],
  variable: '--font-steps' // Tailwind에서 사용할 변수명
})

export const metadata = {
  title: "3D Web Gallery",
  description: "This Web Is 3D Art Gallery For Artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <ModelTransformControls />
      </body>
    </html>
  );
}
