"use client"

import { useEffect } from "react"

export default function BotpressChat() {
  useEffect(() => {
    // Cargar el script de inyección de Botpress
    const injectScript = document.createElement("script")
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js"
    injectScript.async = true
    document.body.appendChild(injectScript)

    // Cargar el script de configuración específico
    injectScript.onload = () => {
      const configScript = document.createElement("script")
      configScript.src = "https://files.bpcontent.cloud/2025/05/13/00/20250513004200-GLM9OR4E.js"
      configScript.async = true
      document.body.appendChild(configScript)
    }

    return () => {
      // Limpiar scripts al desmontar el componente
      document.body.removeChild(injectScript)
    }
  }, [])

  return null // Este componente no renderiza nada visible
}
