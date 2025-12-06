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
              {/* Logo Sostituito Qui */}
              <div className="h-14 w-14 relative flex-shrink-0 bg-white rounded-full p-1 overflow-hidden flex items-center justify-center border border-border">
                <img
                  src="/images/logo-sgranato.jpeg"
                  alt="Open Dance Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold leading-none">Open Dance</h3>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">ASD</div>
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
              <a
                href="https://www.tiktok.com/@opendanceasd?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
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
                <Link href="/contatti" className="text-muted-foreground hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
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
                  href="https://wa.me/393936631959"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +39 393 663 1959
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:opendance749@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  opendance749@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  Lun - Sab: 9:00 - 23:00
                  <br />
                  Dom: 17:00 - 23:00
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
          <p className="text-xs text-muted-foreground mt-3">
            Sito costruito da{" "}
            <a
              href="https://www.praxisfutura.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Praxis Futura
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
