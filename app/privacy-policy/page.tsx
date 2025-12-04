import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy - Open Dance ASD",
  description: "Informativa sulla privacy di Open Dance ASD",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={20} />
                Torna alla Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-center text-muted-foreground text-lg">
            Informativa sulla privacy e protezione dei dati personali
          </p>
        </div>
      </section>

      {/* Contenuto */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Titolare del Trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il Titolare del trattamento dei dati è <strong>Open Dance ASD</strong>, con sede in Via S. Bartolomeo, 12,
              Cazzago San Martino (BS). Per qualsiasi informazione è possibile contattarci via email all'indirizzo{" "}
              <a href="mailto:info@opendanceasd.it" className="text-primary hover:underline">
                info@opendanceasd.it
              </a>{" "}
              o telefonicamente al numero{" "}
              <a href="tel:+393936631959" className="text-primary hover:underline">
                +39 393 663 1959
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipologie di Dati Raccolti</h2>
            <p className="text-muted-foreground leading-relaxed">
              I dati personali raccolti da Open Dance ASD, in modo autonomo o tramite terze parti, includono:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Dati di contatto (nome, cognome, email, numero di telefono)</li>
              <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
              <li>Cookie e dati di utilizzo del sito web</li>
              <li>Dati forniti volontariamente dall'utente tramite form di contatto o iscrizione ai corsi di danza</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Finalità e Base Giuridica del Trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Gestione iscrizioni:</strong> Per gestire le richieste di iscrizione ai corsi e alle attività
                dell'associazione
              </li>
              <li>
                <strong>Comunicazioni:</strong> Per rispondere alle richieste di contatto e fornire informazioni sui
                corsi e sugli eventi
              </li>
              <li>
                <strong>Miglioramento del servizio:</strong> Per analizzare l'utilizzo del sito web e migliorare
                l'esperienza utente
              </li>
              <li>
                <strong>Obblighi di legge:</strong> Per adempiere agli obblighi previsti dalla normativa vigente in
                materia di associazioni sportive dilettantistiche
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Modalità del Trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente
              correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati
              stessi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Conservazione dei Dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              I dati personali sono conservati per il tempo strettamente necessario al conseguimento delle finalità per
              le quali sono stati raccolti. I dati di contatto e navigazione sono conservati per un periodo massimo di 2
              anni, salvo diversi obblighi di legge.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Diritti dell'Interessato</h2>
            <p className="text-muted-foreground leading-relaxed">
              In qualità di interessato, hai il diritto di richiedere al Titolare del trattamento:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>L'accesso ai dati personali</li>
              <li>La rettifica o la cancellazione degli stessi</li>
              <li>La limitazione del trattamento</li>
              <li>L'opposizione al trattamento</li>
              <li>La portabilità dei dati</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Per esercitare i tuoi diritti, puoi inviare una richiesta via email a{" "}
              <a href="mailto:info@opendanceasd.it" className="text-primary hover:underline">
                info@opendanceasd.it
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifiche alla Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Open Dance ASD si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento. Le
              modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contatti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per qualsiasi domanda o richiesta relativa alla presente Privacy Policy, puoi contattarci:
            </p>
            <ul className="list-none pl-0 text-muted-foreground space-y-2 mt-4">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@opendanceasd.it" className="text-primary hover:underline">
                  info@opendanceasd.it
                </a>
              </li>
              <li>
                <strong>Telefono:</strong>{" "}
                <a href="tel:+393936631959" className="text-primary hover:underline">
                  +39 393 663 1959
                </a>
              </li>
              <li>
                <strong>Indirizzo:</strong> Via S. Bartolomeo, 12, Cazzago San Martino (BS)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
