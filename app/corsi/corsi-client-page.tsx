"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Music, Star, Trophy, TrendingUp } from "lucide-react"
import Link from "next/link" // Import Link

export default function CorsiClientPage() {
  const courses = [
    {
      title: "Ballo Liscio Base",
      level: "Principianti",
      description:
        "Perfetto per chi inizia. Imparerai i passi fondamentali del ballo liscio e da sala, il ritmo e la postura corretta.",
      icon: Users,
      list: ["Passi base", "Ritmo e musicalità", "Portamento"],
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Boogie Woogie",
      level: "Social Dance",
      description:
        "Ideale per chi frequenta sale da ballo, feste, sagre e desidera aggiungere ulteriore divertimento con ritmi dinamici.",
      icon: Music,
      list: ["Tecnica di base", "Figure sincronizzate", "Movimento dinamico"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Ballo Liscio Intermedio",
      level: "Intermedio",
      description: "Approfondisci la tecnica, perfeziona i movimenti e aggiungi eleganza al tuo ballo.",
      icon: TrendingUp,
      list: ["Figure avanzate", "Stile personale", "Coreografie"],
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Ballo Liscio Avanzato",
      level: "Avanzato",
      description:
        "Per ballerini esperti che vogliono raggiungere l'eccellenza. Tecnica avanzata e preparazione competizioni.",
      icon: TrendingUp,
      list: ["Pratica libera", "Preparazione gare", "Socializzazione"],
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  const handleContactClick = () => {
    const phoneNumber = "393936631959"
    const message = encodeURIComponent("Ciao! Vorrei avere un colloquio per l'agonismo.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen pt-20 bg-background">
        {/* Hero Section */}
        <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/60 z-10" />
          <img
            src="/dance-studio-classes-wooden-floor-bright-elegant.jpg"
            alt="Corsi di ballo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4">
            <p className="text-xs uppercase tracking-wider mb-3 text-primary-foreground/90 font-bold">LE ATTIVITÀ</p>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-3">I Nostri Corsi</h1>
            <p className="text-sm md:text-base text-balance max-w-xl mx-auto">
              Dal divertimento del ballo sociale all'impegno dell'agonismo. Trova il tuo ritmo.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-serif font-normal mb-6 text-foreground">
              Scegli il tuo <span className="text-primary italic">percorso</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Scopri le attività che la nostra associazione propone. Ogni socio può partecipare liberamente secondo i
              propri interessi, dal semplice divertimento alla competizione agonistica.
            </p>
          </div>
        </section>

        {/* Griglia Corsi (Card) */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {courses.map((course, index) => {
                const Icon = course.icon
                return (
                  <Card
                    key={index}
                    className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group bg-card border-border/60 h-full flex flex-col"
                  >
                    {/* Badge Livello */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {course.level}
                      </span>
                    </div>

                    <div className="p-8 flex-grow">
                      <div
                        className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}
                      >
                        <Icon size={32} />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed min-h-[80px]">
                        {course.description}
                      </p>

                      <div className="space-y-3">
                        {course.list.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 pt-0 mt-auto">
                      {/* MODIFICATO: Link a Contatti invece di WhatsApp */}
                      <Link href="/contatti" className="w-full block">
                        <Button className="w-full bg-transparent" variant="outline">
                          Richiedi info
                        </Button>
                      </Link>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sezione Dettagli Agonismo */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-wider mb-3 text-primary font-bold">PER I PIÙ APPASSIONATI</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">L'Agonismo in Open Dance</h2>

              <div className="max-w-3xl mx-auto p-6 bg-accent/5 rounded-2xl border border-primary/10">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Dedichiamo un'attenzione speciale ai nostri <strong>allievi agonisti</strong> che rappresentano la
                  scuola nelle competizioni. Per chi ha scelto di trasformare la passione in disciplina sportiva,
                  offriamo un percorso di eccellenza tecnica e preparazione atletica, studiato per supportare ogni
                  coppia nel raggiungimento dei propri obiettivi agonistici e del podio.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Percorso Agonistico */}
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Star className="text-primary" size={24} />
                  PERCORSO AGONISTICO
                </h3>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Lezioni individuali di Danze Standard, Ballo da Sala, Liscio Unificato, specifiche per ogni coppia
                    in base alla disciplina praticata e al livello tecnico degli atleti.
                  </p>
                  <p>Partecipazione a stage e lectures con professionisti del settore.</p>
                  <p className="font-medium text-foreground">
                    Verifica e assistenza da parte degli insegnanti durante la pratica agonistica.
                  </p>
                </div>
              </div>

              {/* Allenamenti Guidati */}
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="text-primary" size={24} />
                  ALLENAMENTI GUIDATI
                </h3>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Per chi partecipa alle competizioni sono previsti vari allenamenti, in sede e fuori sede, con il
                    supporto tecnico dei Maestri.
                  </p>
                  <p>
                    Questo permette il monitoraggio preciso e continuo del livello generale ed individuale, consentendo
                    di ottimizzare al massimo tutte le fasi di preparazione.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              {/* Questo pulsante può rimanere WhatsApp dato che è per un colloquio specifico, o cambiare a Contatti se preferisci uniformità totale. Lo lascio WhatsApp come "Call to Action" forte. */}
              <Button
                size="lg"
                onClick={handleContactClick}
                className="px-8 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Contatta i Maestri per un colloquio
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
