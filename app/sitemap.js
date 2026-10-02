export default function sitemap() {
  const base = 'https://credistral.com'
  const pages = ['', '/platform', '/solutions', '/technology', '/about', '/contact']
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1.0 : 0.8,
  }))
}
