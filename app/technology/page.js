'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import {
  Database, Cog, Cpu, Gauge, Eye, LayoutDashboard, ArrowDown, Brain,
  ShieldCheck, TrendingUp, FileSearch, Lock, Server, Sparkles
} from 'lucide-react'

const arch = [
  { icon: Database, title: 'Financial Data Sources', desc: 'Account Aggregator, bureau, KYC, GST, banking statements.' },
  { icon: Cog, title: 'Data Ingestion', desc: 'Secure pipelines that normalize and validate incoming data.' },
  { icon: Sparkles, title: 'Feature Engineering', desc: 'Cashflow, behaviour and identity features derived at scale.' },
  { icon: Cpu, title: 'AI Models', desc: 'Risk, fraud and stress models trained on lending signals.' },
  { icon: Gauge, title: 'Decision Engine', desc: 'Policy-aware orchestration combining scores and rules.' },
  { icon: Eye, title: 'Explainability Layer', desc: 'Feature attributions and human-readable reasoning.' },
  { icon: LayoutDashboard, title: 'Lender Dashboard', desc: 'Underwriter-friendly interface for review and action.' },
]

const capabilities = [
  { icon: Brain, title: 'AI Risk Models', desc: 'Behaviour-based models designed to complement bureau scoring — not replace judgment.' },
  { icon: ShieldCheck, title: 'Fraud Detection', desc: 'Signal-fusion across identity, device, cashflow and velocity indicators.' },
  { icon: TrendingUp, title: 'Cashflow Analytics', desc: 'Structured views of income stability, expense patterns and net surplus.' },
  { icon: FileSearch, title: 'Explainable AI', desc: 'Every recommendation ships with reasons, weights and audit trail.' },
  { icon: Server, title: 'Secure APIs', desc: 'Documented REST APIs and webhooks designed for LOS/LMS integration.' },
  { icon: Lock, title: 'Enterprise Security', desc: 'Encryption in transit and at rest, role-based access, audit logging.' },
]

const techLogos = ['React', 'Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'AWS']

export default function TechnologyPage() {
  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white overflow-x-hidden">
      <Nav/>

      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 bg-hero-glow">
        <div className="absolute inset-0 grid-bg"/>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-6">
            <Cpu className="w-3 h-3 text-[#06B6D4]"/> Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">Built on <span className="text-gradient-brand">modern, secure infrastructure.</span></h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">A layered architecture that ingests financial data, runs AI models and returns explainable credit intelligence — designed with security, auditability and integration in mind.</p>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Platform <span className="text-gradient">Architecture</span></h2>
            <p className="mt-3 text-white/60">Data flows through a series of dedicated layers, each specialising in a step of the credit decision.</p>
          </div>

          <div className="relative">
            {arch.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.title}
                  initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{delay:i*0.06}}
                >
                  <div className="glass-strong rounded-2xl p-5 flex items-center gap-5 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6"/>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-widest text-white/40">Layer {i+1}</p>
                      <p className="font-semibold">{a.title}</p>
                      <p className="text-sm text-white/60 mt-0.5">{a.desc}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-1.5 text-[10px] text-[#14B8A6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse"/> live
                    </div>
                  </div>
                  {i < arch.length - 1 && (
                    <div className="flex justify-center py-2">
                      <motion.div initial={{height:0}} whileInView={{height:24}} viewport={{once:true}} transition={{delay:i*0.06+0.2}} className="w-px bg-gradient-to-b from-[#06B6D4]/60 to-transparent"/>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-hero-glow opacity-30"/>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Core <span className="text-gradient">Capabilities</span></h2>
            <p className="mt-3 text-white/60">The engineering foundations we’re building the platform on.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title}
                  initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{delay:i*0.05}}
                  className="glass rounded-2xl p-6 card-glow transition-all hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#14B8A6] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5"/>
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{c.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech logos */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-white/40">Our Stack</p>
            <h2 className="text-3xl font-semibold mt-2">Built with battle-tested technologies</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techLogos.map((t, i) => (
              <motion.div key={t}
                initial={{opacity:0, scale:0.9}}
                whileInView={{opacity:1, scale:1}}
                viewport={{once:true}}
                transition={{delay:i*0.05}}
                className="glass rounded-xl px-5 py-3 text-sm text-white/80 font-medium hover:text-white hover:-translate-y-0.5 transition-all">
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
