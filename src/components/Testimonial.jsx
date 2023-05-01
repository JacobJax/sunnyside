import './Testimonial.css'
import EmilyImg from '../assets/images/image-emily.jpg'
import ThomasImg from '../assets/images/image-thomas.jpg'
import JennieImg from '../assets/images/image-jennie.jpg'

export default function Testimonial() {
   return (
      <section id="testimonial" className='text-center'>
         <h1 className='text-2xl'>Client Testimonials</h1>
         <div id="testimonial-container" className="container md:flex md:gap-6">
            <div className="testimony flex flex-col gap-6 items-center py-6 my-6">
               <div className="testimony-img">
                  <img src={EmilyImg} alt="Emily's avatar" />
               </div>
               <div className="testimony-text flex flex-col gap-4">
                  <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                  <h3 className='text-xl'>Emily R.</h3>
                  <small>Marketing Director</small>
               </div>
            </div>
            <div className="testimony flex flex-col gap-6 items-center py-6 my-6">
               <div className="testimony-img">
                  <img src={ThomasImg} alt="Thomas' avatar" />
               </div>
               <div className="testimony-text flex flex-col gap-4">
                  <p> Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                  <h3 className='text-xl'>Thomas S.</h3>
                  <small>Chief Operating Officer</small>
               </div>
            </div>
            <div className="testimony flex flex-col gap-6 items-center py-6 my-6">
               <div className="testimony-img">
                  <img src={JennieImg} alt="Jennie's avatar" />
               </div>
               <div className="testimony-text flex flex-col gap-4">
                  <p> Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                  <h3 className='text-xl'>Jennie F.</h3>
                  <small>Business Owner.</small>
               </div>
            </div>
         </div>
      </section>
   )
}