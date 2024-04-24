import './App.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Projects } from './components/projects'


function App() {
  return (
    <div className='bg-black mx-auto'>
    <Navbar />
    <Hero />
    <Projects />
    <About />
   
    </div>
  )
}

export default App
