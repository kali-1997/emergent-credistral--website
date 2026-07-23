'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Sparkles, ShieldCheck, Brain, LineChart, AlertTriangle, FileCheck2,
  ArrowRight, Play, Menu, X, TrendingUp, TrendingDown, Activity,
  CircleDollarSign, PieChart, Zap, Fingerprint, GaugeCircle, Wallet,
  CheckCircle2, ArrowUpRight, Bell
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'

// ------- Utility: animated number ----------
function AnimatedNumber({ value, decimals = 0, suffix = '' }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [value])
  return <span>{display.toFixed(decimals)}{suffix}</span>
}

// ------- Navigation ----------
function Navigation() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Platform', 'Solutions', 'Technology', 'Why Credistral', 'Contact']
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div className="glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] via-[#06B6D4] to-[#14B8A6] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-lg">Credistral<span className="text-[#06B6D4]">.AI</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-white/80 hover:text-white">Sign in</button>
            <Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 btn-primary-glow rounded-xl text-white border-0">Book a Demo</Button>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-sm text-white/80">{l}</a>
            ))}
            <Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-xl mt-2">Book a Demo</Button>
          </div>
        )}
      </div>
    </header>
  )
}

// ------- Hero Dashboard Illustration ----------
function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative w-full"
    >
      {/* Ambient glow behind */}
      <div className="absolute -inset-8 bg-gradient-to-br from-[#2563EB]/30 via-[#06B6D4]/20 to-[#14B8A6]/20 blur-3xl rounded-full" />

      <div className="relative glass-strong rounded-3xl p-5 shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs text-white/50">credistral.ai / underwriting</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3">
          {/* Risk Score Gauge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-3 glass rounded-2xl p-4"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-white/60">Borrower Risk Score</p>
              <GaugeCircle className="w-4 h-4 text-[#06B6D4]" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-4xl font-semibold tracking-tight">
                  <AnimatedNumber value={782} />
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> Low risk · Approve
                </div>
              </div>
              {/* Half-circle gauge */}
              <svg viewBox="0 0 120 70" className="w-32 h-20">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
                <path d="M10,60 A50,50 0 0 1 110,60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" strokeLinecap="round" />
                <motion.path
                  d="M10,60 A50,50 0 0 1 110,60"
                  fill="none"
                  stroke="url(#g1)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="157"
                  initial={{ strokeDashoffset: 157 }}
                  animate={{ strokeDashoffset: 40 }}
                  transition={{ duration: 1.8, delay: 0.6 }}
                />
                <circle cx="95" cy="32" r="4" fill="#14B8A6" />
              </svg>
            </div>
          </motion.div>

          {/* Approval Decision */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="col-span-3 glass rounded-2xl p-4 relative"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/60">AI Recommendation</p>
              <Brain className="w-4 h-4 text-[#2563EB]" />
            </div>
            <div className="mt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm">
                <CheckCircle2 className="w-4 h-4" /> Approve · ₹8.5L @ 12.4%
              </div>
              <p className="text-[11px] text-white/60 mt-3 leading-relaxed">
                Stable inflows, low EMI burden (18%), no fraud markers. Model confidence <span className="text-white">94%</span>.
              </p>
            </div>
          </motion.div>

          {/* Cashflow chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="col-span-4 glass rounded-2xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs text-white/60">Cashflow · Last 12 months</p>
                <p className="text-lg font-semibold">₹42.8L <span className="text-xs text-emerald-400 font-normal">+18.4%</span></p>
              </div>
              <div className="flex gap-3 text-[10px] text-white/60">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#06B6D4]" />Inflow</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#2563EB]/60" />Outflow</span>
              </div>
            </div>
            <svg viewBox="0 0 300 90" className="w-full h-24">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,70 C30,60 45,50 60,52 C80,55 95,35 120,32 C140,30 160,45 180,40 C200,35 220,20 240,18 C260,16 280,25 300,15 L300,90 L0,90 Z"
                fill="url(#area)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              <motion.path
                d="M0,70 C30,60 45,50 60,52 C80,55 95,35 120,32 C140,30 160,45 180,40 C200,35 220,20 240,18 C260,16 280,25 300,15"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.8 }}
              />
              <motion.path
                d="M0,80 C30,72 60,74 90,70 C120,66 150,62 180,58 C210,54 240,52 270,46 C285,44 300,40 300,40"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                strokeOpacity="0.55"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 1 }}
              />
            </svg>
          </motion.div>

          {/* Fraud Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="col-span-2 glass rounded-2xl p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/60">Fraud Alerts</p>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-white/80">Device mismatch</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-white/80">Velocity spike</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/60">KYC verified</span>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-white/50">2 warnings · 0 blockers</div>
          </motion.div>

          {/* Portfolio Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="col-span-3 glass rounded-2xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-white/60">Portfolio Health</p>
              <Activity className="w-4 h-4 text-[#14B8A6]" />
            </div>
            <div className="flex items-end gap-1 h-14">
              {[30, 45, 38, 55, 48, 62, 58, 70, 66, 74, 71, 82].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.04, duration: 0.5 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[#2563EB] to-[#06B6D4]"
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px]">
              <span className="text-white/60">NPA · 1.2%</span>
              <span className="text-emerald-400 flex items-center gap-1"><TrendingUp className="w-3 h-3" />+3.4%</span>
            </div>
          </motion.div>

          {/* EMI Burden */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="col-span-3 glass rounded-2xl p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/60">EMI Burden Ratio</p>
              <Wallet className="w-4 h-4 text-[#06B6D4]" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-semibold"><AnimatedNumber value={18} suffix="%" /></span>
              <span className="text-[11px] text-emerald-400">Healthy</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '18%' }}
                transition={{ duration: 1.4, delay: 1.1 }}
                className="h-full bg-gradient-to-r from-[#14B8A6] to-[#06B6D4]"
              />
            </div>
            <div className="mt-1 text-[10px] text-white/50">Threshold · 40%</div>
          </motion.div>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute -left-6 top-24 glass-strong rounded-2xl p-3 pr-4 flex items-center gap-3 animate-float hidden lg:flex"
      >
        <div className="w-9 h-9 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
          <Fingerprint className="w-5 h-5 text-[#06B6D4]" />
        </div>
        <div>
          <p className="text-[11px] text-white/60">KYC + Bureau</p>
          <p className="text-sm font-medium">Verified in 2.4s</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -right-4 bottom-16 glass-strong rounded-2xl p-3 pr-4 flex items-center gap-3 animate-float hidden lg:flex"
        style={{ animationDelay: '1s' }}
      >
        <div className="relative w-9 h-9 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center pulse-ring">
          <Zap className="w-5 h-5 text-[#14B8A6]" />
        </div>
        <div>
          <p className="text-[11px] text-white/60">Decision</p>
          <p className="text-sm font-medium">4.1 minutes</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ------- Hero ----------
