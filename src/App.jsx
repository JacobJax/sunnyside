import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

function App() {

  return (
    <>
      <section id="top">
        <Navbar />
        <Header />
      </section>
      <About />
    </>
  )
}

export default App
