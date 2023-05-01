import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <section id="top">
        <Navbar />
        <Header />
      </section>
      <About />
      <Services />
      <Testimonial />
      <Projects />
    </>
  )
}

export default App
