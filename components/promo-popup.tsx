"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, Check, Sparkles, Users, HeartPulse, PartyPopper, GraduationCap } from "lucide-react"

const STORAGE_KEY = "promo-popup-dismissed"

const benefits = [
  {
    icon: PartyPopper,
    title: "Divertimento Garantito",
    text: "Impara nuove coreografie in un ambiente allegro e accogliente.",
  },
  {
    icon: HeartPulse,
    title: "Benessere Fisico",
    text: "Migliora la tua postura, coordinazione e forma fisica.",
  },
  {
    icon: Users,
    title: "Nuove Amicizie",
    text: "Conosci persone che condividono la tua stessa passione.",
  },
  {
    icon: GraduationCap,
    title: "Insegnanti Esperti",
    text: "Giorgio e Cristina ti accompagneranno passo dopo passo.",
  },
]

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (dismissed) return

    const timer = setTimeout(() => setIsOpen(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const close = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "true")
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[oklch(0.99_0.005_85)] shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Chiudi"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70 md:bg-white/70 md:text-foreground md:hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left column: poster image */}
        <div className="relative aspect-[3/4] w-full shrink-0 md:aspect-auto md:h-auto md:w-1/2">
          <Image
            src="/locandina-promo.jpg"
            alt="Locandina Open Dance - Lezioni di ballo e danza"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain md:object-cover"
            priority
          />
        </div>

        {/* Right column: content */}
        <div className="flex w-full flex-col overflow-y-auto p-6 md:w-1/2 md:p-8">
          <h2 id="promo-title" className="font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
            Lunedì 14 settembre ripartono i nostri corsi!
          </h2>

          <p className="mt-3 font-semibold text-primary">
            Ballo Liscio | Ballo da Sala | Danze Standard | Social Dance
          </p>

          <p className="mt-5 flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
            <Sparkles className="h-5 w-5 text-primary" />
            Perché Scegliere i Nostri Corsi?
          </p>

          <ul className="mt-4 space-y-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    {title}:
                  </span>{" "}
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Non importa se sei un principiante o un ballerino esperto: abbiamo il corso perfetto per te! I posti sono
            limitati.
          </p>

          <a
            href="https://wa.me/3936631959"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#1ebe5b]"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Prenota la tua LEZIONE DI PROVA
          </a>

          <p className="mt-4 text-center font-serif text-sm italic text-muted-foreground">
            Mettiti in gioco. Ballare è vita.
          </p>
        </div>
      </div>
    </div>
  )
}
