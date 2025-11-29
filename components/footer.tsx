import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Open Dance ASD - Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">O</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-none">Open Dance</h3>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">ASD</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Associazione Sportiva Dilettantistica dedicata al ballo e alla socialità. Un punto di ritrovo per tutti
              gli appassionati di danza.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/OPEN-DANCE-ASD-100058870162755/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Facebook size={20} className="text-accent" />
              </a>
              <a
                href="https://www.instagram.com/opendanceasd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Instagram size={20} className="text-accent" />
              </a>
            </div>
          </div>

          {/* Link Rapidi */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/chi-siamo" className="text-muted-foreground hover:text-primary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/corsi" className="text-muted-foreground hover:text-primary transition-colors">
                  Le Attività
                </Link>
              </li>
              <li>
                <Link href="/galleria" className="text-muted-foreground hover:text-primary transition-colors">
                  Vita Associativa
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-muted-foreground hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  Via S. Bartolomeo, 12
                  <br />
                  Cazzago San Martino (BS)
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a
                  href="https://wa.me/393401234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contatta via WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@opendance.it"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@opendance.it
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  Lun - Ven: 18:00 - 22:00
                  <br />
                  Sab: 15:00 - 19:00
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Open Dance ASD. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Associazione Sportiva Dilettantistica iscritta al Registro CONI
          </p>
        </div>
      </div>
    </footer>
  )
}
