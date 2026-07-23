'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import {
  Brain, ShieldCheck, FileCheck2, PieChart, AlertTriangle, LineChart,
  ArrowRight, CheckCircle2, Sparkles, ArrowDown, User, Database, Cpu, Gauge, Search, FileText, Landmark
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const modules = [
  {
    icon: Brain, color: 'from-[#2563EB] to-[#06B6D4]',
    title: 'AI Risk Engine',
    desc: 'Real-time borrower risk assessment using financial behaviour.',
    benefits: ['Behaviour-based risk scoring', 'Multi-signal evaluation', 'Adaptive to lender policy'],
    preview: 'risk'
  },
  {
    icon: ShieldCheck, color: 'from-[#06B6D4] to-[#14B8A6]',
    title: 'Fraud Intelligence',
    desc: 'Detect unusual transaction patterns and potential fraud.',
    benefits: ['Anomaly detection on cashflows', 'Identity + device signals', 'Velocity checks'],
    preview: 'fraud'
  },
  {
    icon: FileCheck2, color: 'from-[#2563EB] to-[#14B8A6]',
    title: 'Underwriting Copilot',
    desc: 'Generate explainable AI summaries to assist credit officers.',
    benefits: ['One-click case summary', 'Policy-aware reasoning', 'Reviewer-friendly output'],
    preview: 'copilot'
  },
  {
    icon: PieChart, color: 'from-[#14B8A6] to-[#06B6D4]',
    title: 'Portfolio Intelligence',
    desc: 'Monitor borrower portfolios and identify emerging risks.',
    benefits: ['Segment-level health view', 'Concentration risk alerts', 'Trend analysis'],
    preview: 'portfolio'
  },
  {
    icon: AlertTriangle, color: 'from-[#06B6D4] to-[#2563EB]',
    title: 'Early Warning System',
    desc: 'Identify repayment stress before defaults occur.',
    benefits: ['Leading-indicator signals', 'Borrower-level stress scoring', 'Actionable alert queue'],
    preview: 'ews'
  },
  {
    icon: LineChart, color: 'from-[#14B8A6] to-[#2563EB]',
    title: 'Explainability Dashboard',
    desc: 'Provide transparent reasons behind every AI recommendation.',
    benefits: ['Feature-level attributions', 'Auditable decision trail', 'Human-readable rationale'],
    preview: 'explain'
  },
]

function Preview({ type }) {
  if (type === 'risk') return (
    <svg viewBox="0 0 200 90" className="w-full h-24">
      <defs><linearGradient id="pr1" x1="0" x2="1"><stop offset="0%" stopColor="#ef4444"/><stop offset="50%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#14B8A6"/></linearGradient></defs>
      <path d="M15,75 A70,70 0 0 1 185,75" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" strokeLinecap="round"/>
      <path d="M15,75 A70,70 0 0 1 185,75" fill="none" stroke="url(#pr1)" strokeWidth="10" strokeLinecap="round" strokeDasharray="267" strokeDashoffset="70"/>
      <text x="100" y="60" textAnchor="middle" className="fill-white" fontSize="22" fontWeight="600">782</text>
      <text x="100" y="78" textAnchor="middle" className="fill-white/50" fontSize="9">Low Risk</text>
    </svg>
  )
  if (type === 'fraud') return (
    <div className="space-y-1.5 py-2">
      {[['bg-red-400', 'Device mismatch'], ['bg-amber-400', 'Velocity spike'], ['bg-emerald-400', 'KYC verified']].map(([c, t]) => (
        <div key={t} className="flex items-center gap-2 text-[11px]"><span className={`w-1.5 h-1.5 rounded-full ${c}`}/><span className="text-white/80">{t}</span></div>
      ))}
    </div>
  )
  if (type === 'copilot') return (
    <div className="text-[11px] text-white/70 leading-relaxed">
      <span className="text-emerald-400">Approve</span> at ₹8.5L · 12.4% · 36mo.<br/>Stable inflows, FOIR 18%, clean bureau.
      <div className="mt-2 flex flex-wrap gap-1">
        {['Stable', 'Low FOIR', 'Verified'].map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{t}</span>)}
      </div>
    </div>
  )
  if (type === 'portfolio') return (
    <div className="flex items-end gap-1 h-16">
      {[30, 45, 38, 55, 48, 62, 58, 70, 66, 74, 71, 82].map((h, i) => (
        <div key={i} style={{height: `${h}%`}} className="flex-1 rounded-sm bg-gradient-to-t from-[#2563EB] to-[#06B6D4]"/>
      ))}
    </div>
  )
  if (type === 'ews') return (
    <svg viewBox="0 0 200 60" className="w-full h-16">
      <path d="M0,45 C25,40 50,42 75,35 C100,28 125,32 150,22 C175,15 200,20 200,20" fill="none" stroke="#f59e0b" strokeWidth="2"/>
      <circle cx="150" cy="22" r="4" fill="#ef4444"/>
      <text x="150" y="12" textAnchor="middle" fontSize="8" className="fill-red-400">alert</text>
    </svg>
  )
  return (
    <div className="space-y-1.5">
      {[['Cashflow', 92], ['Bureau', 88], ['Fraud', 96]].map(([n, v]) => (
        <div key={n}>
          <div className="flex justify-between text-[10px] text-white/50"><span>{n}</span><span>{v}%</span></div>
          <div className="h-1.5 rounded bg-white/10"><div style={{width: `${v}%`}} className="h-full rounded bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"/></div>
        </div>
      ))}
    </div>
  )
}

