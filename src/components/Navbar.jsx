import './Navbar.css'
import Logo from '../assets/images/logo.svg'
import Hamgurger from '../assets/images/icon-hamburger.svg'
import { useState } from 'react'

export default function Navbar() {
   const [isOpen, setOpen] = useState(false)

   function handleClick(event) {
      if (event.target.id === 'hamburger') {
         setOpen(openState => {
            return !openState
         })
      } else {
         setOpen(false)
      }
   }

   return (
      <nav>
         <div id='nav-container' className="container flex justify-between">
            <div id="nav-logo" className='flex items-center'>
               <img src={Logo} alt="Sunny side logo" />
            </div>
            <div id="nav-links" onClick={ handleClick } className={isOpen ? 'md:w-2/4 nav-layer' : 'md:w-2/4'}>
               <div id="menu" className='md:hidden cursor-pointer'>
                  <img src={Hamgurger} alt="hamburger menu" id='hamburger' />
               </div>
               <div id="menu-links" className='md:w-full md:flex md:justify-between md:gap-4'>
                  <ul className='text-white md:flex md:justify-between md:w-3/4 md:items-center md:px-8'>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Services</a></li>
                     <li><a href="#">Projects</a></li>
                  </ul>
                  <div className="btn-container">
                     <a href="#" className="btn">CONTACT</a>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   )
}