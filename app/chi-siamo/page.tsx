import ChiSiamoClient from "./client"

// Metadata export for SEO and social media
export const metadata = {
  title: "Chi Siamo - Open Dance ASD | Maestri Campioni Italiani a Brescia",
  description:
    "Giorgio Lagorio e Cristina Spinoni, Campioni Italiani di Danze Nazionali, guidano Open Dance dal 2015. Riconosciuti in tutto il bacino del lago d'Iseo, Val Camonica e provincia di Brescia per la qualità dell'insegnamento e i risultati degli allievi agonisti.",
  keywords:
    "maestri ballo Brescia, campioni italiani danza, Giorgio Lagorio, Cristina Spinoni, scuola ballo lago Iseo, insegnanti Val Camonica",
  openGraph: {
    title: "Maestri Pluripremiati al servizio del bacino bresciano",
    description:
      "Oltre vent'anni di esperienza agonistica e dieci anni al vertice di Open Dance ASD. Riferimento per gli appassionati di ballo da sala da tutta la provincia.",
    type: "website",
  },
}

export default function ChiSiamoPage() {
  return <ChiSiamoClient />
}
