import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { JavaArchitecture } from './components/JavaArchitecture'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { CodingProfiles } from './components/CodingProfiles'
import { Contact } from './components/Contact'
import { ResumeModal } from './components/ResumeModal'
import './index.css'

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <JavaArchitecture />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  )
}

export default App
