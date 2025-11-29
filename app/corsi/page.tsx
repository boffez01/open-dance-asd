"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, Dumbbell } from "lucide-react"
import Link from "next/link"

export default function CorsiPage() {
  const courses = [
    {
      id: "base",
      title: "Ballo Liscio Base",
      description:
        "Perfetto per chi inizia. Imparerai i passi fondamentali del ballo liscio, il ritmo e la postura corretta.",
      icon: Users,
      level: "Principianti",
      duration: "8 settimane",
      image: "/beginner-ballroom-dance-class-couples-learning.jpg",
    },
    {
      id: "intermedio",
      title: "Ballo Liscio Intermedio",
      description: "Approfondisci la tecnica, perfeziona i movimenti e aggiungi eleganza al tuo ballo.",
      icon: TrendingUp,
      level: "Intermedio",
      duration: "10 settimane",
      image: "/intermediate-ballroom-dance-elegant-couples-practi.jpg",
    },
    {
      id: "avanzato",
      title: "Ballo Liscio Avanzato",
      description:
        "Per ballerini esperti che vogliono raggiungere l'eccellenza. Tecnica avanzata e preparazione competizioni.",
      icon: TrendingUp,
      level: "Avanzato",
      duration: "12 settimane",
      image: "/advanced-ballroom-dance-competition-elegant-perfor.jpg",
    },
    {
      id: "allenamento",
      title: "Allenamento Agonisti",
      description:
        "Corso specializzato per chi desidera partecipare a gare e tornei. Preparazione fisica e tecnica avanzata.",
      icon: Dumbbell,
      level: "Agonistico",
      duration: "Annuale",
      image: "/competitive-ballroom-dance-training-athletes-inten.jpg",
    },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/60 z-10" />
          <img
            src="/dance-studio-classes-wooden-floor-bright-elegant.jpg"
            alt="Corsi di ballo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4">
            <p className="text-xs uppercase tracking-wider mb-3 text-primary-foreground/80">LE ATTIVITÀ</p>
            <h1 className="text-4xl md:text-5xl font-normal mb-3">I Nostri Corsi</h1>
            <p className="text-sm md:text-base text-balance">Trova il percorso perfetto per te</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-xs uppercase tracking-wider mb-3 text-primary">LE ATTIVITÀ</p>
            <h2 className="text-3xl font-normal mb-4">
              Attività riservate ai <span className="text-primary italic">nostri soci</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scopri le attività che la nostra associazione propone. Ogni socio può partecipare liberamente secondo i
              propri interessi e disponibilità.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {courses.map((course, index) => {
                const Icon = course.icon
                return (
                  <Link key={index} href={`/corsi/${course.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all group bg-card border border-border cursor-pointer h-full">
                      <div className="relative">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mt-8 mb-4">
                          <Icon className="text-primary" size={32} />
                        </div>
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                          {course.level}
                        </div>
                      </div>
                      <div className="px-6 pb-6">
                        <h3 className="text-xl font-bold text-card-foreground mb-3 text-center group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 text-center">
                          {course.description}
                        </p>
                        <ul className="space-y-2 mb-6 text-xs text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>
                              {course.id === "base" && "Passi base"}
                              {course.id === "intermedio" && "Figure avanzate"}
                              {course.id === "avanzato" && "Pratica libera"}
                              {course.id === "allenamento" && "Pratica libera"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>
                              {course.id === "base" && "Ritmo e musicalità"}
                              {course.id === "intermedio" && "Stile personale"}
                              {course.id === "avanzato" && "Preparazione gare"}
                              {course.id === "allenamento" && "Preparazione gare"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>
                              {course.id === "base" && "Portamento"}
                              {course.id === "intermedio" && "Coreografie"}
                              {course.id === "avanzato" && "Socializzazione"}
                              {course.id === "allenamento" && "Socializzazione"}
                            </span>
                          </li>
                        </ul>
                        <Button
                          className="w-full text-xs bg-transparent"
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.preventDefault()
                            window.open("https://wa.me/YOUR_NUMBER", "_blank")
                          }}
                        >
                          Richiedi info per partecipare
                        </Button>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Card className="p-6 bg-accent/10 border-accent/20">
              <h3 className="text-xl font-normal mb-3 text-foreground">Informazioni su Prezzi e Orari</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Per conoscere i prezzi dei corsi, gli orari delle lezioni e tutte le informazioni dettagliate,
                contattaci direttamente su WhatsApp o vieni a trovarci in sede.
              </p>
              <p className="text-xs text-muted-foreground">
                Rispettiamo la tua privacy e preferiamo fornirti informazioni personalizzate in base alle tue esigenze.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
