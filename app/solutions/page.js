'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Building2, Landmark, Store, Smartphone, HandCoins, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const solutions = [
  {
    icon: Landmark, color: 'from-[#2563EB] to-[#06B6D4]',
    title: 'Banks',
    tagline: 'Modernise credit decisioning across retail and SME lending.',
    challenges: ['Long approval turnaround times', 'Legacy scorecards limited to bureau data', 'Fragmented risk visibility across products'],
    helps: ['AI-assisted underwriting on cashflow data', 'Unified risk view across the loan lifecycle', 'Explainable outputs suitable for audit'],
    benefits: ['Faster decisions with less manual review', 'Better risk-adjusted approvals', 'Consistent, defensible credit rationale'],
  },
  {
    icon: Building2, color: 'from-[#06B6D4] to-[#14B8A6]',
    title: 'NBFCs',
    tagline: 'Scale lending confidently without expanding operations linearly.',
    challenges: ['Thin-file customers', 'High operational cost per file', 'Portfolio stress hard to detect early'],
    helps: ['Behaviour-based risk models beyond bureau', 'Automated case summaries for reviewers', 'Early warning signals on borrower stress'],
    benefits: ['Broader eligible funnel', 'Lower cost-to-decision', 'Reduced default surprises'],
  },
  {
    icon: Store, color: 'from-[#2563EB] to-[#14B8A6]',
    title: 'MSME Lenders',
    tagline: 'Underwrite small businesses using real financial behaviour.',
    challenges: ['Limited formal financial history', 'Manual verification of GST and banking data', 'Difficulty assessing seasonality'],
    helps: ['Cashflow-first analysis of banking + GST', 'Automated verification workflows', 'Seasonality-aware risk assessment'],
    benefits: ['Approve more good businesses', 'Cut manual review effort', 'Confidence to lend to newer segments'],
  },
  {
    icon: Smartphone, color: 'from-[#14B8A6] to-[#06B6D4]',
    title: 'Digital Lending Platforms',
    tagline: 'Ship AI-native decisioning without building it in-house.',
    challenges: ['Building risk stack is expensive and slow', 'Fraud pressure at scale', 'Need for real-time decisions'],
    helps: ['Plug-and-play APIs for risk and fraud', 'Real-time scoring and explainability', 'Continuously improving models'],
    benefits: ['Faster time-to-market', 'Lower fraud losses', 'Better unit economics'],
  },
  {
    icon: HandCoins, color: 'from-[#06B6D4] to-[#2563EB]',
    title: 'Microfinance Institutions',
    tagline: 'Bring data-driven intelligence to community-scale lending.',
    challenges: ['Field-heavy operations', 'Limited digital footprint of borrowers', 'Concentration and cluster risk'],
    helps: ['Lightweight decision workflows', 'Explainable outputs field officers can trust', 'Portfolio-level concentration insights'],
    benefits: ['Faster field-to-decision cycles', 'Better mix of borrowers', 'Improved portfolio resilience'],
  },
]

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white overflow-x-hidden">
      <Nav/>

      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 bg-hero-glow">
        <div className="absolute inset-0 grid-bg"/>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-6">
            <Sparkles className="w-3 h-3 text-[#06B6D4]"/> Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">Purpose-built for <span className="text-gradient-brand">every kind of lender.</span></h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">Whether you’re a bank modernising credit, an NBFC scaling operations or a digital platform launching new products — the platform is being designed to adapt.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          {solutions.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.title}
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true, margin:'-60px'}}
                transition={{delay: 0.05}}
                className="glass-strong rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 w-60 h-60 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-3xl`}/>
                <div className="relative grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7"/>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Solution 0{i+1}</p>
                    <h3 className="text-3xl font-semibold tracking-tight mt-1">{s.title}</h3>
                    <p className="mt-3 text-white/70">{s.tagline}</p>
                  </div>

                  <div className="md:col-span-8 grid md:grid-cols-3 gap-4">
                    <div className="glass rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-4 h-4 text-amber-400"/>
                        <p className="text-xs uppercase tracking-widest text-white/50">Challenges</p>
                      </div>
                      <ul className="space-y-2 text-sm text-white/70">
                        {s.challenges.map(c => <li key={c} className="flex gap-2"><span className="text-amber-400 mt-1">•</span>{c}</li>)}
                      </ul>
                    </div>
                    <div className="glass rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-[#06B6D4]"/>
                        <p className="text-xs uppercase tracking-widest text-white/50">How we help</p>
                      </div>
                      <ul className="space-y-2 text-sm text-white/70">
                        {s.helps.map(c => <li key={c} className="flex gap-2"><span className="text-[#06B6D4] mt-1">•</span>{c}</li>)}
                      </ul>
                    </div>
                    <div className="glass rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400"/>
                        <p className="text-xs uppercase tracking-widest text-white/50">Expected Benefits</p>
                      </div>
                      <ul className="space-y-2 text-sm text-white/70">
                        {s.benefits.map(c => <li key={c} className="flex gap-2"><span className="text-emerald-400 mt-1">•</span>{c}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-strong rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#06B6D4]/20 blur-3xl"/>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Which of these best describes you?</h2>
              <p className="mt-3 text-white/60 max-w-xl mx-auto">Let’s explore how Credistral AI can fit into your credit workflows.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/contact"><Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] btn-primary-glow rounded-xl h-12 px-6 border-0">Book a Demo <ArrowRight className="w-4 h-4 ml-2"/></Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
