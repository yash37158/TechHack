import React from "react";
import illustration4 from "../../assets/ill-Screen 4.svg";
import './whatsapp.css'

const Screen4 = () => {
      return (
        <div className="Screen">
          <h1 className="Connect md:px-32 pb-8">Connect</h1>
          <section className="body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <img className="object-cover object-center rounded" alt="hero" src={illustration4} />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="HeadingCo title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Don't have a team yet?
                  <br className="hidden lg:inline-block" />
                </h1>
                <p className="ParaCo mb-8 leading-relaxed">Share your ideas, experiences, insights with others who share your interests and find your team mates.</p>
                <div className="flex justify-center">
                  <a href= "https://chat.whatsapp.com/ICPXbwfjK0T5Ka3GR6rwhk">
                    <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Join our Whatsapp Group</button>
                  </a>
                  </div>
              </div>
            </div>
          </section>
        </div>
      );
      }

  export default Screen4;