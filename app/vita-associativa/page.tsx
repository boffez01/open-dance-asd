import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Trophy, Facebook } from "lucide-react"

export default function VitaAssociativaPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block border-b-2 border-accent pb-1 mb-4">
              <h1 className="text-3xl md:text-4xl font-normal">La Vita in Associazione</h1>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Gare, tornei e serate sociali: scopri i momenti più belli vissuti insieme dalla nostra comunità di
              ballerini.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Facebook Feed */}
              <Card className="p-6 bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Facebook className="text-accent" size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Seguici su Facebook</h2>
                    <p className="text-xs text-muted-foreground">Resta aggiornato sulle nostre attività</p>
                  </div>
                </div>

                <div className="bg-accent/5 rounded-lg p-12 text-center min-h-[400px] flex flex-col items-center justify-center border border-accent/20">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                    <Facebook className="text-accent" size={36} />
                  </div>
                  <h3 className="text-base font-medium mb-3">Feed Facebook Automatico</h3>
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    Qui verrà integrato il feed della pagina Facebook ufficiale di Open Dance ASD per mostrare post,
                    eventi e aggiornamenti.
                  </p>
                </div>
              </Card>

              {/* Tournament Gallery */}
              <Card className="p-6 bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Trophy className="text-accent" size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">I Nostri Tornei</h2>
                    <p className="text-xs text-muted-foreground">Momenti indimenticabili</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <img
                      src="/ballroom-dance-competition-couples-dancing.jpg"
                      alt="Gara di ballo - Coppie in competizione"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <img
                      src="/dance-competition-performance-stage-lights.jpg"
                      alt="Performance sul palco con luci"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <img
                      src="/ballroom-dance-competition-crowd-celebration.jpg"
                      alt="Celebrazione vittoria con pubblico"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <img
                      src="/dance-performance-red-curtain-stage.jpg"
                      alt="Sipario rosso performance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Categories Section */}
            <div className="mt-16 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-card border border-border text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-accent" size={24} />
                  </div>
                  <h3 className="text-base font-semibold mb-2">Gare e Tornei</h3>
                  <p className="text-xs text-muted-foreground">I nostri soci in competizione</p>
                </Card>

                <Card className="p-6 bg-card border border-border text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-2">Serate Sociali</h3>
                  <p className="text-xs text-muted-foreground">Momenti di festa insieme</p>
                </Card>

                <Card className="p-6 bg-card border border-border text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-2">Eventi Speciali</h3>
                  <p className="text-xs text-muted-foreground">Celebrazioni e anniversari</p>
                </Card>

                <Card className="p-6 bg-card border border-border text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-2">Allenamenti</h3>
                  <p className="text-xs text-muted-foreground">La passione in sala</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-normal mb-4">Seguici sui Social</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Resta sempre aggiornato su eventi, tornei e novità seguendoci sulla nostra pagina Facebook ufficiale.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
