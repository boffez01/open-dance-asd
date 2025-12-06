"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Heart, ArrowRight, Clock, Lightbulb, HelpCircle, Info, LogIn, Star, Music } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function HomePageClient() {
  const handleSocioClick = () => {
    const phoneNumber = "393936631959"
    const message = encodeURIComponent("Ciao! Vorrei sapere come diventare socio.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen">
        {/* Hero Section - SENZA LOGO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/elegant-ballroom-interior-chandelier-wooden-floor.jpg"
            alt="Sala da ballo elegante"
            className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000 scale-105"
          />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight animate-in slide-in-from-bottom-8 duration-1000">
              <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-semibold tracking-wide">
                La passione ci unisce,
              </span>
              <br />
              <span className="text-[#D4AF37] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-bold tracking-wide text-5xl md:text-6xl lg:text-7xl">
                il ritmo ci guida.
              </span>
            </h1>

            <p className="text-base md:text-lg text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-8 max-w-2xl mx-auto leading-relaxed font-medium animate-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              Associazione Sportiva Dilettantistica a Cazzago San Martino
            </p>

            <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              {/* MODIFICATO: Apre WhatsApp invece di linkare a contatti */}
              <Button
                size="lg"
                onClick={handleSocioClick}
                className="bg-black hover:bg-black/80 text-white transition-transform hover:scale-105"
              >
                Come diventare Socio
              </Button>
            </div>
          </div>
        </section>

        {/* Chi Siamo Section */}
        <section className="py-16 bg-background animate-in fade-in duration-1000 delay-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block border-b-2 border-accent pb-1 mb-4">
                <h2 className="text-3xl md:text-4xl font-normal">Chi Siamo</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  Open Dance ASD è nata dalla passione per il ballo e dalla voglia di creare un luogo di{" "}
                  <strong className="text-foreground">aggregazione</strong> e{" "}
                  <strong className="text-foreground">divertimento</strong> per tutti gli amanti della danza.
                </p>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  La nostra associazione promuove i valori dello <strong className="text-foreground">sport</strong>,
                  della <strong className="text-foreground">socialità</strong> e del{" "}
                  <strong className="text-foreground">benessere</strong>, offrendo un ambiente accogliente e
                  professionale dove il ritmo diventa il linguaggio che ci unisce.
                </p>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Ogni socio è parte di una grande famiglia che condivide la stessa passione: ballare con il cuore.
                </p>

                <div className="flex gap-2 mt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Heart size={16} className="text-primary" />
                    <span className="font-medium">Passione</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-primary" />
                    <span className="font-medium">Comunità</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy size={16} className="text-primary" />
                    <span className="font-medium">Eccellenza</span>
                  </div>
                </div>

                <div className="mt-6">
                  {/* MODIFICATO: Link a Contatti invece che Chi Siamo */}
                  <Link href="/contatti">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Scopri di più
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/giorgio-lagorio-cristina-spinoni-insegnanti.jpg"
                  alt="Giorgio Lagorio e Cristina Spinoni - Insegnanti Open Dance"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BANNER PER TUTTE LE ETÀ */}
        <section className="py-12 bg-[#D4AF37] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Danza per Tutte le Età</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Dai bambini ai ragazzi, fino agli adulti e senior. <br />I nostri corsi sono pensati per accogliere
              ballerini di ogni generazione.
            </p>
          </div>
        </section>

        {/* I Nostri Allievi Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">LA NOSTRA FAMIGLIA</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">
                I Nostri <span className="text-primary italic">Allievi</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Una grande famiglia unita dalla passione per il ballo. Scopri la nostra comunità di ballerini che
                condivide emozioni, amicizia e la gioia di ballare insieme.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/gruppo-ben-vestito.jpeg"
                  alt="I nostri allievi Open Dance ASD"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground mb-6">
                  Oltre 450 soci che ballano con noi, una comunità che cresce giorno dopo giorno. Vieni a conoscerci e
                  diventa parte della famiglia Open Dance!
                </p>
                {/* MODIFICATO: Unisciti a Noi ora apre WhatsApp come Diventa Socio */}
                <Button onClick={handleSocioClick} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Unisciti a Noi
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Le Attività Section - 3 CARD ORIGINALI */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider font-bold mb-3 text-primary">LE ATTIVITÀ</p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">
                Attività riservate ai <span className="text-primary italic">nostri soci</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Scopri le attività che la nostra associazione propone. Ogni socio può partecipare liberamente secondo i
                propri interessi e disponibilità.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/corso-gruppo.jpeg"
                  alt="Lezione di ballo liscio Open Dance"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-t-4 border-t-primary">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">Ballo Liscio - Avviamento</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Attività dedicata ai soci che desiderano avvicinarsi al mondo del ballo liscio e da sala. Un
                    percorso graduale per imparare i passi base.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Passi base</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Ritmo e musicalità</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Portamento</span>
                    </li>
                  </ul>
                  {/* MODIFICATO: Link a Contatti */}
                  <Link href="/contatti">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center"
                    >
                      <span className="text-balance leading-tight">Richiedi info per partecipare →</span>
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-t-4 border-t-primary">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">Ballo Liscio - Perfezionamento</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Per i soci che vogliono approfondire la tecnica e affinare lo stile. Focus su figure avanzate e
                    interpretazione musicale.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Figure avanzate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Stile personale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Coreografie</span>
                    </li>
                  </ul>
                  {/* MODIFICATO: Link a Contatti */}
                  <Link href="/contatti">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center"
                    >
                      <span className="text-balance leading-tight">Richiedi info per partecipare →</span>
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-t-4 border-t-primary">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">Sessioni di Allenamento</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Momenti dedicati alla pratica libera e all'allenamento. Un'opportunità per i soci di esercitarsi
                    insieme e consolidare quanto appreso.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Pratica libera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Preparazione gare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Socializzazione</span>
                    </li>
                  </ul>
                  {/* MODIFICATO: Link a Contatti */}
                  <Link href="/contatti">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center"
                    >
                      <span className="text-balance leading-tight">Richiedi info per partecipare →</span>
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* NUOVA SEZIONE: I NOSTRI STILI NEL DETTAGLIO */}
        <section className="py-16 bg-background border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">I Nostri Stili nel Dettaglio</h2>
              <p className="text-muted-foreground">Approfondisci cosa imparerai nei nostri corsi</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="p-6 bg-card hover:shadow-lg transition-all border-l-4 border-l-purple-500">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 text-purple-600">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Danze Standard</h3>
                <p className="text-sm text-muted-foreground">
                  Eleganza e tecnica pura. Valzer Inglese, Tango, Valzer Viennese, Slow Foxtrot e Quickstep.
                </p>
              </Card>

              <Card className="p-6 bg-card hover:shadow-lg transition-all border-l-4 border-l-blue-500">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ballo da Sala</h3>
                <p className="text-sm text-muted-foreground">
                  La tradizione del ballo di coppia. Valzer Lento, Tango e Foxtrot per ballare in armonia.
                </p>
              </Card>

              <Card className="p-6 bg-card hover:shadow-lg transition-all border-l-4 border-l-red-500">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 text-red-600">
                  <Trophy size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Liscio Unificato</h3>
                <p className="text-sm text-muted-foreground">
                  I ritmi classici italiani: Mazurka, Valzer Viennese e Polka, perfetti per le serate danzanti.
                </p>
              </Card>

              <Card className="p-6 bg-card hover:shadow-lg transition-all border-l-4 border-l-green-500">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <Music size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Social Dance</h3>
                <p className="text-sm text-muted-foreground">
                  Ritmi coinvolgenti e divertimento. Boogie Woogie, Cha Cha Cha, Beguine e balli di gruppo.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Vita Associativa - SOCIAL MEDIA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block border-b-2 border-accent pb-1 mb-4">
                <h2 className="text-3xl md:text-4xl font-normal">La Vita in Associazione</h2>
              </div>
              <p className="text-xl text-muted-foreground mt-4">
                Vuoi vedere la vita in associazione? Guardaci sui nostri social media!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-white border border-border shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/p/OPEN-DANCE-ASD-100058870162755/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 rounded-lg bg-accent/5 hover:bg-accent/10 transition-all hover:scale-105 group"
                  >
                    <div className="w-20 h-20 bg-[#1877F2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Facebook</span>
                    <span className="text-sm text-muted-foreground text-center">Seguici per foto e aggiornamenti</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/opendanceasd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 rounded-lg bg-accent/5 hover:bg-accent/10 transition-all hover:scale-105 group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.949 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948-.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.013-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Instagram</span>
                    <span className="text-sm text-muted-foreground text-center">Le nostre storie e momenti</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@opendanceasd?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-6 rounded-lg bg-accent/5 hover:bg-accent/10 transition-all hover:scale-105 group"
                  >
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">TikTok</span>
                    <span className="text-sm text-muted-foreground text-center">Video e contenuti esclusivi</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Numeri Section */}
        <section className="py-16 bg-[#D4AF37] text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-wider font-bold mb-3 text-white/80">NUMERI</div>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">La storia scritta dai nostri passi</h2>
              <p className="text-base text-white/90 max-w-2xl mx-auto">
                Anni di dedizione, soci che crescono, competizioni vinte. Questi numeri raccontano chi siamo e cosa
                abbiamo costruito insieme nel tempo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
              <Card className="p-10 text-center bg-white border-0 shadow-lg text-black">
                <div className="text-6xl font-bold mb-3">10+</div>
                <p className="text-base text-muted-foreground">Anni di attività</p>
              </Card>
              <Card className="p-10 text-center bg-white border-0 shadow-lg text-black">
                <div className="text-6xl font-bold mb-3">1000+</div>
                <p className="text-base text-muted-foreground">Soci iscritti</p>
              </Card>
              <Card className="p-10 text-center bg-white border-0 shadow-lg text-black">
                <div className="text-6xl font-bold mb-3">500+</div>
                <p className="text-base text-muted-foreground">Premi conquistati</p>
              </Card>
            </div>

            <div className="flex gap-4 justify-center">
              {/* MODIFICATO: Scopri -> Contatti */}
              <Link href="/contatti">
                <Button size="lg" className="bg-white text-[#D4AF37] hover:bg-white/90 font-semibold">
                  Scopri
                </Button>
              </Link>
              <Link href="/vita-associativa">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 hover:text-white bg-transparent"
                >
                  I Nostri Tornei
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="text-3xl md:text-4xl font-normal font-serif mb-4">Domande</h2>
              <p className="text-white/80">Troverai qui le risposte che cerchi sulla nostra associazione e i corsi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              <Card className="p-8 bg-white text-black border-0 rounded-xl hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#f9f4e8] rounded-lg flex items-center justify-center mb-6">
                  <LogIn className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold mb-3">Come mi iscrivo?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Contattaci via WhatsApp o vieni a trovarci in sede per compilare il modulo di adesione.
                </p>
              </Card>

              <Card className="p-8 bg-white text-black border-0 rounded-xl hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#f9f4e8] rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold mb-3">Quali sono gli orari?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lun - Sab: 9:00 - 23:00
                  <br />
                  Domenica: 17:00 - 23:00
                </p>
              </Card>

              <Card className="p-8 bg-white text-black border-0 rounded-xl hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#f9f4e8] rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold mb-3">Che cosa devo indossare?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Abbigliamento comodo è sufficiente.</p>
              </Card>

              <Card className="p-8 bg-white text-black border-0 rounded-xl hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#f9f4e8] rounded-lg flex items-center justify-center mb-6">
                  <HelpCircle className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold mb-3">C'è un'età minima?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Accogliamo ballerini dai quattro anni in su, senza limiti di età massima.
                </p>
              </Card>

              <Card className="p-8 bg-white text-black border-0 rounded-xl hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#f9f4e8] rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold mb-3">Posso provare prima?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sì, offriamo una lezione di prova gratuita per conoscere lo stile e l'insegnante.
                </p>
              </Card>

              {/* CARD 6 - SOSTITUITA "Serve un partner?" */}
              <Card className="p-8 bg-white text-black border-0 rounded-xl hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#f9f4e8] rounded-lg flex items-center justify-center mb-6">
                  <Info className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold mb-3">Serve un partner?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Non è obbligatorio. Molti vengono da soli e si formano coppie durante i corsi.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-normal mb-4 font-serif">Hai altre domande?</h3>
              <p className="text-base text-white/80 mb-8">
                Scrivi a noi e risponderemo presto con tutto quello che serve.
              </p>
              <Link href="/contatti">
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-white/90 px-8 py-2 rounded-md font-medium"
                >
                  Contatti
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
