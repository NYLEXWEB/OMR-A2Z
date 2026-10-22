import './globals.css'

export const metadata = {
  metadataBase: new URL('https://omra2z.com'),
  title: {
    default: 'OMR A2Z | Wedding Planners, Event Management & Catering in Thalassery, Kannur',
    template: '%s | OMR A2Z Wedding & Event Management',
  },
  description:
    'OMR A2Z is the premier wedding planning, event management, and authentic Malabar catering service based in Thalassery, Kannur, Kerala. Specializing in royal Thalassery Dum Biryani, bespoke wedding stage decoration, German pandhal marquees, live counters, and cultural events.',
  keywords: [
    'wedding planners in thalassery',
    'best catering services in thalassery',
    'event management company kannur',
    'thalassery dum biryani wedding catering',
    'wedding stage decoration kannur',
    'pandhal and marquee canopy setup kerala',
    'malabar wedding catering and food services',
    'wedding reception planners kerala',
    'oppana and daffmuttu troupe kannur',
    'karaoke live ganamela wedding entertainment',
    'omr a2z events thalassery',
    'wedding decorators in kannur',
    'german tent pandhal hire thalassery',
    'mehendi mailanji night stage setup',
    'kerala wedding planners'
  ],
  authors: [{ name: 'OMR A2Z Events & Catering' }],
  creator: 'OMR A2Z',
  publisher: 'OMR A2Z',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://omra2z.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://omra2z.com',
    siteName: 'OMR A2Z Wedding & Event Management',
    title: 'OMR A2Z | Premier Wedding Planners & Catering in Thalassery, Kannur',
    description:
      'Orchestrating unforgettable celebrations across North Kerala. Authentic Thalassery Dum Biryani, bespoke floral stages, waterproof pandhal canopies, and full turnkey event coordination.',
    images: [
      {
        url: '/images/omr-a2z-hero.png',
        width: 1200,
        height: 630,
        alt: 'OMR A2Z Wedding Planners and Catering Thalassery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMR A2Z | Wedding Planners & Catering in Thalassery, Kannur',
    description:
      'Premier wedding planning, stage decor, pandhal setups, and authentic Thalassery Dum Biryani feast catering in Kerala.',
    images: ['/images/omr-a2z-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/file_00000000ffbc81faa9ceedf25b696b4f.png',
    apple: '/images/file_00000000ffbc81faa9ceedf25b696b4f.png',
  },
  category: 'Wedding Planning & Catering',
}

export const viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EventPlanningService', 'CateringService', 'LocalBusiness'],
      '@id': 'https://omra2z.com/#business',
      name: 'OMR A2Z Wedding Planners & Catering',
      alternateName: 'OMR A2Z Events',
      url: 'https://omra2z.com',
      logo: 'https://omra2z.com/images/file_00000000ffbc81faa9ceedf25b696b4f.png',
      image: 'https://omra2z.com/images/omr-a2z-hero.png',
      description:
        'Premier wedding planning, stage decoration, German pandhal marquee fabrication, and authentic Thalassery catering services in Thalassery, Kannur, Kerala.',
      telephone: '+919074796765',
      email: 'omr2013a2z@gmail.com',
      priceRange: '₹₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Stadium, Thalassery',
        addressLocality: 'Thalassery',
        addressRegion: 'Kerala',
        postalCode: '670101',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 11.7480,
        longitude: 75.4894,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Thalassery' },
        { '@type': 'City', name: 'Kannur' },
        { '@type': 'City', name: 'Kozhikode' },
        { '@type': 'City', name: 'Kasaragod' },
        { '@type': 'City', name: 'Vadakara' },
        { '@type': 'AdministrativeArea', name: 'North Kerala' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '140',
        reviewCount: '140',
      },
      sameAs: [
        'https://www.instagram.com/omr.a2z.events/',
        'https://wa.me/919074796765',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Wedding Planning & Catering Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wedding Catering & Thalassery Dum Biryani Feasts',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wedding Stage & Floral Decoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'All-Weather Pandhal & German Marquee Canopy Setup',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Karaoke & Live Ganamela Entertainment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mailanji / Mehendi Night Setups',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Oppana, Daffmuttu & Kolkkali Cultural Troupes',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://omra2z.com/#website',
      url: 'https://omra2z.com',
      name: 'OMR A2Z',
      description: 'Wedding & Event Planners in Thalassery, Kannur, Kerala',
      publisher: {
        '@id': 'https://omra2z.com/#business',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FFFFFF] text-[#22201E] font-sans antialiased selection:bg-[#A52A32] selection:text-white">
        {children}
      </body>
    </html>
  )
}

