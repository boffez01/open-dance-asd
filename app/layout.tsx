import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Open Dance ASD - Scuola di Ballo Liscio a Cazzago San Martino",
  description:
    "Scuola di ballo per adulti specializzata in ballo liscio. Corsi, tornei e serate sociali in un ambiente giovane e professionale. Via S. Bartolomeo, 12, Cazzago San Martino.",
  keywords: "ballo liscio, scuola di ballo, Cazzago San Martino, ballo adulti, tornei ballo, corsi ballo",
  openGraph: {
    title: "Open Dance ASD - La tua passione, il tuo ritmo, la tua scuola",
    description: "Scuola di ballo per adulti a Cazzago San Martino. Ballo liscio, tornei e divertimento.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: "Open Dance ASD",
    description:
      "Scuola di ballo liscio e da sala, dall'avviamento all'agonismo. Maestri pluripremiati a Cazzago San Martino (BS).",
    url: "https://www.opendanceasd.it",
    logo: "https://www.opendanceasd.it/logo.png",
    image: "https://www.opendanceasd.it/images/logo-sgranato.jpeg",
    telephone: "+393936631959",
    email: "info@opendanceasd.it",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via S. Bartolomeo, 12",
      addressLocality: "Cazzago San Martino",
      addressRegion: "BS",
      postalCode: "25046",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.61863",
      longitude: "9.98623",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cazzago San Martino",
      },
      {
        "@type": "City",
        name: "Brescia",
      },
      {
        "@type": "City",
        name: "Palazzolo sull'Oglio",
      },
      {
        "@type": "Place",
        name: "Val Camonica",
      },
      {
        "@type": "City",
        name: "Montisola",
      },
      {
        "@type": "City",
        name: "Orzinuovi",
      },
      {
        "@type": "City",
        name: "Rezzato",
      },
      {
        "@type": "Place",
        name: "Franciacorta",
      },
      {
        "@type": "Place",
        name: "Lago d'Iseo",
      },
      {
        "@type": "Place",
        name: "Provincia di Brescia",
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Giorgio Lagorio",
        jobTitle: "Maestro di Ballo - Campione Italiano",
      },
      {
        "@type": "Person",
        name: "Cristina Spinoni",
        jobTitle: "Maestra di Ballo - Campionessa Italiana",
      },
    ],
    foundingDate: "2015",
    sameAs: [
      "https://www.facebook.com/p/OPEN-DANCE-ASD-100058870162755/",
      "https://www.instagram.com/opendanceasd/",
      "https://www.tiktok.com/@opendanceasd",
    ],
    priceRange: "Associazione Sportiva Dilettantistica",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "17:00",
        closes: "23:00",
      },
    ],
  }

  return (
    <html lang="it" className={`${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
