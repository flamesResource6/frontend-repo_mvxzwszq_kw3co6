import { motion } from 'framer-motion'
import { Coins, ShieldCheck, GaugeCircle, Zap, Blocks, Infinity } from 'lucide-react'

const stack = [
  { icon: Coins, label: 'EVM + Solana', desc: 'Smart contracts, indexing and wallet UX across chains' },
  { icon: ShieldCheck, label: 'Security', desc: 'Auditable patterns, test coverage and best practices' },
  { icon: GaugeCircle, label: 'Performance', desc: 'Gas-optimized contracts and snappy frontends' },
  { icon: Zap, label: 'Tooling', desc: 'Hardhat, Foundry, Wagmi/Viem, Solana web3.js' },
  { icon: Blocks, label: 'Data', desc: 'The Graph, Subgraphs, DePIN/DeFi analytics' },
  { icon: Infinity, label: 'DX', desc: 'CI/CD, previews, automated checks' },
]

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition"
            >
              <s.icon className="text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">{s.label}</h3>
              <p className="text-slate-300/90 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
