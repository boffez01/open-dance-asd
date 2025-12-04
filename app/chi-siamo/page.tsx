"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Trophy, ChevronLeft, ChevronRight, Medal, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ChiSiamoPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Immagini dei fondatori
  const foundersImages = [
    {
      src: "/images/gallery/giorgio_moglie_7.jpg",
      alt: "Giorgio e Cristina in posa",
    },
    {
      src: "/images/gallery/giorgio_moglie_6.jpg",
      alt: "Giorgio e Cristina in gara",
    },
    {
      src: "/images/gallery/giorgio_molgie_5.jpeg.jpg",
      alt: "Giorgio e Cristina - Performance",
    },
    {
      src: "/images/gallery/giorgio_moglie_4.jpg",
      alt: "Giorgio e Cristina - Eleganza",
    },
    {
      src: "/images/giorgio-moglie.jpeg",
      alt: "Giorgio e sua moglie con trofeo Open Dance",
    },
    {
      src: "/images/giorgio-moglie-3.jpeg",
      alt: "Giorgio e sua moglie in abito turchese",
    },
    {
      src: "/images/giorgio-molgie-3.jpeg",
      alt: "Giorgio e sua moglie in competizione - abito bianco",
    },
    {
      src: "/images/giorgio-moglie-1.jpeg",
      alt: "Giorgio e sua moglie - close-up elegante",
    },
    {
      src: "/images/giorgio-moglie-2.jpeg",
      alt: "Giorgio e sua moglie in gara - abito nero",
    },
  ]

  // Animazione automatica ogni 2 SECONDI
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % foundersImages.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [foundersImages.length])

  // LISTA AGONISTI
  const agonisti = [
    {
      name: "Claudio Bertoldi e Simonetta Sironi",
      image: "/images/gallery/Claudio Bertoldi e Simonetta Sironi Danze Standard\u00A0B2.jpg",
    },
    {
      name: "Claudio Corsini e Fausta Pedroni",
      image: "/images/gallery/Claudio Corsini e Fausta Pedroni Danze Standard\u00A0B2.jpeg",
    },
    {
      name: "Fabio Maranta e Monica Antonelli",
      image: "/images/gallery/Fabio Maranta e Monica Antonelli Danze Nazionali\u00A0B1.jpg",
    },
    {
      name: "Fabio Martini e Marisa Barucchelli",
      image: "/images/gallery/Fabio Martini e Marisa Barucchelli Danze Standard\u00A0B1.jpg",
    },
    {
      name: "Fabio Pantano e Jennifer Rosa",
      image: "/images/gallery/Fabio Pantano e Jennifer Rosa Danze Standard\u00A0B1.jpg",
    },
    {
      name: "Fabrizio Bonassi e Paola Premoli",
      image: "/images/gallery/Fabrizio Bonassi e Paola Premoli Danze Nazionali\u00A0B1.jpg",
    },
    {
      name: "Fabrizio Ragni e Claudia Delaini",
      image: "/images/gallery/Fabrizio Ragni e Claudia Delaini Danze Standard\u00A0B3.jpg",
    },
    {
      name: "Giuseppe Franzoni e Elisabetta Volpi",
      image: "/images/gallery/Giuseppe Franzoni e Elisabetta Volpi Danze Nazionali\u00A0B2.jpg",
    },
    {
      name: "Giuseppe Massarotto e Rosalia Guerra",
      image: "/images/gallery/Giuseppe Massarotto e Rosalia Guerra Danze Standard\u00A0B2.jpg",
    },
    {
      name: "Massimo Zucchi e Alessandra Bresciani",
      image: "/images/gallery/Massimo Zucchi e Alessandra Bresciani Danze Standard\u00A0A.jpg",
    },
    {
      name: "Michele Turla e Dalida Turla",
      image: "/images/gallery/Michele Turla e Dalida Turla Danze Nazionali\u00A0B2.jpg",
    },
    {
      name: "Renato Mombelli e Silvia Volpi",
      image: "/images/gallery/Renato Mombelli e Silvia Volpi Danze Standard B2.jpeg",
    },
    {
      name: "Roberto Bonfadini e Patrizia Bracchi",
      image: "/images/gallery/Roberto Bonfadini e Patrizia Bracchi Danze Nazionali\u00A0A2.jpg",
    },
    {
      name: "Sergio Franceschetti e Giuliana Bersini",
      image: "/images/gallery/Sergio Franceschetti e Giuliana Bersini Danze Nazionali\u00A0B1.jpg",
    },
    {
      name: "Tiziano Mora e Silvia Santoni",
      image: "/images/gallery/Tiziano Mora e Silvia Santoni Danze Standard\u00A0A.jpg",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % foundersImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + foundersImages.length) % foundersImages.length)
  }

  const handleContactClick = () => {
    const phoneNumber = "393936631959"
    const message = encodeURIComponent("Ciao! Vorrei avere informazioni su Open Dance ASD.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-accent/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="/images/giorgio-lagorio-cristina-spinoni-insegnanti.jpg"
            alt="Giorgio Lagorio e Cristina Spinoni"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4 container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-wider mb-3 text-white/90 font-bold">CHI SIAMO</p>
              <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 drop-shadow-xl leading-tight">
                Una comunità unita dalla <span className="text-[#D4AF37] italic">passione per il ballo</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">LA NOSTRA MISSIONE</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Creare un ambiente di danza</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Open Dance ASD si impegna a fornire una esperienza di danza unica e coinvolgente, dove la passione e la
                professionalità si uniscono per creare un'atmosfera accogliente e stimolante.
              </p>
            </motion.div>
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
                <a href="/corsi">
                  <Button variant="secondary" size="lg" className="font-medium">
                    Scopri i Corsi
                  </Button>
                </a>
                <a href="/galleria">
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
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Giorgio Lagorio e Cristina Spinoni</h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  <motion.div variants={fadeInUp} className="prose text-muted-foreground leading-relaxed text-sm space-y-4 text-justify">
                    <p>
                      Dopo aver praticato le <strong>Danze Nazionali</strong> – Ballo da Sala e Liscio unificato – 
                      ed aver conseguito il titolo di <strong>Campioni Italiani</strong>, Giorgio e Cristina 
                      intraprendono un percorso nelle Danze Standard fino all’ottenimento 
                      della <strong>Classe Internazionale</strong> con successiva partecipazione a concorsi di 
                      assoluto prestigio.
                    </p>
                    <p>
                      Dalla loro passione per il ballo, nel <strong>2015</strong>, nasce <strong>Open Dance ASD</strong>, con 
                      l’obiettivo di creare uno spazio dove l’amore per la danza, la 
                      professionalità e l’accoglienza siano le note distintive.
                    </p>
                    <div className="p-4 bg-white/50 border-l-4 border-primary rounded-r-lg my-4 shadow-sm italic text-foreground/90 font-medium">
                      "Il conseguimento del diploma di Maestri, il successivo ottenimento di 
                      abilitazioni in ambito federale, il continuo processo di studi ed 
                      aggiornamenti, oltre all’esperienza ed alla sensibilità acquisita durante la 
                      pratica quotidiana, rendono la Open Dance il luogo ideale in cui muovere i 
                      primi passi di danza e, per chi lo desidera, sognare in grande e puntare al 
                      raggiungimento di importanti obiettivi in ambito agonistico."
                    </div>
                    <p>
                      Da oltre un decennio Open Dance è diventata una vera famiglia per 
                      centinaia di appassionati, all’interno della quale ogni passo è 
                      un’opportunità per crescere insieme, condividendo la gioia del 
                      movimento e della musica.
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="pt-6 border-t border-border">
                    <h4 className="text-lg font-bold mb-4 text-card-foreground flex items-center gap-2">
                      <Medal className="text-primary" size={20}/>
                      ESPERIENZA E COMPETENZE
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>Da oltre vent’anni nel mondo della danza</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>Solida esperienza in ambito agonistico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>Da oltre dieci anni tecnici di riferimento di Open Dance ASD</span>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative group"
                >
                  <Card className="overflow-hidden border-2 border-primary/20 bg-background shadow-xl">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={foundersImages[currentImageIndex].src || "/placeholder.svg"}
                          alt={foundersImages[currentImageIndex].alt}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full object-cover absolute top-0 left-0"
                        />
                      </AnimatePresence>

                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Immagine precedente"
                      >
                        <ChevronLeft className="text-foreground" size={24} />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                        aria-label="Immagine successiva"
                      >
                        <ChevronRight className="text-foreground" size={24} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full text-xs font-medium z-10">
                        {currentImageIndex + 1} / {foundersImages.length}
                      </div>
                    </div>
                  </Card>

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
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. SEZIONE ALLIEVI */}
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
                <Card className="overflow-hidden border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                  <div className="aspect-video relative bg-accent/10">
                    <img
                      src="/images/gallery/gruppo_cena.jpeg"
                      alt="Gruppo cena - Eventi e Feste Open Dance"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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

                <Card className="overflow-hidden border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                  <div className="aspect-video relative bg-accent/10">
                    <img
                      src="/images/gallery/gruppo_fermo.jpeg"
                      alt="Lezioni di gruppo Open Dance"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                <Card className="overflow-hidden border border-primary/20 hover:shadow-md transition-all">
                  <div className="aspect-square relative bg-accent/10">
                    <img
                      src="/images/gallery/halloween_gruppo.jpeg"
                      alt="Festa Halloween"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Card>

                <Card className="overflow-hidden border border-primary/20 hover:shadow-md transition-all">
                  <div className="aspect-square relative bg-accent/10">
                    <img src="/images/corso-gruppo.jpeg" alt="Corso di gruppo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </Card>

                <Card className="overflow-hidden border border-primary/20 hover:shadow-md transition-all">
                  <div className="aspect-square relative bg-accent/10">
                    <img
                      src="/images/gallery/gruppo_ben_vestito.jpeg"
                      alt="Gruppo in abito elegante"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEZIONE AGONISTI */}
        <section className="py-16 bg-accent/5 overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">ECCELLENZA</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">I Nostri Agonisti</h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Gli atleti che rappresentano Open Dance ASD nelle competizioni nazionali e internazionali
              </p>
            </div>
          </div>

          {/* VISUALIZZAZIONE MOBILE: SCROLL NATIVO (Swipe Destra/Sinistra) */}
          <div className="md:hidden flex overflow-x-auto gap-4 px-4 pb-8 snap-x no-scrollbar">
            {agonisti.map((coppia, index) => (
              <div key={index} className="flex-shrink-0 w-[260px] snap-center">
                <Card className="overflow-hidden border-2 border-primary/20 h-full hover:shadow-lg transition-shadow bg-card">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={coppia.image}
                      alt={coppia.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-card text-center">
                    <p className="text-sm italic text-muted-foreground font-medium">{coppia.name}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* VISUALIZZAZIONE DESKTOP: ANIMAZIONE LOOP (Invariata) */}
          <div className="hidden md:block relative w-full overflow-hidden">
            <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
              {/* Loop principale */}
              <div className="flex gap-6 px-3">
                {agonisti.map((coppia, index) => (
                  <div key={index} className="flex-shrink-0 w-[280px]">
                    <Card className="overflow-hidden border-2 border-primary/20 h-full hover:shadow-lg transition-shadow bg-card">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={coppia.image}
                          alt={coppia.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-card text-center">
                        <p className="text-sm italic text-muted-foreground font-medium">{coppia.name}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless infinite loop */}
              <div className="flex gap-6 px-3">
                {agonisti.map((coppia, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0 w-[280px]">
                    <Card className="overflow-hidden border-2 border-primary/20 h-full hover:shadow-lg transition-shadow bg-card">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={coppia.image}
                          alt={coppia.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-card text-center">
                        <p className="text-sm italic text-muted-foreground font-medium">{coppia.name}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xs uppercase tracking-wider mb-3 text-primary text-center">I NOSTRI VALORI</p>
            <h2 className="text-3xl font-normal mb-12 text-foreground text-center">Cosa ci guida ogni giorno</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border border-border text-center hover:shadow-md transition-all">
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
              <Card className="p-6 bg-card border border-border text-center hover:shadow-md transition-all">
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
              <Card className="p-6 bg-card border border-border text-center hover:shadow-md transition-all">
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

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-normal mb-4 text-foreground">Domande Frequenti</h2>
              <p className="text-sm text-muted-foreground">Troverai qui le risposte che cerchi sulla nostra associazione.</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { title: "Come mi iscrivo?", desc: "Contattaci via WhatsApp o vieni a trovarci in sede per compilare il modulo.", icon: "📝" },
                { title: "Quali sono gli orari?", desc: "Dal lunedì al sabato 9:00/23:00, domenica 17:00/23:00.", icon: "⏰" },
                { title: "Abbigliamento?", desc: "Comodo e scarpe da danza (consigliamo al primo incontro).", icon: "👞" },
                { title: "Età minima?", desc: "Dai quattro anni in su, senza limiti massimi.", icon: "👶" },
                { title: "Posso provare?", desc: "Sì, offriamo una lezione di prova gratuita.", icon: "✨" },
                { title: "Stili insegnati?", desc: "Liscio, standard, latino, balli di gruppo e altro.", icon: "💃" }
              ].map((faq, idx) => (
                <motion.div variants={fadeInUp} key={idx}>
                  <Card className="p-6 bg-card text-foreground border border-border h-full hover:shadow-md transition-all hover:border-primary/30">
                    <div className="text-3xl mb-4">{faq.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{faq.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center">
              <h3 className="text-2xl font-normal mb-4">Hai altre domande?</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Scrivi a noi e risponderemo presto con tutto quello che serve.
              </p>
              <Button 
                onClick={handleContactClick}
                variant="outline" 
                className="px-8 py-6 text-lg border-2 hover:bg-accent hover:text-accent-foreground"
              >
                Contattaci Subito
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
