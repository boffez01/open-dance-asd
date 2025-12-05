import VitaAssociativaClient from "./client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vita Associativa - Open Dance ASD | Gare, Eventi e Gruppo",
  description:
    "Scopri la vita in Open Dance ASD: le emozioni delle competizioni, i successi ai campionati regionali e nazionali, e i momenti di festa e condivisione del nostro gruppo.",
  keywords: "gare ballo Brescia, gruppo Open Dance, CIDS cup, concorsi danza, vita associativa, eventi ballo liscio",
  openGraph: {
    title: "Più di una Scuola: Una Squadra Vincente",
    description:
      "Dai podi delle competizioni alle cene di gruppo. Guarda le foto delle nostre attività agonistiche e ricreative.",
    type: "website",
  },
}

export default function VitaAssociativaPage() {
  return <VitaAssociativaClient />
}
