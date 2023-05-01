import './Header.css'
import Arrow from '../assets/images/icon-arrow-down.svg'

export default function Header() {
   return(
      <div id="header" className='container text-center grid place-items-center text-white'>
         <div id="header-inside" className='flex flex-col items-center gap-16 h-3/4'>
            <h1 id="header-text" className='text-6xl'>We are creatives</h1>
            <img src={ Arrow } alt="" id="arrow" />
         </div>
      </div>
   )
}