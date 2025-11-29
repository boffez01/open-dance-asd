"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "393401234567" // Example Italian number
    const message = encodeURIComponent("Ciao! Vorrei avere informazioni sui corsi di Open Dance ASD.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] text-white"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={28} />
    </Button>
  )
}
