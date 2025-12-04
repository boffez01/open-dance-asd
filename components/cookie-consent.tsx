"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Controlla se l'utente ha già dato il consenso
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Utilizzo dei Cookie</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utilizziamo i cookie per migliorare la tua esperienza di navigazione e per analizzare il traffico del
              sito. Continuando a navigare accetti l'utilizzo dei cookie.{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Leggi la Privacy Policy
              </Link>{" "}
              e la{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={rejectCookies}>
              Rifiuta
            </Button>
            <Button size="sm" onClick={acceptCookies}>
              Accetta
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
