"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Star } from "lucide-react"
import Image from "next/image"

export default function VitaAssociativaClient() {
  const competitions = [
    {
      title: "Made in Italy Dance Cup",
      date: "18 Gennaio 2026",
      image: "/images/made-in-italy-dance-cup.jpg",
      description:
        "Competizione di danza sportiva a Turbigo (MI) organizzata da PromoDanza e Mettiti in Ballo! con il patrocinio A.S.C.",
    },
    {
      title: "Lazise Dance Sport Trophy",
      date: "4-5-6 Gennaio 2026",
      image: "/images/lazise-dance-sport-trophy.jpg",
      description:
        "Prestigiosa competizione nazionale a Lazise presso Hotel Parchi del Garda con i nostri agonisti nel balletto sportivo mondiale.",
    },
    {
      title: "Concorso Telethon 2025",
      date: "6-7-8 Dicembre 2025",
      image: "/images/torneo-8-dicembre.jpeg",
      description: "29° Concorso Telethon e 30° Concorso Tony Rose a Castellanza: ballare per una buona causa.",
    },
    {
      title: "Campionato Italiano Rimini 2025",
      date: "Gennaio 2025",
      image: "/images/foto-gruppo-agonisti-1.jpg",
      description: "Il nostro gruppo agonisti al prestigioso Campionato Italiano di Rimini.",
    },
    {
      title: "Campionato Regionale Lombardia",
      date: "Febbraio 2025",
      image: "/images/gallery/campionato_regionale.jpg",
      description: "Grandi soddisfazioni per i nostri atleti all'Arena di Castellanza.",
    },
    {
      title: "CIDS Cup",
      date: "Marzo 2025",
      image: "/images/gallery/agonisti_4.jpg",
      description: "Il nostro gruppo agonisti schierato e vincente.",
    },
    {
      title: "Bassano Dance Festival",
      date: "Aprile 2025",
      image: "/images/gallery/bassano_dance_festival.jpg",
      description: "Una trasferta indimenticabile ricca di premi e sorrisi.",
    },
    {
      title: "Coppa Italia - Trofeo Perfecta",
      date: "Stagione 2024/2025",
      image: "/images/gallery/gruppo_agonisti_2.jpg",
      description: "I nostri atleti sul podio, un orgoglio per tutta l'associazione.",
    },
    {
      title: "Concorso Telethon",
      date: "Dicembre 2024",
      image: "/images/gallery/concorso_telethon.jpg",
      description: "Ballare per una buona causa: sport e solidarietà.",
    },
    {
      title: "CIDS Cup Lombardia",
      date: "Competizione Ufficiale",
      image: "/images/gallery/agonisti_5.jpg",
      description: "L'emozione della premiazione e il tifo della squadra.",
    },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/gruppo-ben-vestito.jpeg"
              alt="Gruppo Open Dance ASD"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="relative z-20 text-center text-white px-4 container mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/90 text-black text-xs font-bold mb-4 tracking-wider uppercase">
              La Nostra Community
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-2xl">Vita Associativa</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed font-medium drop-shadow-md">
              Open Dance non è solo scuola, è una squadra. Qui condividiamo la fatica degli allenamenti, l'adrenalina
              delle gare e la gioia dello stare insieme.
            </p>
          </div>
        </section>

        {/* Intro Quote */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="relative">
              <Star className="w-12 h-12 text-primary/20 absolute -top-6 -left-6" />
              <h2 className="text-2xl md:text-3xl font-serif italic text-muted-foreground leading-relaxed">
                "La vera vittoria non è solo alzare una coppa, ma guardarsi intorno e vedere i sorrisi dei tuoi compagni
                che fanno il tifo per te."
              </h2>
              <Star className="w-12 h-12 text-primary/20 absolute -bottom-6 -right-6" />
            </div>
          </div>
        </section>

        {/* SEZIONE COMPETIZIONI */}
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider mb-2 text-primary font-bold flex items-center gap-2">
                  <Trophy size={16} />
                  AGONISMO
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">In Pista per Vincere</h2>
                <p className="text-muted-foreground mt-2 max-w-xl">
                  Seguiamo i nostri atleti nei palazzetti di tutta Italia. Ecco alcuni dei momenti più belli delle
                  recenti stagioni agonistiche.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitions.map((comp, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute top-4 right-4 z-10 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                      <Calendar size={12} />
                      {comp.date}
                    </div>
                    <Image
                      src={comp.image || "/placeholder.svg"}
                      alt={comp.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <div className="p-6 bg-card flex-grow flex flex-col justify-end relative">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{comp.title}</h3>
                    <p className="text-sm text-muted-foreground">{comp.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-black rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Vuoi unirti al divertimento?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90">
              Che tu voglia competere ad alti livelli o semplicemente trovare nuovi amici e divertirti ballando, c'è un
              posto per te in Open Dance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contatti">
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-bold px-8 shadow-xl hover:scale-105 transition-transform"
                >
                  Vieni a Conoscerci
                </Button>
              </a>
              <a href="https://www.instagram.com/opendanceasd/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8"
                >
                  Seguici su Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