function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 bg-hero-glow overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            AI Lending Intelligence Platform
            <ArrowUpRight className="w-3 h-3" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            The <span className="text-gradient-brand">AI Operating System</span> for Modern Lending
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed"
          >
            Empower banks, NBFCs and fintech lenders with AI-powered underwriting, fraud detection, portfolio monitoring and explainable credit decisions—all from a single platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 btn-primary-glow rounded-xl h-12 px-6 text-white border-0 shine">
              Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="ghost" className="rounded-xl h-12 px-6 glass hover:bg-white/10 border border-white/10">
              <Play className="w-4 h-4 mr-2" /> Watch Platform Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-6 text-xs text-white/50"
          >
            <span>Trusted by risk teams at</span>
            <div className="flex items-center gap-6">
              <span className="font-semibold tracking-widest text-white/60">NBFC·CO</span>
              <span className="font-semibold tracking-widest text-white/60">FINSERV</span>
              <span className="font-semibold tracking-widest text-white/60">MICRO·X</span>
              <span className="font-semibold tracking-widest text-white/60">DIGILEND</span>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <HeroDashboard />
        </div>
      </div>
    </section>
  )
}

// ------- Platform Section ----------
const platformFeatures = [
  { icon: Brain, title: 'AI Risk Engine', desc: 'Real-time borrower risk assessment using financial behaviour.', color: 'from-[#2563EB] to-[#06B6D4]' },
  { icon: ShieldCheck, title: 'Fraud Intelligence', desc: 'Detect suspicious transactions, identity anomalies and hidden risks.', color: 'from-[#06B6D4] to-[#14B8A6]' },
  { icon: FileCheck2, title: 'Underwriting Copilot', desc: 'Generate explainable AI summaries for faster loan approvals.', color: 'from-[#2563EB] to-[#14B8A6]' },
  { icon: PieChart, title: 'Portfolio Intelligence', desc: 'Monitor portfolio health and identify early warning signals.', color: 'from-[#14B8A6] to-[#06B6D4]' },
  { icon: AlertTriangle, title: 'Early Warning System', desc: 'Predict repayment stress before defaults occur.', color: 'from-[#06B6D4] to-[#2563EB]' },
  { icon: LineChart, title: 'Compliance & Explainability', desc: 'Transparent AI decisions with detailed reasoning and audit trails.', color: 'from-[#14B8A6] to-[#2563EB]' },
]

