import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  return (
    <div className='px-12 py-5'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
