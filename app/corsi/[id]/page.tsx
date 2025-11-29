import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Target, Award, Music, Heart } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const coursesData = {
  base: {
    title: "Ballo Liscio - Avviamento",
    level: "Principianti",
    duration: "8 settimane",
    image: "/beginner-ballroom-dance-class-couples-learning.jpg",
    description:
      "Attività dedicata ai soci che desiderano avvicinarsi al mondo del ballo liscio. Un percorso graduale per imparare i passi base di mazurka, polka e valzer.",
    fullDescription:
      "Il corso di Ballo Liscio Base è perfetto per chi muove i primi passi nel mondo della danza. In un ambiente accogliente e stimolante, i nostri maestri ti guideranno attraverso i fondamenti del ballo liscio, dalla postura corretta al ritmo musicale. Ogni lezione è strutturata per garantire progressi costanti e divertimento assicurato.",
    topics: [
      "Passi base di mazurka, polka e valzer",
      "Ritmo e musicalità",
      "Portamento e postura",
      "Figure semplici",
      "Conduzione e guidata",
    ],
    benefits: [
      "Ambiente accogliente per principianti",
      "Progressione graduale e personalizzata",
      "Piccoli gruppi per attenzione individuale",
      "Materiale didattico incluso",
    ],
  },
  intermedio: {
    title: "Ballo Liscio - Perfezionamento",
    level: "Intermedio",
    duration: "10 settimane",
    image: "/intermediate-ballroom-dance-elegant-couples-practi.jpg",
    description:
      "Per i soci che vogliono approfondire la tecnica e affinare lo stile. Focus su figure avanzate e interpretazione musicale.",
    fullDescription:
      "Il corso intermedio è progettato per chi ha già acquisito le basi e desidera perfezionare la propria tecnica. Approfondiremo le figure più complesse, lavorando sull'eleganza del movimento e sull'interpretazione musicale. Un percorso che ti porterà a ballare con sicurezza e stile.",
    topics: [
      "Figure avanzate di tutti gli stili",
      "Stile personale e interpretazione",
      "Coreografie elaborate",
      "Tecnica avanzata di conduzione",
      "Espressione corporea",
    ],
    benefits: [
      "Perfezionamento della tecnica",
      "Repertorio ampliato di figure",
      "Preparazione per serate sociali",
      "Video analisi dei progressi",
    ],
  },
  avanzato: {
    title: "Ballo Liscio - Avanzato",
    level: "Avanzato",
    duration: "12 settimane",
    image: "/advanced-ballroom-dance-competition-elegant-perfor.jpg",
    description:
      "Per ballerini esperti che vogliono raggiungere l'eccellenza. Tecnica di alto livello e preparazione per competizioni.",
    fullDescription:
      "Il corso avanzato è riservato a ballerini esperti che vogliono raggiungere i massimi livelli tecnici. Lavoreremo su coreografie complesse, interpretazione artistica e preparazione specifica per competizioni nazionali e internazionali.",
    topics: [
      "Tecnica avanzata e raffinata",
      "Coreografie da competizione",
      "Interpretazione artistica",
      "Preparazione fisica specifica",
      "Strategia competitiva",
    ],
    benefits: [
      "Allenamento di alto livello",
      "Preparazione agonistica personalizzata",
      "Supporto per competizioni",
      "Analisi video professionale",
    ],
  },
  allenamento: {
    title: "Sessioni di Allenamento",
    level: "Agonistico",
    duration: "Annuale",
    image: "/competitive-ballroom-dance-training-athletes-inten.jpg",
    description:
      "Momenti dedicati alla pratica libera e all'allenamento. Un'opportunità per i soci di esercitarsi insieme e consolidare quanto appreso.",
    fullDescription:
      "Le sessioni di allenamento sono spazi dedicati dove i soci possono praticare liberamente, consolidare le figure apprese e prepararsi per gare e tornei. Un momento di condivisione e crescita collettiva sotto la supervisione dei maestri.",
    topics: [
      "Pratica libera supervisionata",
      "Preparazione gare e tornei",
      "Socializzazione e networking",
      "Affinamento tecnico",
      "Prove coreografiche",
    ],
    benefits: [
      "Spazio dedicato alla pratica",
      "Supervisione dei maestri",
      "Confronto con altri ballerini",
      "Flessibilità negli orari",
    ],
  },
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = coursesData[params.id as keyof typeof coursesData]

  if (!course) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/70 z-10" />
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white px-4 max-w-4xl">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold mb-4">
              {course.level}
            </div>
            <h1 className="text-4xl md:text-5xl font-normal mb-4">{course.title}</h1>
            <p className="text-sm md:text-base text-balance">{course.description}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center bg-card border border-border">
                <Clock className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-sm font-bold mb-1">Durata</h3>
                <p className="text-xs text-muted-foreground">{course.duration}</p>
              </Card>
              <Card className="p-6 text-center bg-card border border-border">
                <Users className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-sm font-bold mb-1">Livello</h3>
                <p className="text-xs text-muted-foreground">{course.level}</p>
              </Card>
              <Card className="p-6 text-center bg-card border border-border">
                <Target className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-sm font-bold mb-1">Obiettivo</h3>
                <p className="text-xs text-muted-foreground">Crescita tecnica</p>
              </Card>
            </div>

            <div className="prose max-w-none">
              <p className="text-sm text-muted-foreground leading-relaxed">{course.fullDescription}</p>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-normal mb-6 flex items-center gap-2">
                  <Music className="text-primary" size={24} />
                  Cosa imparerai
                </h2>
                <ul className="space-y-3">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-normal mb-6 flex items-center gap-2">
                  <Award className="text-primary" size={24} />
                  Cosa ottieni
                </h2>
                <ul className="space-y-3">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="text-primary flex-shrink-0 mt-1" size={18} />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-normal mb-4">Pronto per iniziare?</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Contattaci via WhatsApp per ricevere tutte le informazioni su orari, costi e disponibilità.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-sm">
                Richiedi Info su WhatsApp
              </Button>
              <Link href="/corsi">
                <Button size="lg" variant="outline" className="text-sm w-full sm:w-auto bg-transparent">
                  Vedi Altri Corsi
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
