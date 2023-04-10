import React from 'react'
import './team.css'
import ritik from '../../assets/team/ritik.svg'
import krithika from '../../assets/team/krithika.svg'
import soham from '../../assets/team/soham.svg'
import roshni from '../../assets/team/roshini.svg'
import aman from '../../assets/team/aman.svg'
import janhavi from '../../assets/team/janhavi.svg'
import aishwarya from '../../assets/team/aishwarya.svg'

const Team = () => {
  return (
    <div className='Screen pt-8'>
        <h1 className='Team md:px-32 pb-8'>Team</h1>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="border h-full flex items-center border-indigo-950 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ritik}/>
          <div class="flex-grow">
            <h2 class="name title-font font-medium">Ritik Gupta</h2>
            <p class="role"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-indigo-950 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={krithika}/>
          <div class="flex-grow">
            <h2 class="name title-font font-medium">Krithika Manikanta</h2>
            <p class="role"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-indigo-950 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={soham}/>
          <div class="flex-grow">
            <h2 class="name title-font font-medium">Soham Gujar</h2>
            <p class="role"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-indigo-950 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={roshni}/>
          <div class="flex-grow">
            <h2 class="name title-font font-medium">Roshni Pillai</h2>
            <p class="role"></p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-indigo-950 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={aman}/>
          <div class="flex-grow">
            <h2 class="name title-font font-medium">Aman Keswani</h2>
            <p class="role">Organizing Head</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-indigo-950 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={janhavi}/>
          <div class="flex-grow">
            <h2 class="name title-font font-medium">Janhavi Thakur</h2>
            <p class="role">Marketing Head</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-indigo-950 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={aishwarya}/>
          <div class="flex-grow">
            <h2 class="name title-font font-medium">Aishwarya Nair</h2>
            <p class="role">Graphics Head</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Team
