"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Heart, ArrowRight, Facebook, Clock, Lightbulb, HelpCircle, Info, LogIn, Star, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  
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
              Dai bambini ai ragazzi, fino agli adulti e senior. <br/>
              I nostri corsi sono pensati per accogliere ballerini di ogni generazione.
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
                <Button 
                  onClick={handleSocioClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
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
              <p className="text-xs uppercase tracking-wider mb-3 text-primary">LE ATTIVITÀ</p>
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
                    Attività dedicata ai soci che desiderano avvicinarsi al mondo del ballo liscio. Un percorso graduale
                    per imparare i passi base di mazurka, polka e valzer.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 mb-4">
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Passi base</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Ritmo e musicalità</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Portamento</span></li>
                  </ul>
                  {/* MODIFICATO: Link a Contatti */}
                  <Link href="/contatti">
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center">
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
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Figure avanzate</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Stile personale</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Coreografie</span></li>
                  </ul>
                  {/* MODIFICATO: Link a Contatti */}
                  <Link href="/contatti">
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center">
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
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Pratica libera</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Preparazione gare</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Socializzazione</span></li>
                  </ul>
                  {/* MODIFICATO: Link a Contatti */}
                  <Link href="/contatti">
                    <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center">
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

       {/* Vita Associativa - SOLO FACEBOOK CON FEED REALE */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block border-b-2 border-accent pb-1 mb-4">
                <h2 className="text-3xl md:text-4xl font-normal">La Vita in Associazione</h2>
              </div>
            </div>

            <div className="max-w-3xl mx-auto animate-in zoom-in-95 duration-700 delay-200">
              <Card className="p-8 bg-white border border-border shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-md">
                      <Facebook size={32} />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-[#1877F2]">Open Dance ASD</h3>
                      <p className="text-muted-foreground text-sm">Seguici per aggiornamenti in tempo reale</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.facebook.com/p/OPEN-DANCE-ASD-100058870162755/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#1877F2] hover:bg-[#1864cc] text-white px-6">
                      Vai alla Pagina
                    </Button>
                  </a>
                </div>

                {/* FEED REALE DI FACEBOOK */}
                <div className="w-full flex justify-center bg-white rounded-xl overflow-hidden border border-gray-100">
                <iframe 
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F100058870162755&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  width="500" 
  height="600" 
  style={{border:'none', overflow:'hidden', maxWidth: '100%'}} 
  scrolling="no" 
  frameBorder="0" 
  allowFullScreen={true} 
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
></iframe>
                </div>
                {/* FINE FEED REALE */}

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
              <Link href="/galleria">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white bg-transparent">
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
              <p className="text-white/80">
                Troverai qui le risposte che cerchi sulla nostra associazione e i corsi.
              </p>
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
                  Lun - Sab: 9:00 - 23:00<br/>
                  Domenica: 17:00 - 23:00
                </p>
              </Card>

              <Card className="p-8 bg-white text-black border-0 rounded-xl hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#f9f4e8] rounded-lg flex items-center justify-center mb-6">
                   <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold mb-3">Che cosa devo indossare?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                   Abbigliamento comodo è sufficiente.
                </p>
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
                <Button variant="outline" className="bg-white text-black hover:bg-white/90 px-8 py-2 rounded-md font-medium">
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