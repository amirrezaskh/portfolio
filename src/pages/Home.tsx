import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { About } from '../sections/About'
import { Experience } from '../sections/Experience'
import { Projects } from '../sections/Projects'
import { Writing } from '../sections/Writing'
import { Contact } from '../sections/Contact'

export function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6">
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
