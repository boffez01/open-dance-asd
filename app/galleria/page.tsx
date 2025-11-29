import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"

export default function GalleriaPage() {
  // Sample gallery data - replace with real tournament photos
  const galleryImages = [
    { src: "/ballroom-dance-competition-couple-elegant-trophy.jpg", alt: "Torneo Regionale 2024" },
    { src: "/social-dance-evening-couples-dancing-ballroom.jpg", alt: "Serata Sociale" },
    { src: "/dance-competition-winners-celebration-medals.jpg", alt: "Vittoria Campionato" },
    { src: "/ballroom-dance-group-performance-stage.jpg", alt: "Performance di Gruppo" },
    { src: "/elegant-dance-couple-competition-formal-attire.jpg", alt: "Gara Nazionale" },
    { src: "/dance-students-practice-ballroom-studio.jpg", alt: "Allenamento" },
    { src: "/ballroom-dance-competition-couple-elegant-trophy-c.jpg", alt: "Sul Podio" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Festa di Fine Anno" },
    { src: "/placeholder.svg?height=600&width=800", alt: "Esibizione Speciale" },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/60 z-10" />
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="Galleria tornei"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">I Nostri Successi</h1>
            <p className="text-xl md:text-2xl text-balance">Tornei, competizioni e momenti di gioia</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Il Divertimento in Pista</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Questa è la nostra "Vetrina Viva": una collezione dei momenti più belli vissuti insieme. Dai tornei
              agonistici alle serate sociali, ogni foto racconta la passione e l'impegno dei nostri ballerini. Scopri le
              emozioni che ci rendono orgogliosi!
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all bg-card border border-border"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white font-semibold p-4 text-lg">{image.alt}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">I Nostri Traguardi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card border border-border">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground font-medium">Tornei Partecipati</p>
              </Card>
              <Card className="p-8 text-center bg-card border border-border">
                <div className="text-5xl font-bold text-primary mb-2">8</div>
                <p className="text-muted-foreground font-medium">Podi Conquistati</p>
              </Card>
              <Card className="p-8 text-center bg-card border border-border">
                <div className="text-5xl font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground font-medium">Coppie Formate</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Vuoi Far Parte dei Nostri Successi?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
              Unisciti a noi e inizia il tuo percorso verso il successo nel ballo liscio!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
