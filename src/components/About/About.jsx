import React from 'react'
import './about.css'
import about from '../../assets/about/about us.svg'
import videoBg from '../../assets/about/video bg.svg'

const About = () => {
  return (
    <div className='Screen pt-8'>
        <h1 className='About md:px-32 pb-8'>About</h1>
      <section class=" body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <p class="ParaAb mb-8 leading-relaxed">Tech Hack is a national level hackathon where tech enthusiasts, developers, and entrepreneurs collaborate to create innovative solutions for complex problems. The event fosters creativity and helps participants improve their coding skills and problem-solving abilities, while also providing an opportunity to compare their performance with others. 
TechHack is a must-attend event for anyone interested in technology and innovation, regardless of their experience level.</p>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={about}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default About