const workflow = [
  { icon: User, label: 'Borrower Applies' },
  { icon: Database, label: 'Financial Data Collected' },
  { icon: Cpu, label: 'AI Analysis' },
  { icon: Gauge, label: 'Risk Assessment' },
  { icon: Search, label: 'Fraud Screening' },
  { icon: FileText, label: 'Recommendation' },
  { icon: Landmark, label: 'Loan Decision' },
]

export default function PlatformPage() {
  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-hero-glow">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-6">
            <Sparkles className="w-3 h-3 text-[#06B6D4]"/> Platform Overview
          </motion.div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            The Future of <span className="text-gradient-brand">Lending Starts Here</span>
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Credistral AI is building an AI Lending Intelligence Platform that helps lenders make faster, smarter and more transparent lending decisions — combining Account Aggregator data, machine learning and explainable AI.
          </motion.p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="text-4xl font-semibold tracking-tight">Six modules. <span className="text-gradient">One intelligent platform.</span></h2>
            <p className="mt-3 text-white/60">Each module is being designed to work independently or as part of an integrated AI credit stack.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {modules.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.title}
                  initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true, margin:'-60px'}}
                  transition={{delay: i*0.05}}
                  className="group glass rounded-2xl p-6 card-glow transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6"/>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Module 0{i+1}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{m.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{m.desc}</p>

                  <div className="mt-5 glass rounded-xl p-4 border border-white/5">
                    <Preview type={m.preview}/>
                  </div>

                  <ul className="mt-5 space-y-1.5">
                    {m.benefits.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0"/> {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-hero-glow opacity-30"/>
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-4">
              <ArrowRight className="w-3 h-3 text-[#14B8A6]"/> Product Workflow
            </div>
            <h2 className="text-4xl font-semibold tracking-tight">From application to <span className="text-gradient">approved loan.</span></h2>
          </div>

          <div className="space-y-3">
            {workflow.map((w, i) => {
              const Icon = w.icon
              return (
                <motion.div key={w.label}
                  initial={{opacity:0, x:-20}}
                  whileInView={{opacity:1, x:0}}
                  viewport={{once:true}}
                  transition={{delay:i*0.08}}
                >
                  <div className="glass-strong rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5"/>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white/40">Step {i+1}</p>
                      <p className="font-medium">{w.label}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#06B6D4]">Active</span>
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-white/30"/>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-strong rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#2563EB]/20 blur-3xl"/>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#14B8A6]/20 blur-3xl"/>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold">Interested in seeing an early preview?</h2>
              <p className="mt-3 text-white/60 max-w-xl mx-auto">We’re currently onboarding design partners and pilot lenders. Let’s explore whether Credistral AI fits your credit stack.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/contact"><Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] btn-primary-glow rounded-xl h-12 px-6 border-0">Book a Demo <ArrowRight className="w-4 h-4 ml-2"/></Button></Link>
                <Link href="/technology"><Button variant="ghost" className="rounded-xl h-12 px-6 glass border border-white/10">Explore Technology</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
