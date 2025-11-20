import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <main>
        <Hero />
        <section id="about" className="relative py-20 bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
                <p className="mt-4 text-lg text-slate-300/90">
                  I’m a web3 engineer focused on crafting delightful onchain products. From smart contracts to interactive interfaces,
                  I ship secure, performant and user-first experiences across chains. Passionate about DeFi, NFTs, and infrastructure.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between"><span>Location</span><span className="text-white">Remote / Global</span></li>
                  <li className="flex items-center justify-between"><span>Experience</span><span className="text-white">5+ years</span></li>
                  <li className="flex items-center justify-between"><span>Availability</span><span className="text-white">Open</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
