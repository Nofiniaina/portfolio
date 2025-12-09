import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'

function App() {

  return (
    <div className='px-12 py-5'>
      <Navbar />
      <Hero />
      <About />
      <Stack />
    </div>
  )
}

export default App
