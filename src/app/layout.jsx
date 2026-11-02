import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.omr-a2z.in'),
  title: {
    default: 'Best Wedding Planner in Thalassery & Kannur | OMR A2Z',
    template: '%s | OMR A2Z Events',
  },
  description:
    'OMR A2Z is the premier wedding planner and catering service in Thalassery, Kannur, and North Kerala. Specializing in bespoke wedding stage decor, German pandhal marquees, and authentic Thalassery Dum Biryani feasts.',
  keywords: [
    'wedding planner in thalassery',
    'wedding planners in kannur',
    'wedding event management thalassery',
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
    'kerala wedding planners',
  ],
  authors: [{ name: 'OMR A2Z Events & Catering', url: 'https://www.omr-a2z.in' }],
  creator: 'OMR A2Z Events',
  publisher: 'OMR A2Z Events',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://www.omr-a2z.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.omr-a2z.in',
    siteName: 'OMR A2Z Wedding & Event Management',
    title: 'Wedding Planner in Thalassery & Kannur | OMR A2Z Events',
    description:
      'Orchestrating unforgettable celebrations across North Kerala. Authentic Thalassery Dum Biryani feasts, bespoke floral stages, German pandhal canopies, and turnkey event coordination.',
    images: [
      {
        url: '/images/omr-a2z-hero.png',
        width: 1200,
        height: 630,
        alt: 'OMR A2Z Wedding Planners and Catering Thalassery Kannur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Planner in Thalassery & Kannur | OMR A2Z Events',
    description:
      'Premier wedding planning, bespoke stage decor, German pandhal setups, and authentic Thalassery Dum Biryani feast catering in Kerala.',
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
      '@id': 'https://www.omr-a2z.in/#business',
      name: 'OMR A2Z Wedding Planners & Catering',
      alternateName: 'OMR A2Z Events',
      url: 'https://www.omr-a2z.in',
      logo: 'https://www.omr-a2z.in/images/file_00000000ffbc81faa9ceedf25b696b4f.png',
      image: 'https://www.omr-a2z.in/images/omr-a2z-hero.png',
      description:
        'Premier wedding planning, bespoke stage decoration, German pandhal marquee fabrication, and authentic Thalassery catering services based in Thalassery, serving Kannur and North Kerala.',
      telephone: '+919074796765',
      email: 'omr2013a2z@gmail.com',
      priceRange: '₹₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'SS Rd, Pallithazhe, Chonadam',
        addressLocality: 'Thalassery',
        addressRegion: 'Kerala',
        postalCode: '670104',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 11.7562,
        longitude: 75.4988,
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
              description: 'Authentic royal Thalassery Dum Biryani, live hot counters, chafing dish stations, and courteous uniformed dining staff.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wedding Stage & Floral Decoration',
              description: 'Custom wedding stage architecture, traditional Nikah backdrops, Mandap designs, and fresh flower styling.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'All-Weather Pandhal & German Marquee Canopy Setup',
              description: 'Engineered all-weather pandhal setups, German aluminium marquees, and illuminated walkway tunnels.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Karaoke & Live Ganamela Entertainment',
              description: 'Interactive karaoke setups and melodious Ganamela vocal troupes with concert-grade sound balancing.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mailanji / Mehendi Night Setups',
              description: 'Boho-chic floor seating, fairy-lit bridal thrones, and curated traditional pre-wedding celebrations.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Oppana, Daffmuttu & Kolkkali Cultural Troupes',
              description: 'Traditional Malabar wedding artforms including graceful bridal Oppana and groom-welcoming Daffmuttu processions.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.omr-a2z.in/#website',
      url: 'https://www.omr-a2z.in',
      name: 'OMR A2Z Events & Catering',
      description: 'Wedding Planners & Catering Services in Thalassery, Kannur, Kerala',
      publisher: {
        '@id': 'https://www.omr-a2z.in/#business',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.omr-a2z.in/#webpage',
      url: 'https://www.omr-a2z.in',
      name: 'Wedding Planner in Thalassery & Kannur | OMR A2Z Events',
      isPartOf: {
        '@id': 'https://www.omr-a2z.in/#website',
      },
      about: {
        '@id': 'https://www.omr-a2z.in/#business',
      },
      description:
        'Premier wedding planning and authentic catering service in Thalassery and Kannur, specializing in bespoke stage decor, German marquees, and Thalassery Dum Biryani.',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.omr-a2z.in/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.omr-a2z.in',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.omr-a2z.in/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Will our family have to manage vendors, calls, and timings on the wedding day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Our senior director and on-ground coordination team arrive at 5:00 AM and remain on-site until the last guest departs. We handle all vendor coordination, venue logistics, religious officiant cues, and stage handovers so your family can celebrate with complete peace of mind.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you own your stage structures, marquees, and lighting in-house?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, 100%. Unlike agencies that act as brokers and outsource equipment with 30% middleman markups, we own every structural truss, German marquee, fabric drape, and lighting rig in our Thalassery workshop. You work directly with the creators.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we book only specific services without taking a full package?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We never force rigid packages. You can choose heavy-duty Pandhal erection and stage decoration alone, full Thalassery Dum Biryani catering, or add live Karaoke, Mailanji setups, and Oppana troupes tailored precisely to your requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure banquet dining flows gracefully without delays or shortages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We deploy dedicated dining supervisors and trained, uniformed stewards. From traditional welcome refreshment cottages to continuous hot buffet replenishments and special seating care for elderly guests, we ensure an unhurried, gracious dining flow.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do your outdoor marquees and pandhals hold up against coastal rain and wind?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Having orchestrated events across coastal North Kerala for over 12 years, all our marquees and German aluminium structures are weather-tested with heavy-duty anchors. Stages are handed over at least 4 hours before guest arrival.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there any hidden charges, generator overtime fees, or surprise bills later?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Never. We provide clear, itemized quotations before agreement with zero surprise post-event invoices. Every floral specification, lighting fixture, and electrical backup is committed in writing.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
      <body
        className="bg-[#FFFFFF] text-[#22201E] font-sans antialiased selection:bg-[#A52A32] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
