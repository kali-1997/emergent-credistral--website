'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Compass, HeartHandshake, Eye, ArrowRight, Check, Circle, Sparkles, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const roadmap = [
  { status: 'done', label: 'Product Vision', desc: 'Defined the problem, target users and core principles.' },
  { status: 'done', label: 'Platform Design', desc: 'Designed the architecture, modules and user experience.' },
  { status: 'current', label: 'MVP Development', desc: 'Building the first working version of the platform.' },
  { status: 'future', label: 'Pilot Programs', desc: 'Partnering with early lenders to validate real-world impact.' },
  { status: 'future', label: 'Customer Validation', desc: 'Iterating with feedback from underwriters and risk teams.' },
  { status: 'future', label: 'Commercial Launch', desc: 'General availability for banks, NBFCs and digital lenders.' },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white overflow-x-hidden">
      <Nav/>

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 bg-hero-glow">
        <div className="absolute inset-0 grid-bg"/>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-6">
            <Compass className="w-3 h-3 text-[#06B6D4]"/> About Credistral AI
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">Our <span className="text-gradient-brand">Vision</span></h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Credistral AI was created with a simple mission — to make lending faster, fairer and more transparent through responsible AI.
          </p>
        </div>
      </section>

      {/* Story sections */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          {[
            {
              icon: Target, tag: 'The Problem',
              title: 'Lending today is slower and more opaque than it should be.',
              desc: 'Traditional lending relies on fragmented data, manual reviews and slow decision-making. Credit officers juggle disconnected systems, bureaus and spreadsheets — which leads to delays, inconsistent decisions and limited transparency for borrowers.'
            },
            {
              icon: Compass, tag: 'Our Vision',
              title: 'Enable every lender to make intelligent, explainable and data-driven decisions.',
              desc: 'We believe the next generation of lenders will run on AI-native infrastructure — combining Account Aggregator data, machine learning and explainable reasoning to deliver faster, safer and more inclusive credit.'
            },
            {
              icon: Eye, tag: 'Why Explainable AI Matters',
              title: 'AI should support human decision-making — not replace it.',
              desc: 'Credit decisions impact real people and real businesses. Every AI recommendation Credistral produces is designed to come with clear reasons, feature attributions and an auditable trail — so credit officers stay in control and borrowers get a fair explanation.'
            },
          ].map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.tag}
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:i*0.08}}
                className="glass-strong rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/10 blur-3xl"/>
                <div className="relative grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center mb-3 shadow-lg">
                      <Icon className="w-7 h-7"/>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-[#06B6D4]">{s.tag}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h2>
                    <p className="mt-4 text-white/70 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-hero-glow opacity-30"/>
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-4">
              <Sparkles className="w-3 h-3 text-[#14B8A6]"/> Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Where we <span className="text-gradient">are today.</span></h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">Credistral AI is an early-stage company. We’re transparent about what’s done, what’s in progress and what’s planned.</p>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[#06B6D4]/60 via-white/10 to-transparent"/>
            {roadmap.map((r, i) => {
              const isDone = r.status === 'done'
              const isCurrent = r.status === 'current'
              return (
                <motion.div key={r.label}
                  initial={{opacity:0, x:-20}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once:true}}
                  transition={{delay:i*0.08}}
                  className="relative mb-4">
                  <div className={`absolute -left-[22px] top-4 w-4 h-4 rounded-full flex items-center justify-center border-2 ${
                    isDone ? 'bg-emerald-500/20 border-emerald-400' :
                    isCurrent ? 'bg-[#06B6D4]/20 border-[#06B6D4] animate-pulse' :
                    'bg-white/5 border-white/20'
                  }`}>
                    {isDone && <Check className="w-2.5 h-2.5 text-emerald-400"/>}
                    {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"/>}
                  </div>
                  <div className="glass rounded-2xl p-5 ml-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold">{r.label}</p>
                      {isDone && <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">Completed</span>}
                      {isCurrent && <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30">Current Stage</span>}
                      {r.status === 'future' && <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10">Planned</span>}
                    </div>
                    <p className="text-sm text-white/60 mt-1.5">{r.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Transparency', desc: 'Every model output ships with a reason. Nothing hidden.' },
              { title: 'Responsibility', desc: 'AI supports credit officers — humans stay in the loop.' },
              { title: 'Inclusion', desc: 'Cashflow-first thinking to reach thin-file, real borrowers.' },
            ].map((v, i) => (
              <motion.div key={v.title}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:i*0.08}}
                className="glass rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#06B6D4] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5"/>
                </div>
                <p className="font-semibold text-lg">{v.title}</p>
                <p className="text-sm text-white/60 mt-1.5">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#2563EB]/20 blur-3xl"/>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Want to build the future of lending with us?</h2>
              <p className="mt-3 text-white/60 max-w-xl mx-auto">We’re looking for design partners, early pilots and thoughtful conversations. Reach out.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/contact"><Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] btn-primary-glow rounded-xl h-12 px-6 border-0">Get in Touch <ArrowRight className="w-4 h-4 ml-2"/></Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
