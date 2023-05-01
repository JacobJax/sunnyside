import './Projects.css'
import MilkImg from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import OrangeImg from '../assets/images/desktop/image-gallery-orange.jpg'
import SugarcubesImg from '../assets/images/desktop/image-gallery-sugarcubes.jpg'
import ConeImg from '../assets/images/desktop/image-gallery-cone.jpg'

export default function Projects() {
   return (
      <section id="projects">
         <img src={MilkImg} alt="Milk bottles" />
         <img src={OrangeImg} alt="Milk bottles" />
         <img src={ConeImg} alt="Cone gallery image" />
         <img src={SugarcubesImg} alt="Sugar cubes gallery image" />
      </section>
   )
}