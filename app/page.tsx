import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Heart, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/elegant-ballroom-interior-chandelier-wooden-floor.jpg"
            alt="Sala da ballo elegante"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4">
            <div className="mb-8 py-4">
              <img
                src="/images/logo-sgranato.jpeg"
                alt="Open Dance Logo"
                className="w-48 h-48 md:w-56 md:h-56 mx-auto object-contain drop-shadow-2xl"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
              <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-semibold tracking-wide">
                La passione ci unisce,
              </span>
              <br />
              <span className="text-[#D4AF37] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-bold tracking-wide text-5xl md:text-6xl lg:text-7xl">
                il ritmo ci guida.
              </span>
            </h1>

            <p className="text-base md:text-lg text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Associazione Sportiva Dilettantistica a Cazzago San Martino
            </p>

            <Button size="lg" className="bg-black hover:bg-black/80 text-white">
              Come diventare Socio
            </Button>
          </div>
        </section>

        <section className="py-16 bg-background">
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
                  <Link href="/chi-siamo">
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
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Unisciti a Noi</Button>
              </div>
            </div>
          </div>
        </section>

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
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-card-foreground">Ballo Liscio - Avviamento</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Attività dedicata ai soci che desiderano avvicinarsi al mondo del ballo liscio. Un percorso graduale
                    per imparare i passi base di mazurka, polka e valzer.
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center"
                  >
                    <span className="text-balance leading-tight">Richiedi info per partecipare →</span>
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-t-4 border-t-primary">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center"
                  >
                    <span className="text-balance leading-tight">Richiedi info per partecipare →</span>
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-t-4 border-t-primary">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent h-auto min-h-[40px] py-2 px-4 flex items-center justify-center"
                  >
                    <span className="text-balance leading-tight">Richiedi info per partecipare →</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block border-b-2 border-accent pb-1 mb-4">
                <h2 className="text-3xl md:text-4xl font-normal">La Vita in Associazione</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Facebook Feed */}
              <Card className="p-6 bg-card border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Seguici su Facebook</h3>
                    <p className="text-sm text-muted-foreground">Resta aggiornato sulle nostre attività</p>
                  </div>
                </div>

                <div className="bg-accent/5 rounded-lg p-10 text-center min-h-[350px] flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-5">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-medium mb-3">Feed Facebook Automatico</h4>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Qui verrà integrato il feed della pagina Facebook ufficiale di Open Dance ASD per mostrare post,
                    eventi e aggiornamenti.
                  </p>
                </div>
              </Card>

              {/* Tournament Gallery */}
              <Card className="p-6 bg-card border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Trophy className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">I Nostri Tornei</h3>
                    <p className="text-sm text-muted-foreground">Momenti indimenticabili</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden">
                    <img
                      src="/ballroom-dance-competition-couples-dancing.jpg"
                      alt="Torneo 1"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden">
                    <img
                      src="/dance-competition-performance-stage-lights.jpg"
                      alt="Torneo 2"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden">
                    <img
                      src="/ballroom-dance-competition-crowd-celebration.jpg"
                      alt="Torneo 3"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden">
                    <img
                      src="/dance-performance-red-curtain-stage.jpg"
                      alt="Torneo 4"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-wider text-accent mb-3">NUMERI</div>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">La storia scritta dai nostri passi</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Anni di dedizione, soci che crescono, competizioni vinte. Questi numeri raccontano chi siamo e cosa
                abbiamo costruito insieme nel tempo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
              <Card className="p-10 text-center bg-white border border-border">
                <div className="text-6xl font-bold text-foreground mb-3">15</div>
                <p className="text-base text-muted-foreground">Anni di attività</p>
              </Card>
              <Card className="p-10 text-center bg-white border border-border">
                <div className="text-6xl font-bold text-foreground mb-3">450</div>
                <p className="text-base text-muted-foreground">Soci iscritti</p>
              </Card>
              <Card className="p-10 text-center bg-white border border-border">
                <div className="text-6xl font-bold text-foreground mb-3">28</div>
                <p className="text-base text-muted-foreground">Premi conquistati</p>
              </Card>
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="default" size="lg">
                Scopri
              </Button>
              <Button variant="outline" size="lg">
                Altro
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Domande</h2>
              <p className="text-base text-white/80">
                Troverai qui le risposte che cerchi sulla nostra associazione e i corsi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              <Card className="p-6 bg-white text-foreground border-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Come mi iscrivo?</h3>
                <p className="text-sm text-muted-foreground">
                  Contattaci via WhatsApp o vieni a trovarci in sede per compilare il modulo di adesione.
                </p>
              </Card>

              <Card className="p-6 bg-white text-foreground border-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Quali sono gli orari?</h3>
                <p className="text-sm text-muted-foreground">
                  I corsi si tengono dal lunedì al venerdì sera e il sabato mattina, con fasce orarie diverse per ogni
                  livello.
                </p>
              </Card>

              <Card className="p-6 bg-white text-foreground border-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Che cosa devo indossare?</h3>
                <p className="text-sm text-muted-foreground">
                  Abbigliamento comodo e scarpe da danza sono essenziali: ti consigliamo il resto al primo incontro.
                </p>
              </Card>

              <Card className="p-6 bg-white text-foreground border-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">C'è un'età minima?</h3>
                <p className="text-sm text-muted-foreground">
                  Accogliamo ballerini dai quattro anni in su, senza limiti di età massima.
                </p>
              </Card>

              <Card className="p-6 bg-white text-foreground border-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Posso provare prima?</h3>
                <p className="text-sm text-muted-foreground">
                  Sì, offriamo una lezione di prova gratuita per conoscere lo stile e l'insegnante.
                </p>
              </Card>

              <Card className="p-6 bg-white text-foreground border-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Quali stili insegnate?</h3>
                <p className="text-sm text-muted-foreground">
                  Classico, contemporaneo, latino, moderno e danza urbana sono i nostri principali indirizzi.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-normal mb-4">Hai altre domande?</h3>
              <p className="text-base text-white/80 mb-8">
                Scrivi a noi e risponderemo presto con tutto quello che serve.
              </p>
              <Button variant="outline" className="bg-white text-black hover:bg-white/90">
                Contatti
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
