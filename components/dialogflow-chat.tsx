"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function DialogflowChat() {
  useEffect(() => {
    // Crear el elemento df-messenger después de que el componente se monte
    const dfMessengerElement = document.createElement("df-messenger")
    dfMessengerElement.setAttribute(
      "chat-icon",
      "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-b82c-61f7-ae2c-fb6a15278666/raw?se=2025-05-13T23%3A16%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-13T21%3A22%3A26Z&ske=2025-05-14T21%3A22%3A26Z&sks=b&skv=2024-08-04&sig=MmoGdzhEbE0kQ216fbwAQ7ldXsl42haQk89OvyQEWBQ%3D",
    )
    dfMessengerElement.setAttribute("intent", "WELCOME")
    dfMessengerElement.setAttribute("chat-title", "DinaBot")
    dfMessengerElement.setAttribute("agent-id", "0408c6a7-1a89-4619-b30b-6d66c82512f8")
    dfMessengerElement.setAttribute("language-code", "es")

    // Añadir estilos personalizados
    const style = document.createElement("style")
    style.textContent = `
      df-messenger {
        z-index: 999;
      }
    `
    document.head.appendChild(style)

    // Añadir el elemento al DOM
    document.body.appendChild(dfMessengerElement)

    // Limpieza al desmontar
    return () => {
      if (document.body.contains(dfMessengerElement)) {
        document.body.removeChild(dfMessengerElement)
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <Script
      src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
      strategy="afterInteractive"
    />
  )
}
