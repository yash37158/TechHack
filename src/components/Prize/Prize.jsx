import React from 'react'
import './prize.css'
import prize from '../../assets/Prize/prize.svg'

const Prize = () => {
  return (
    <div className='Screen pt-8'>
        <h1 className='prize  md:px-32 pb-8'>Prizes</h1>
      <section class="body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={prize}/>
    </div>
    <div class="prize-div lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="HeadingPr title-font sm:text-4xl text-3xl mb-4">Prizes worth 50k for top 3 teams.</h1>
      <p class="ParaPr mb-8 leading-relaxed">We also have some other exciting additional prices, courtesy of our sponsors.</p>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Prize
