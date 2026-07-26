'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Mail, MapPin, Send, ArrowRight, Sparkles, CheckCircle2, ChevronDown, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    q: 'What stage is Credistral AI at right now?',
    a: 'We’re an early-stage startup currently building the MVP of the platform. Our focus is on design partners and pilot lenders who want to shape the product with us.'
  },
  {
    q: 'Do you have paying customers yet?',
    a: 'Not yet. We’re transparent about being pre-launch. Right now we’re engaging with lenders for design feedback and preparing for pilot programs.'
  },
  {
    q: 'Which lenders is Credistral AI designed for?',
    a: 'Banks, NBFCs, MSME lenders, digital lending platforms and microfinance institutions — anyone making credit decisions who wants faster, more transparent AI-assisted underwriting.'
  },
  {
    q: 'How is the platform different from a traditional bureau score?',
    a: 'Bureau scores are one input. Credistral is being built as a decision layer that combines cashflow behaviour, fraud signals and explainable AI — with every recommendation shipping with a human-readable reason.'
  },
  {
    q: 'What data does the platform use?',
    a: 'The design assumes lender-consented data such as Account Aggregator banking data, bureau, KYC and (where relevant) GST. No data is used without explicit lender + borrower consent.'
  },
  {
    q: 'Can we integrate with our LOS/LMS?',
    a: 'Yes — the platform is being designed API-first, so it can plug into existing loan origination and management systems rather than replace them.'
  },
]

function FaqItem({ q, a, i }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{opacity:0, y:10}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{delay:i*0.04}}
      className="glass rounded-2xl overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${open ? 'rotate-180' : ''}`}/>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} transition={{duration:0.25}}>
            <p className="px-5 pb-5 text-sm text-white/70 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }).catch(() => null)
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white overflow-x-hidden">
      <Nav/>

      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 bg-hero-glow">
        <div className="absolute inset-0 grid-bg"/>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-6">
            <Sparkles className="w-3 h-3 text-[#06B6D4]"/> Contact
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">Let’s <span className="text-gradient-brand">Build the Future</span> of Lending Together</h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">Interested in learning more about Credistral AI? We’d love to hear from you.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#2563EB]/20 blur-3xl"/>
            <div className="relative">
              <h2 className="text-2xl font-semibold">Get in touch</h2>
              <p className="text-sm text-white/60 mt-1">Tell us a little about yourself and how we can help.</p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="form" initial={{opacity:1}} exit={{opacity:0}} onSubmit={submit} className="mt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-white/60">Name</label>
                        <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#06B6D4]/40" placeholder="Your full name"/>
                      </div>
                      <div>
                        <label className="text-xs text-white/60">Company</label>
                        <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#06B6D4]/40" placeholder="Your organisation"/>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-white/60">Email</label>
                      <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#06B6D4]/40" placeholder="you@company.com"/>
                    </div>
                    <div>
                      <label className="text-xs text-white/60">Message</label>
                      <textarea required rows={5} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#06B6D4]/40 resize-none" placeholder="Tell us about your credit workflows, pilot interest, or questions."/>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button type="submit" disabled={loading} className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] btn-primary-glow rounded-xl h-12 px-6 border-0">
                        {loading ? 'Sending...' : <>Book a Demo <ArrowRight className="w-4 h-4 ml-2"/></>}
                      </Button>
                      <Button type="submit" disabled={loading} variant="ghost" className="rounded-xl h-12 px-6 glass border border-white/10">
                        <Send className="w-4 h-4 mr-2"/> Get in Touch
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div key="done" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="mt-8 text-center py-10">
                    <div className="inline-flex w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 items-center justify-center mb-4">
                      <CheckCircle2 className="w-7 h-7 text-emerald-400"/>
                    </div>
                    <h3 className="text-2xl font-semibold">Thanks for reaching out!</h3>
                    <p className="mt-2 text-white/60 max-w-md mx-auto">We’ve received your message and will get back to you at <span className="text-white">{form.email || 'the email you provided'}</span> shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.1}}
            className="lg:col-span-2 space-y-4">
            <div className="glass-strong rounded-3xl p-6">
              <p className="text-xs uppercase tracking-widest text-white/40">Reach us</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shrink-0"><Mail className="w-5 h-5"/></div>
                  <div>
                    <p className="text-xs text-white/50">Email</p>
                    <a href="mailto:hello@credistral.ai" className="font-medium hover:text-[#06B6D4]">hello@credistral.ai</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#14B8A6] flex items-center justify-center shrink-0"><MapPin className="w-5 h-5"/></div>
                  <div>
                    <p className="text-xs text-white/50">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#14B8A6] flex items-center justify-center shrink-0"><Linkedin className="w-5 h-5"/></div>
                  <div>
                    <p className="text-xs text-white/50">LinkedIn</p>
                    <a href="https://www.linkedin.com/company/credistral/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#06B6D4]">linkedin.com/company/credistral</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-widest text-white/40">Who we’re looking to talk to</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><span className="text-[#06B6D4]">•</span> Risk & credit leaders</li>
                <li className="flex gap-2"><span className="text-[#06B6D4]">•</span> Product heads at digital lenders</li>
                <li className="flex gap-2"><span className="text-[#06B6D4]">•</span> Design-partner NBFCs and banks</li>
                <li className="flex gap-2"><span className="text-[#06B6D4]">•</span> Ecosystem partners &amp; investors</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-hero-glow opacity-30"/>
        <div className="relative mx-auto max-w-3xl px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-4">
              <Sparkles className="w-3 h-3 text-[#14B8A6]"/> FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Frequently asked <span className="text-gradient">questions.</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={f.q} {...f} i={i}/>)}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
