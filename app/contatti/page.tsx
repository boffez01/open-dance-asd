import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContattiPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          {/* Overlay scuro per leggere meglio il testo */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          {/* IMMAGINE DI SFONDO CORRETTA */}
          <img
            src="/images/gallery/banner_foto.jpg"
            alt="Sede Open Dance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Contattaci</h1>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
              {/* Indirizzo */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Indirizzo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Via S. Bartolomeo, 12
                  <br />
                  25046 Cazzago San Martino
                  <br />
                  Brescia, Italia
                </p>
              </Card>

              {/* Telefono */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Telefono</h3>
                <a href="tel:+393936631959" className="text-muted-foreground hover:text-primary transition-colors">
                  +39 393 663 1959
                </a>
              </Card>

              {/* Email */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border border-border">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Email</h3>
                <a
                  href="mailto:info@opendanceasd.it"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  info@opendanceasd.it
                </a>
              </Card>

              {/* Orari */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Orari</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Lun - Sab: 9:00 - 23:00</p>
                  <p>Domenica: 17:00 - 23:00</p>
                </div>
              </Card>
            </div>

            {/* Map Section */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-foreground font-serif">Dove Siamo</h2>
              <Card className="overflow-hidden bg-card border border-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.9283929462635!2d9.986234315594!3d45.61863197910309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47818b1f6e6c6e6d%3A0x7f0f0f0f0f0f0f0f!2sVia%20S.%20Bartolomeo%2C%2012%2C%2025046%20Cazzago%20San%20Martino%20BS!5e0!3m2!1sit!2sit!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa Open Dance ASD"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground font-serif">Vieni a Trovarci</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La nostra sede è facilmente raggiungibile e dispone di ampio parcheggio. Puoi venire a visitarci durante
              gli orari di apertura per conoscere i nostri maestri, vedere la sala e ricevere tutte le informazioni sui
              corsi.
            </p>
            <p className="text-muted-foreground">
              Per un appuntamento personalizzato o per qualsiasi informazione,
              <strong className="text-foreground"> contattaci su WhatsApp</strong> usando il pulsante verde in basso a
              destra.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
