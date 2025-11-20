import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something onchain</h2>
            <p className="mt-3 text-slate-300/90">Open to freelance, collaborations, and full-time roles. Send a note and I’ll get back soon.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            onSubmit={(e) => { e.preventDefault(); alert('Thanks!'); }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="px-4 py-2.5 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <input required type="email" placeholder="Email" className="px-4 py-2.5 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <input placeholder="Company / Project" className="mt-4 w-full px-4 py-2.5 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <textarea required rows="4" placeholder="What are we building?" className="mt-4 w-full px-4 py-2.5 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button className="mt-4 px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-lg transition">Send</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
