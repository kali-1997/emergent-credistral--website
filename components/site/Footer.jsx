import Link from 'next/link'
import { Mail, MapPin, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const cols = [
    { title: 'Product', links: [['Platform', '/platform'], ['Solutions', '/solutions'], ['Technology', '/technology']] },
    { title: 'Company', links: [['About', '/about'], ['Contact', '/contact']] },
    { title: 'Legal', links: [['Privacy', '/contact'], ['Terms', '/contact']] },
  ]
  return (
    <footer className="relative pt-24 pb-10 border-t border-white/5 mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-6 gap-10">
        <div className="md:col-span-3">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <img
              src="/logo-mark.png"
              alt="Credistral"
              className="h-9 w-9 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="font-bold tracking-wide text-xl text-white">CREDISTRAL</span>
          </Link>
          <p className="mt-4 text-sm text-white/50 max-w-sm leading-relaxed">
            Building the AI Lending Intelligence Platform — helping lenders make faster, smarter and more transparent credit decisions.
          </p>
          <div className="mt-5 flex items-center gap-3 text-white/50">
            <a href="#" className="w-9 h-9 rounded-lg glass hover:text-white transition"><Twitter className="w-4 h-4 m-auto mt-2.5" /></a>
            <a href="#" className="w-9 h-9 rounded-lg glass hover:text-white transition"><Linkedin className="w-4 h-4 m-auto mt-2.5" /></a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">{c.title}</p>
            <ul className="space-y-2">
              {c.links.map(([n, h]) => (
                <li key={n}><Link href={h} className="text-sm text-white/70 hover:text-white transition">{n}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">© 2026 Credistral AI. All Rights Reserved.</p>
        <div className="flex items-center gap-5 text-xs text-white/50">
          <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> hello@credistral.ai</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> India</span>
        </div>
      </div>
    </footer>
  )
}
