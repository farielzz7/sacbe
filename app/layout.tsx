import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sac-Bé: La Ruta de los Sabores - Gastronomía Maya Yucateca',
  description: 'Experiencia gastronómica y cultural maya auténtica. Platillos tradicionales yucatecos, ingredientes sagrados y eventos culturales en Mérida, Yucatán.',
  generator: 'Sac-Bé Food Truck',
  keywords: 'gastronomía maya, comida yucateca, food truck, Mérida, Yucatán, salbutes, panuchos, poc chuc, tradiciones mayas',
  authors: [{ name: 'Sac-Bé: La Ruta de los Sabores' }],
  openGraph: {
    title: 'Sac-Bé: La Ruta de los Sabores',
    description: 'Experiencia gastronómica y cultural maya auténtica en Mérida, Yucatán',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
