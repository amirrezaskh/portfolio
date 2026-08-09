import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { SideClouds } from '../components/SideClouds'
import { About } from '../sections/About'
import { Experience } from '../sections/Experience'
import { Projects } from '../sections/Projects'
import { Writing } from '../sections/Writing'
import { Contact } from '../sections/Contact'

export function Home() {
  return (
    // The clouds are absolutely positioned against this wrapper, so they span
    // the full document height without ever affecting the content column.
    <div className="relative">
      <Nav />
      <SideClouds />
      <main className="relative mx-auto max-w-3xl px-6">
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
