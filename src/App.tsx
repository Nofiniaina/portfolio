import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'

function App() {

  return (
    <div className='px-12 py-5'>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
    </div>
  )
}

export default App
