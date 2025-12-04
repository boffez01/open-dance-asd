import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cookie Policy - Open Dance ASD",
  description: "Informativa sull'utilizzo dei cookie di Open Dance ASD",
}

export default function CookiePolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Cookie Policy</h1>
          <p className="text-center text-muted-foreground text-lg">
            Informativa sull'utilizzo dei cookie sul nostro sito web
          </p>
        </div>
      </section>

      {/* Contenuto */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Cosa sono i Cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet,
              smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e
              memorizzare alcune informazioni sulle tue preferenze o azioni passate.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipologie di Cookie Utilizzati</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Cookie Tecnici</h3>
            <p className="text-muted-foreground leading-relaxed">
              Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere
              disabilitati. Includono, ad esempio, i cookie che ti permettono di navigare sul sito e utilizzare le sue
              funzionalità.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Cookie Analitici</h3>
            <p className="text-muted-foreground leading-relaxed">
              Questi cookie ci permettono di riconoscere e contare il numero di visitatori e di vedere come i visitatori
              si muovono nel sito quando lo utilizzano. Questo ci aiuta a migliorare il modo in cui il nostro sito
              funziona, ad esempio, assicurandoci che gli utenti trovino facilmente ciò che stanno cercando.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Cookie di Preferenze</h3>
            <p className="text-muted-foreground leading-relaxed">
              Questi cookie consentono al sito di ricordare le scelte che fai (come il tuo nome utente, la lingua o la
              regione in cui ti trovi) e forniscono funzionalità migliorate e più personalizzate.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookie di Terze Parti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il nostro sito può utilizzare servizi di terze parti che installano i propri cookie. Questi servizi
              possono includere:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Social Media:</strong> Facebook, Instagram - per consentire la condivisione di contenuti sui
                social network
              </li>
              <li>
                <strong>Mappe:</strong> Google Maps - per visualizzare la nostra posizione
              </li>
              <li>
                <strong>Analytics:</strong> Per analizzare il traffico del sito web e migliorare l'esperienza utente
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Durata dei Cookie</h2>
            <p className="text-muted-foreground leading-relaxed">I cookie possono essere:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Cookie di sessione:</strong> Vengono cancellati automaticamente quando chiudi il browser
              </li>
              <li>
                <strong>Cookie persistenti:</strong> Rimangono memorizzati sul tuo dispositivo fino alla data di
                scadenza o fino a quando li elimini manualmente
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Come Gestire i Cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Puoi controllare e/o eliminare i cookie come desideri. Puoi eliminare tutti i cookie già presenti sul tuo
              computer e puoi impostare la maggior parte dei browser in modo da impedire che vengano salvati. Tuttavia,
              se lo fai, potresti dover regolare manualmente alcune preferenze ogni volta che visiti un sito e alcuni
              servizi e funzionalità potrebbero non funzionare correttamente.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Impostazioni del Browser</h3>
            <p className="text-muted-foreground leading-relaxed">La maggior parte dei browser ti permette di:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Vedere quali cookie sono stati impostati e eliminarli singolarmente</li>
              <li>Bloccare cookie di terze parti</li>
              <li>Bloccare cookie di determinati siti</li>
              <li>Bloccare tutti i cookie</li>
              <li>Eliminare tutti i cookie quando chiudi il browser</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Consenso all'Utilizzo dei Cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Quando visiti il nostro sito per la prima volta, ti verrà mostrato un banner informativo che ti chiede di
              accettare o rifiutare l'utilizzo dei cookie. Puoi modificare le tue preferenze in qualsiasi momento
              tramite le impostazioni del tuo browser.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Aggiornamenti alla Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questa Cookie Policy può essere aggiornata periodicamente. Ti invitiamo a consultare questa pagina
              regolarmente per essere informato su eventuali modifiche.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contatti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per qualsiasi domanda relativa alla presente Cookie Policy, puoi contattarci:
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
