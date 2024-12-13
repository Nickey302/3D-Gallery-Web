import './globals.css'
import localFont from 'next/font/local'

// 로컬 폰트 설정
const myFont = localFont({
  src: [
    {
      path: './fonts/Facade-Est.woff',
      weight: '900',
      style: 'bold',
    }
  ],
  variable: '--font-facade' // Tailwind에서 사용할 변수명
})

export const metadata = {
  title: "3D Web Gallery",
  description: "This Web Is 3D Art Gallery For Artists.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