function Platform() {
  return (
    <section id="platform" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-4">
            <Sparkles className="w-3 h-3 text-[#06B6D4]" /> Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            One Platform. <span className="text-gradient">Complete Lending Intelligence.</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Six interlocking capabilities that replace fragmented tools with one AI-native operating layer for credit.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {platformFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.06 }}
                className="group glass rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs text-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ------- Dashboard Showcase ----------
function DashboardShowcase() {
  return (
    <section id="dashboard" className="relative py-28">
      <div className="absolute inset-0 bg-hero-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-white/80 mb-4">
            <Activity className="w-3 h-3 text-[#14B8A6]" /> Live Product Preview
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            See <span className="text-gradient">every borrower, every loan,</span> every signal.
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            A single glass panel across origination, underwriting, fraud, portfolio health and collections.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-[#2563EB]/20 via-[#06B6D4]/10 to-[#14B8A6]/20 blur-3xl rounded-full" />
          <div className="relative glass-strong rounded-3xl p-6">
            {/* Dashboard header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
              <div>
                <p className="text-xs text-white/50">Underwriter Console</p>
                <div className="flex items-center gap-3 mt-1">
                  <h3 className="text-xl font-semibold">Priya Ramesh · Loan #CR-208934</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">In Review</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="glass rounded-lg px-3 py-1.5 text-xs">Filters</button>
                <Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-lg h-8 text-xs">Run AI Review</Button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              {/* Borrower Overview */}
              <div className="col-span-12 lg:col-span-4 glass rounded-2xl p-5">
                <p className="text-xs text-white/50">Borrower Overview</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center font-semibold">PR</div>
                  <div>
                    <p className="font-medium">Priya Ramesh</p>
                    <p className="text-[11px] text-white/50">Salaried · IT Services · 6.2yr</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="glass rounded-lg p-3">
                    <p className="text-white/50">Requested</p>
                    <p className="text-base font-medium mt-0.5">₹8,50,000</p>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <p className="text-white/50">Tenure</p>
                    <p className="text-base font-medium mt-0.5">36 months</p>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <p className="text-white/50">Bureau</p>
                    <p className="text-base font-medium mt-0.5">771</p>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <p className="text-white/50">FOIR</p>
                    <p className="text-base font-medium mt-0.5">18%</p>
                  </div>
                </div>
              </div>

              {/* Income vs Expenses */}
              <div className="col-span-12 lg:col-span-5 glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">Income vs Expenses</p>
                    <p className="text-lg font-semibold mt-0.5">₹1.42L <span className="text-xs text-emerald-400">net</span></p>
                  </div>
                  <div className="text-[10px] text-white/50 flex gap-3">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[#06B6D4]" />Income</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[#2563EB]/60" />Expense</span>
                  </div>
                </div>
                <div className="mt-4 flex items-end gap-2 h-32">
                  {[
                    [60, 40], [70, 45], [65, 42], [80, 50], [78, 48], [90, 52],
                    [88, 55], [95, 58], [92, 54], [100, 60], [96, 58], [110, 62]
                  ].map(([a, b], i) => (
                    <div key={i} className="flex-1 flex items-end gap-1 h-full">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${a}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.5 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-[#06B6D4]/80 to-[#06B6D4]"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${b}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 + 0.05, duration: 0.5 }}
                        className="flex-1 rounded-t bg-[#2563EB]/50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Score */}
              <div className="col-span-6 lg:col-span-3 glass rounded-2xl p-5">
                <p className="text-xs text-white/50">Risk Score</p>
                <div className="mt-2 relative flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-32 h-32">
                    <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                    <motion.circle
                      cx="60" cy="60" r="48" fill="none"
                      stroke="url(#riskG)" strokeWidth="10" strokeLinecap="round"
                      strokeDasharray="301"
                      initial={{ strokeDashoffset: 301 }}
                      whileInView={{ strokeDashoffset: 65 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6 }}
                      transform="rotate(-90 60 60)"
                    />
                    <defs>
                      <linearGradient id="riskG">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#14B8A6" />
                      </linearGradient>
                    </defs>
                    <text x="60" y="58" textAnchor="middle" className="fill-white" fontSize="22" fontWeight="600">782</text>
                    <text x="60" y="76" textAnchor="middle" className="fill-white/50" fontSize="9">Low Risk</text>
                  </svg>
                </div>
              </div>

              {/* Cashflow Stability */}
              <div className="col-span-12 lg:col-span-5 glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/50">Cashflow Stability</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">Stable</span>
                </div>
                <svg viewBox="0 0 300 100" className="mt-3 w-full h-28">
                  <defs>
                    <linearGradient id="cf2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,60 C25,55 50,50 75,52 C100,54 125,45 150,42 C175,40 200,48 225,44 C250,41 275,35 300,30 L300,100 L0,100 Z"
                    fill="url(#cf2)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <motion.path
                    d="M0,60 C25,55 50,50 75,52 C100,54 125,45 150,42 C175,40 200,48 225,44 C250,41 275,35 300,30"
                    fill="none" stroke="#14B8A6" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6 }}
                  />
                </svg>
                <div className="mt-1 grid grid-cols-3 gap-2 text-[11px]">
                  <div><p className="text-white/50">Volatility</p><p className="font-medium">Low</p></div>
                  <div><p className="text-white/50">Salary Streak</p><p className="font-medium">18 mo</p></div>
                  <div><p className="text-white/50">Bounces</p><p className="font-medium">0</p></div>
                </div>
              </div>

              {/* Fraud Alerts */}
              <div className="col-span-12 lg:col-span-4 glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/50">Fraud Alerts</p>
                  <Bell className="w-4 h-4 text-amber-400" />
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { c: 'bg-red-400', t: 'Device fingerprint mismatch on last login', s: '2m ago' },
                    { c: 'bg-amber-400', t: 'Transaction velocity spike detected', s: '14m ago' },
                    { c: 'bg-emerald-400', t: 'PAN + Aadhaar cross-verified', s: '1h ago' },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.c}`} />
                      <div className="flex-1">
                        <p className="text-white/85">{a.t}</p>
                        <p className="text-[10px] text-white/40 mt-0.5">{a.s}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EMI Burden */}
              <div className="col-span-6 lg:col-span-3 glass rounded-2xl p-5">
                <p className="text-xs text-white/50">EMI Burden</p>
                <p className="mt-1 text-3xl font-semibold">18%</p>
                <p className="text-[11px] text-emerald-400 mt-0.5">22 pts below ceiling</p>
                <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '18%' }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="h-full bg-gradient-to-r from-[#14B8A6] to-[#06B6D4]" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                  <div><p className="text-white/50">Current EMI</p><p>₹8,400</p></div>
                  <div><p className="text-white/50">New EMI</p><p>₹28,240</p></div>
                </div>
              </div>

              {/* Approval Probability */}
              <div className="col-span-6 lg:col-span-3 glass rounded-2xl p-5">
                <p className="text-xs text-white/50">Approval Probability</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold"><AnimatedNumber value={94} suffix="%" /></span>
                  <span className="text-[11px] text-emerald-400">High confidence</span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-white/50"><span>Cashflow</span><span>92%</span></div>
                    <div className="h-1.5 rounded bg-white/10"><motion.div initial={{width:0}} whileInView={{width:'92%'}} viewport={{once:true}} transition={{duration:1.2}} className="h-full rounded bg-[#06B6D4]" /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-white/50"><span>Bureau</span><span>88%</span></div>
                    <div className="h-1.5 rounded bg-white/10"><motion.div initial={{width:0}} whileInView={{width:'88%'}} viewport={{once:true}} transition={{duration:1.2, delay:0.1}} className="h-full rounded bg-[#2563EB]" /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-white/50"><span>Fraud</span><span>96%</span></div>
                    <div className="h-1.5 rounded bg-white/10"><motion.div initial={{width:0}} whileInView={{width:'96%'}} viewport={{once:true}} transition={{duration:1.2, delay:0.2}} className="h-full rounded bg-[#14B8A6]" /></div>
                  </div>
                </div>
              </div>

              {/* AI Recommendation */}
              <div className="col-span-12 lg:col-span-6 glass rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#2563EB]/20 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-semibold">AI Recommendation</p>
                    <span className="ml-auto text-[10px] text-white/50">Model v4.2 · Explainable</span>
                  </div>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    <span className="text-emerald-400 font-medium">Approve</span> at <span className="text-white">₹8,50,000 · 12.4% p.a. · 36 mo</span>. The applicant shows consistent 18-month salary inflows (₹1.42L avg), FOIR at 18% (well within 40% policy), zero cheque bounces, and clean AA-verified banking history. Fraud module flagged 2 low-severity signals (device change, velocity spike) — both explained by recent job relocation.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Stable Income', 'Low FOIR', 'Clean Bureau', 'AA Verified', 'No Bounces'].map(t => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full glass border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Portfolio Health */}
              <div className="col-span-12 lg:col-span-6 glass rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/50">Portfolio Health · Segment</p>
                  <span className="text-[10px] text-white/50">Last 90 days</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-white/50">Total AUM</p>
                    <p className="text-lg font-semibold mt-0.5">₹1,284Cr</p>
                    <p className="text-[10px] text-emerald-400">+8.2%</p>
                  </div>
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-white/50">NPA</p>
                    <p className="text-lg font-semibold mt-0.5">1.2%</p>
                    <p className="text-[10px] text-emerald-400">-0.4%</p>
                  </div>
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-white/50">Approval Rate</p>
                    <p className="text-lg font-semibold mt-0.5">62%</p>
                    <p className="text-[10px] text-emerald-400">+3.1%</p>
                  </div>
                </div>
                <div className="mt-4 flex items-end gap-1.5 h-20">
                  {[40, 55, 48, 62, 58, 70, 66, 74, 71, 82, 78, 88, 85, 92].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.5 }}
                      className="flex-1 rounded bg-gradient-to-t from-[#2563EB]/70 to-[#06B6D4]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ------- Footer minimal ----------
function MiniFooter() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2563EB] via-[#06B6D4] to-[#14B8A6] flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-semibold">Credistral<span className="text-[#06B6D4]">.AI</span></span>
        </div>
        <p className="text-xs text-white/40">© 2026 Credistral AI. All Rights Reserved.</p>
        <p className="text-xs text-white/40">hello@credistral.ai</p>
      </div>
    </footer>
  )
}

// ------- App ----------
function App() {
  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white">
      <Nav />
      <Hero />
      <Platform />
      <DashboardShowcase />
      <Footer />
    </main>
  )
}

export default App
