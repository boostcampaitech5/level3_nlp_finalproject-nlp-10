import type { Metadata } from 'next'
import './globals.css'

export const metadata : Metadata = {
  title: '키워드 기반 영화 추천',
  description: '원하는 영화를 찾아드립니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  )
}
