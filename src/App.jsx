import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

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
    </>
  )
}

export default App
