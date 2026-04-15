'use client'

import { useEffect } from 'react'

export default function ChatwootWidget() {
  useEffect(() => {
    ;(window as any).chatwootSettings = {
      position: 'right',
      type: 'standard',
      launcherTitle: 'Chat with us',
    }

    const script = document.createElement('script')
    script.src = 'https://agent-v0.wizedevs.com/packs/js/sdk.js'
    script.async = true
    script.onload = () => {
      ;(window as any).chatwootSDK.run({
        websiteToken: 'f6KBrZTpFQueE74mekeuCKmg',
        baseUrl: 'https://agent-v0.wizedevs.com',
      })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
