import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const items = [
  {
    title: 'DeFi Yield Dashboard',
    desc: 'Aggregates on-chain yields across Ethereum, Arbitrum, and Polygon with live APY and staking actions.',
    tags: ['React', 'Ethers.js', 'Tailwind', 'TheGraph'],
    link: '#',
    gh: '#'
  },
  {
    title: 'NFT Launchpad',
    desc: 'End-to-end minting experience with allowlist, metadata pinning, and reveal mechanics.',
    tags: ['Next.js', 'Solidity', 'Hardhat', 'IPFS'],
    link: '#',
    gh: '#'
  },
  {
    title: 'Cross-chain Bridge UI',
    desc: 'A sleek interface for messaging and asset transfers across chains using generalized bridges.',
    tags: ['Vue', 'Wagmi', 'RainbowKit', 'Viem'],
    link: '#',
    gh: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#" className="text-slate-300 hover:text-white">See all</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-tr from-fuchsia-600/40 via-cyan-400/30 to-blue-600/40 mb-4" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 rounded-md bg-white/10 text-xs text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-slate-200 hover:text-white">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.gh} className="inline-flex items-center gap-1 text-slate-200 hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
