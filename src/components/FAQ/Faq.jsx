import React, {useState} from 'react'
import './faq.css'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-white">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
        <div className='Screen pt-8'>
            <h1 className='Faq md:px-32 pb-8' id="faq">FAQs</h1>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          
          <div class="Questions space-y-4">
            <Item className='Question' title="Can we work on existing projects?">
            No, you need to start a new project.
            </Item>
            <Item className='Question' title="What do I need to bring?">
            A valid government-issued photo ID, laptop, phone, chargers.
            </Item>
            <Item className='Question' title="What shouldn't I bring?">
            Weapons of any kind, drugs, or alcohol.
            </Item>
            <Item className='Question' title="Will accomodation be provided?">
            Yes.
            </Item>
            <Item className='Question' title="Can I leave the venue in between the hackathon?">
            Yes.
            </Item>
            <Item className='Question' title="Is there a specific meal plan or menu for individuals observing Ramadan?">
            Yes, arrangments will be made.
            </Item>
            <Item className='Question' title="What happens after a hackathon?">
            Participants may present their project to judges and attendees, winners may receive prizes, and participants may continue working on their project or use the skills and knowledge gained for future projects.
            </Item>
          </div>
        </div>
      </div>
      </div>
    );
  }; 

export default Faq
