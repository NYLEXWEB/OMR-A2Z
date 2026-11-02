export default function sitemap() {
  const baseUrl = 'https://www.omr-a2z.in'
  const lastModified = new Date('2026-11-01T00:00:00.000Z')

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
