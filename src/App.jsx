import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'

function App() {

  return (
    <>
      <section id="top">
        <Navbar />
        <Header />
      </section>
      <About />
      <Services />
    </>
  )
}

export default App
