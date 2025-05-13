import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import BotpressChat from "@/components/botpress-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BeautyShop - Productos de Maquillaje",
  description: "Tienda de productos de maquillaje de alta calidad para realzar tu belleza natural",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <BotpressChat />
      </body>
    </html>
  )
}
