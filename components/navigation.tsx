"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/corsi", label: "Le Attività" },
    { href: "/contatti", label: "Contatti" },
  ]

  const handleSocioClick = () => {
    const phoneNumber = "393936631959"
    const message = encodeURIComponent("Ciao! Vorrei avere informazioni su come diventare socio.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          <Link href="/" className="absolute left-0 flex items-center gap-3 group">
            <div className="h-10 flex items-center justify-center">
              <Image
                src="/logo-open-dance-full.jpeg"
                alt="Open Dance"
                width={180}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-normal text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block absolute right-0">
            <Button 
              onClick={handleSocioClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Diventa Socio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-0 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              onClick={handleSocioClick}
              className="w-full mt-4 bg-primary hover:bg-primary/90"
            >
              Diventa Socio
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}