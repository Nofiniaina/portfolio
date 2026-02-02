import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <div className='px-12 py-5'>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
