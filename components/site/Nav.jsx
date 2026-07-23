'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Platform', href: '/platform' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div className="glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              aria-label="Credistral"
              className="inline-block h-8 w-8 bg-white"
              style={{
                WebkitMaskImage: 'url(/logo-mark.png)',
                maskImage: 'url(/logo-mark.png)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
            <span className="font-bold tracking-wide text-lg text-white">CREDISTRAL</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.name}
                  href={l.href}
                  className={`text-sm transition-colors relative ${active ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {l.name}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#06B6D4]" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="text-sm text-white/80 hover:text-white">Get in Touch</Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 btn-primary-glow rounded-xl text-white border-0">
                Book a Demo <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/80">{l.name}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-xl w-full mt-2">Book a Demo</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
