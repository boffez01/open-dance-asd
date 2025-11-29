"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function ChiSiamoPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [agonistiImageIndex, setAgonistiImageIndex] = useState(0)

  const foundersImages = [
    {
      src: "/images/whatsapp-20image-202025-11-28-20at-2017.jpeg",
      alt: "Giorgio Lagorio e sua moglie con trofeo",
    },
    {
      src: "/images/whatsapp-20image-202025-11-28-20at-2017.jpeg",
      alt: "Giorgio e sua moglie in abito turchese",
    },
    {
      src: "/images/whatsapp-20image-202025-11-28-20at-2017.jpeg",
      alt: "Giorgio e sua moglie in competizione - abito bianco",
    },
    {
      src: "/images/whatsapp-20image-202025-11-28-20at-2017.jpeg",
      alt: "Giorgio e sua moglie in gara - abito nero",
    },
    {
      src: "/images/whatsapp-20image-202025-11-28-20at-2017.jpeg",
      alt: "Giorgio e sua moglie - close-up elegante",
    },
    {
      src: "/images/whatsapp-20image-202025-11-28-20at-2017.jpeg",
      alt: "Giorgio e sua moglie - foto in bianco e nero",
    },
    {
      src: "/images/whatsapp-20image-202025-11-28-20at-2017.jpeg",
      alt: "Giorgio e sua moglie - abito viola e bianco",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % foundersImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + foundersImages.length) % foundersImages.length)
  }

  const nextAgonistiImage = () => {
    setAgonistiImageIndex((prev) => (prev + 1) % 3)
  }

  const prevAgonistiImage = () => {
    setAgonistiImageIndex((prev) => (prev - 1 + 3) % 3)
  }

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 bg-gradient-to-b from-accent/10 to-background">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
            alt="Giorgio Lagorio e sua moglie"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4">
            <p className="text-xs uppercase tracking-wider mb-3 text-white/90">CHI SIAMO</p>
            <h1 className="text-4xl md:text-5xl font-normal mb-3 drop-shadow-lg">
              Una comunità unita dalla <span className="text-[#D4AF37] italic">passione per il ballo</span>
            </h1>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">LA NOSTRA MISSIONE</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Creare un ambiente di danza</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Open Dance ASD si impegna a fornire una esperienza di danza unica e coinvolgente, dove la passione e la
                professionalità si uniscono per creare un'atmosfera accogliente e stimolante.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-sm mb-8 opacity-90">
                Anni di dedizione, soci che crescono, competizioni vinte. Questi numeri raccontano chi siamo e cosa
                abbiamo costruito insieme nel tempo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                    <div className="text-sm font-medium opacity-90">Anni di attività</div>
                  </CardContent>
                </Card>

                <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
                    <div className="text-sm font-medium opacity-90">Soci iscritti</div>
                  </CardContent>
                </Card>

                <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                    <div className="text-sm font-medium opacity-90">Premi conquistati</div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="/attivita">
                  <Button variant="secondary" size="lg" className="font-medium">
                    Scopri
                  </Button>
                </a>
                <a href="/attivita#tornei">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-medium bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    I Nostri Tornei
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">I FONDATORI</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Giorgio Lagorio e sua moglie</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Pluridecennale esperienza nel ballo liscio e oltre un decennio di dedizione alla crescita di Open Dance
                ASD
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content - Combined paragraph for both */}
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Maestro di ballo liscio con una pluridecennale esperienza nel mondo della danza sportiva, Giorgio
                      ha dedicato la sua vita alla danza, conquistando numerosi titoli nazionali e internazionali. Ha
                      fondato Open Dance ASD oltre un decennio fa con l'obiettivo di creare uno spazio dove la passione
                      per il ballo incontra la professionalità e l'accoglienza.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Co-fondatrice di Open Dance ASD, porta con sé una pluridecennale esperienza nel ballo liscio e una
                      sensibilità unica nell'insegnamento. Insieme a Giorgio, ha costruito da oltre un decennio una
                      scuola che è diventata una vera famiglia per centinaia di appassionati. Con anni di dedizione ai
                      propri allievi, è specializzata nel creare un'atmosfera dove tecnica ed emozione si fondono
                      perfettamente, permettendo ad ogni ballerino di esprimere il proprio talento.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      La loro filosofia condivisa: ogni passo è un'opportunità per crescere insieme, condividendo la
                      gioia del movimento e della musica.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="text-lg font-bold mb-3 text-card-foreground">Esperienza e Competenze</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Trophy className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Oltre 20 anni di esperienza nel ballo liscio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Numerosi titoli nazionali e internazionali</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Trophy className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Fondatori e direttori di Open Dance ASD da oltre 10 anni</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Carousel */}
                <div className="relative group">
                  <Card className="overflow-hidden border-2 border-primary/20">
                    <div className="aspect-[3/4] relative bg-accent/10">
                      <img
                        src={foundersImages[currentImageIndex].src || "/placeholder.svg"}
                        alt={foundersImages[currentImageIndex].alt}
                        className="w-full h-full object-cover"
                      />

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Immagine precedente"
                      >
                        <ChevronLeft className="text-foreground" size={24} />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Immagine successiva"
                      >
                        <ChevronRight className="text-foreground" size={24} />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full text-xs font-medium">
                        {currentImageIndex + 1} / {foundersImages.length}
                      </div>
                    </div>
                  </Card>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-4">
                    {foundersImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                        }`}
                        aria-label={`Vai all'immagine ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Students Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">LA NOSTRA FAMIGLIA</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">I Nostri Allievi</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Una grande famiglia unita dalla passione per il ballo. Ogni socio è parte di una comunità che cresce e
                si diverte insieme.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="aspect-video relative bg-accent/10">
                    <img
                      src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
                      alt="Gruppo di allievi Open Dance in festa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Eventi e Feste</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Momenti di condivisione e divertimento che rafforzano il legame tra tutti i membri della nostra
                      associazione.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="aspect-video relative bg-accent/10">
                    <img
                      src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
                      alt="Lezioni di gruppo Open Dance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Lezioni di Gruppo</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Corsi dinamici e coinvolgenti dove ogni allievo può esprimere il proprio talento e crescere
                      tecnicamente.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="overflow-hidden border border-primary/20">
                  <div className="aspect-square relative bg-accent/10">
                    <img
                      src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
                      alt="Corso principianti"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>

                <Card className="overflow-hidden border border-primary/20">
                  <div className="aspect-square relative bg-accent/10">
                    <img
                      src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
                      alt="Lezione avanzata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>

                <Card className="overflow-hidden border border-primary/20">
                  <div className="aspect-square relative bg-accent/10">
                    <img
                      src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
                      alt="Festa associazione"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">ECCELLENZA</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">I Nostri Agonisti</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Gli atleti che rappresentano Open Dance ASD nelle competizioni nazionali e internazionali, portando alto
                il nome della nostra scuola.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="overflow-hidden border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="aspect-video relative bg-accent/10">
                    <img
                      src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
                      alt="Agonisti Open Dance in formazione"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Preparazione Agonistica</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Allenamenti intensivi e specializzati per chi vuole competere ai massimi livelli nel ballo
                      sportivo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="aspect-video relative bg-accent/10">
                    <img
                      src="/images/whatsapp-20image-202025-11-28-20at-2017.jpeg"
                      alt="Team agonistico Open Dance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Competizioni e Successi</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I nostri atleti partecipano regolarmente a gare nazionali e internazionali, conquistando numerosi
                      premi e riconoscimenti.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <Users className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-2xl font-bold mb-3 text-card-foreground">Diventa un Agonista</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                    Se hai la passione e la determinazione per competere, il nostro team agonistico ti aspetta.
                    Preparati a vivere l'emozione delle competizioni e a far parte di una squadra vincente.
                  </p>
                  <Button size="lg" className="font-medium">
                    Scopri di più
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xs uppercase tracking-wider mb-3 text-primary text-center">I NOSTRI VALORI</p>
            <h2 className="text-3xl font-normal mb-12 text-foreground text-center">Cosa ci guida ogni giorno</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground flex items-center justify-center gap-2">
                  <Heart size={16} className="text-primary" />
                  Passione
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Il ballo è la nostra vita e vogliamo condividere questa passione con te.
                </p>
              </Card>

              <Card className="p-6 bg-card border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground flex items-center justify-center gap-2">
                  <Users size={16} className="text-primary" />
                  Comunità
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Accogliamo ballerini di ogni età creando un ambiente dove tutti si sentono a casa.
                </p>
              </Card>

              <Card className="p-6 bg-card border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground flex items-center justify-center gap-2">
                  <Trophy size={16} className="text-primary" />
                  Crescita
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Insegniamo con metodo garantendo a ogni allievo un percorso personalizzato.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-background to-accent/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Domande</h2>
              <p className="text-sm text-background/80">
                Troverai qui le risposte che cerchi sulla nostra associazione e i corsi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-background text-foreground border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2">Come mi iscrivo?</h3>
                <p className="text-xs text-muted-foreground">
                  Contattaci via WhatsApp o vieni a trovarci in sede per compilare il modulo di adesione.
                </p>
              </Card>

              <Card className="p-6 bg-background text-foreground border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2">Quali sono gli orari?</h3>
                <p className="text-xs text-muted-foreground">
                  I corsi si tengono dal lunedì al venerdì sera e il sabato mattina, con fasce orarie diverse per ogni
                  livello.
                </p>
              </Card>

              <Card className="p-6 bg-background text-foreground border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2">Che cosa devo indossare?</h3>
                <p className="text-xs text-muted-foreground">
                  Abbigliamento comodo e scarpe da danza sono essenziali: ti consigliamo il resto al primo incontro.
                </p>
              </Card>

              <Card className="p-6 bg-background text-foreground border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2">C'è un'età minima?</h3>
                <p className="text-xs text-muted-foreground">
                  Accogliamo ballerini dai quattro anni in su, senza limiti di età massima.
                </p>
              </Card>

              <Card className="p-6 bg-background text-foreground border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2">Posso provare prima?</h3>
                <p className="text-xs text-muted-foreground">
                  Sì, offriamo una lezione di prova gratuita per conoscere lo stile e l'insegnante.
                </p>
              </Card>

              <Card className="p-6 bg-background text-foreground border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold mb-2">Quali stili insegnate?</h3>
                <p className="text-xs text-muted-foreground">
                  Classico, contemporaneo, latino, moderno e danza urbana sono i nostri principali indirizzi.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-normal mb-4">Hai altre domande?</h3>
              <p className="text-sm text-background/80 mb-6">
                Scrivi a noi e risponderemo presto con tutto quello che serve.
              </p>
              <Button variant="outline" className="bg-background text-foreground hover:bg-background/90">
                Contatti
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
