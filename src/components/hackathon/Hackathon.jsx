import React from "react";
import "./Hackathon.css";
import male from "../../assets/man.svg";
import female from "../../assets/lady.svg";
import Modalleft from "../../assets/modalleft.svg";
import ModalRight from "../../assets/ModalRight.svg";
import Logo from "../../assets/hackathonLogo.svg";
import codeImage from "../../assets/code.svg";

function Hackathon() {
  return (
    <div className='hackathon-container'>
      <img className='male' src={male} alt='male' />
      <img className='female' src={female} alt='female' />
      <img className='Modalleft' src={Modalleft} alt='Modalleft' />
      <img className='ModalRight' src={ModalRight} alt='ModalRight' />
      <img className='Logo' src={Logo} alt='Logo' />
      <img className='codeImage' src={codeImage} alt='codeImage' />
      <div className='board'>
        <div className='board-heading'>
          <p>Discover-Create-Deploy</p>
          <p>
            where coding meets creativity! Get ready for days filled with
            inspiration, problem-solving, and endless possibilities
          </p>
        </div>

        <div className='event-detail-container'>
          <div>
            <p className='event-detail-heading'>Event Details:</p>
            <p>
              18th and 19th April 2023 <br />
              Venue: Amity University <br /> Mumbai
            </p>
          </div>
          <div>
            <p className='event-detail-heading'>For Registration:</p>
            <p>Group of 3 participants: Rs. 300/-</p>
            <p>Group of 4 participants: Rs. 400/-</p>
            <p>Group of 5 participants: Rs. 500/-</p>
          </div>
        </div>
        <div className='event-decription'>
          <p>
            Accommodation would be provided for all participants. Winners Will
            get prizes up to *50,000/-*. Showcase your skill and grab the prize.
            Payment links will be released soon. Join us as we push the
            boundaries of what's possible and pave the way for the future of
            technology. Let's build some code and make magic happen! ✨💻.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
