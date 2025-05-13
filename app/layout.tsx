import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dinanela Beauty - Productos de Maquillaje",
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

        {/* Scripts del chatbot */}
        <Script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js" strategy="afterInteractive" />
        <Script
          src="https://files.bpcontent.cloud/2025/05/13/00/20250513004200-GLM9OR4E.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
