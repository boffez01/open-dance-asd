import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${playfair.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
