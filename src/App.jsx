import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Projects from './components/Projects'
import Footer from './components/Footer'

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
      <Footer />
    </>
  )
}

export default App
