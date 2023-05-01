import './Services.css'

export default function Services() {
   return(
      <section id="services" className='md:flex'>
         <div id="graphic" className="service text-center md:w-1/2">
            <div className="service-text">
               <h1 className='text-3xl'>Graphic Design</h1>
               <p className='text-lg'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
         </div>
         <div id="photography" className="service text-center md:w-1/2">
            <div className="service-text">
               <h1 className='text-3xl'>Photography</h1>
               <p className='text-lg'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
         </div>
      </section>
   )
}
