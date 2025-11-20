import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Building onchain experiences
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Modern Web3 Portfolio for a Multi-Chain Builder
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            Crafting decentralized apps, smart contracts, and delightful crypto UX across EVM, Solana and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-lg transition">View Work</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20 transition">Get in Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
