import './Footer.css'
import Logo from '../assets/images/logo.svg'
import FacebookIcon from '../assets/images/icon-facebook.svg'
import InstaIcon from '../assets/images/icon-instagram.svg'
import PinIcon from '../assets/images/icon-pinterest.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'

export default function Footer() {
   return (
      <footer>
         <div id='footer-container' className="container text-center">
            <div id="footer-logo" className='grid place-items-center'>
               <img src={Logo} alt="Logo image" />
            </div>
            <div id="footer-links">
               <ul className='flex justify-between'>
                  <li><a href="#" className='text-xl'>About</a></li>
                  <li><a href="#" className='text-xl'>Services</a></li>
                  <li><a href="#" className='text-xl'>Projects</a></li>
               </ul>
            </div>
            <div id="social-links">
               <ul className='flex justify-between'>
                  <li><a href="#"><img src={FacebookIcon} alt="Facebook icon" /></a></li>
                  <li><a href="#"><img src={InstaIcon} alt="Instagram icon" /></a></li>
                  <li><a href="#"><img src={TwitterIcon} alt="Twitter icon" /></a></li>
                  <li><a href="#"><img src={PinIcon} alt="Pinterest icon" /></a></li>
               </ul>
            </div>
         </div>
      </footer>
   )
}