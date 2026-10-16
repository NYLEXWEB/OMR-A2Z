import './globals.css'

export const metadata = {
  metadataBase: new URL('https://omra2z.com'),
  title: 'OMR A2Z | Wedding & Event Planners in Thalassery',
  description:
    'Discover OMR A2Z, a premier wedding and event planning business in Thalassery, Kannur, Kerala. Thoughtful planning, beautiful decor, and exceptional catering. Get in touch to discuss your next celebration.',
  openGraph: {
    type: 'website',
    title: 'OMR A2Z | Wedding & Event Planners in Thalassery',
    description:
      'From unforgettable weddings to thoughtfully curated celebrations, OMR A2Z brings every detail together with care and precision in Thalassery, Kannur, Kerala.',
    images: ['/images/omr-a2z-hero.png'],
  },
  icons: {
    icon: '/images/file_00000000ffbc81faa9ceedf25b696b4f.png',
  },
}

export const viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFFFFF] text-[#22201E] font-sans antialiased selection:bg-[#A52A32] selection:text-white">
        {children}
      </body>
    </html>
  )
}
