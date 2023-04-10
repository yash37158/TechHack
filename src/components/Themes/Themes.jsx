import React from 'react'
import './themes.css'
import theme1 from '../../assets/themes/theme-smart_education.svg'
import theme2 from '../../assets/themes/theme-health_care.svg'
import theme3 from '../../assets/themes/theme-smart_city.svg'
import theme4 from '../../assets/themes/theme-sustainable_env.svg'
import theme5 from '../../assets/themes/theme-women_safety.svg'

const Themes = () => {
    return (
        <div className="Screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
          <h1 className='Themes md:px-32 pb-8'>Themes</h1>
          <div className="grid gap-10 row-gap-10 mb-8 lg:grid-cols-3 sm:grid-cols-2 md:px-52">
            <div className="Card inline-block overflow-hidden duration-300 transform rounded-lg shadow-sm hover:-translate-y-2">
              <div className="flex flex-col ">
                <img
                  src={theme1}
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">et
                  <div className="px-5 py-5">
                    <h6 className="Heading mb-2 font-semibold leading-5">
                      Smart Education
                    </h6>
                    <p className="Para">
                    Smart education development leverages technology to enhance the delivery of education, enabling tailored learning experiences and greater accessibility to educational resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Card inline-block overflow-hidden duration-300 transform rounded-lg shadow-sm hover:-translate-y-2">
              <div className="flex flex-col h-full">
                <img
                  src={theme2}
                  className="object-cover w-full h-48 p"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="Heading mb-2 font-semibold leading-5">
                      Health Care
                    </h6>
                    <p className="Para">
                    The healthcare industry employs various sectors to offer services and products that aid in preventing, diagnosing, treating, and curing illnesses and injuries, aided by technology. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Card inline-block overflow-hidden duration-300 transform rounded-lg shadow-sm hover:-translate-y-2">
              <div className="flex flex-col h-full">
                <img
                  src={theme3}
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="Heading mb-2 font-semibold leading-5">
                      Smart City
                    </h6>
                    <p className="Para">
                    Smart cities leverage technology and data to efficiently manage resources, services, and assets, resulting in improved sustainability, economic development, and quality of life for residents and workers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Card inline-block overflow-hidden duration-300 transform rounded-lg shadow-sm hover:-translate-y-2">
              <div className="flex flex-col h-full">
                <img
                  src={theme4}
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="Heading mb-2 font-semibold leading-5">
                      Sustainable Environment
                    </h6>
                    <p className="Para">
                    Environmental sustainability involves balancing the present and future needs by preserving natural resources and maintaining ecological equilibrium. This ensures the well-being of future generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Card inline-block overflow-hidden duration-300 transform rounded-lg shadow-sm hover:-translate-y-2">
              <div className="flex flex-col h-full">
                <img
                  src={theme5}
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="Heading mb-2 font-semibold leading-5">
                      Women Safety
                    </h6>
                    <p className="Para">
                    The objective of this Hackathon is to empower women to defend themselves against sexual assault by developing a system that ensures their safety irrespective of time or location. This initiative aims to create a safer environment for women.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      );
}

export default Themes
