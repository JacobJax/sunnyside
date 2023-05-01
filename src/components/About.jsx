import './About.css'
import TransformImg from '../assets/images/desktop/image-transform.jpg'
import StandoutImg from '../assets/images/desktop/image-stand-out.jpg'

export default function About() {
   return (
      <section id="about">
         <div className="about-detail md:flex md:flex-row-reverse">
            <div className="about-illiustration">
               <img src={TransformImg} alt="Transformation illustration" />
            </div>
            <div className="about-text">
               <h1 className='text-3xl'>Transform your brand</h1>
               <p className='text-lg'> We are a full-service creative agency specializing in helping brands grow fast.</p> <p> Engage your clients through compelling visuals that do most of the marketing for you.</p>
               <div className="btn">
                  <a id='tr-btn' className='text-xl btn-underline' href="#">Learn more</a>
               </div>
            </div>
         </div>
         <div className="about-detail md:flex">
            <div className="about-illiustration">
               <img src={StandoutImg} alt="Transformation illustration" />
            </div>
            <div className="about-text">
               <h1 className='text-3xl'>Stand out to the right audience</h1>
               <p className='text-lg'> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
               <div className="btn">
                  <a id='st-btn' className='text-xl btn-underline' href="#">Learn more</a>
               </div>
            </div>
         </div>
      </section>
   )
}