import { HomePageClient } from "./HomePageClient"

export const metadata = {
  title: "Open Dance ASD Brescia | Scuola di Ballo Liscio per tutta la Provincia",
  description:
    "Il punto di riferimento per il ballo liscio in provincia di Brescia. Corsi per tutti i livelli da Cazzago San Martino, facilmente raggiungibile da Val Camonica, Palazzolo, Franciacorta, Orzinuovi, Rezzato e lago d'Iseo. Maestri pluripremiati.",
  keywords:
    "ballo liscio Brescia, scuola ballo Val Camonica, corsi ballo Palazzolo, danza Franciacorta, ballo Orzinuovi, scuola danza Rezzato, ballo liscio lago d'Iseo, Open Dance Cazzago",
  openGraph: {
    title: "Open Dance ASD - Il Centro del Ballo Liscio in Provincia di Brescia",
    description:
      "Maestri campioni italiani, allievi sul podio, percorsi dall'avviamento all'agonismo. Raggiunti facilmente da Val Camonica, Franciacorta, Palazzolo, Orzinuovi.",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
