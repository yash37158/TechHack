import React, { useState, useEffect } from 'react'
import './home.css'
import TechHack from '../../assets/TechHack23.svg'
import Clock from '../Countdown/Clock'


const Home = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("April 18, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  
    


  return (
    <div className='Home-Screen pt-1 object-fill' id="home">
      <div className='Image md:px-[320px]'>
      <img src={TechHack} className='Head-Home'/>
      <div className=' Slogan'>
      <h1 className='tagline text-white text-2xl'>Discover - Create - Deploy</h1>
      </div>
      </div>

      <div className='text-white'>
      <div className="countdown-div">
      <Clock className ="clock"
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
        </div>
      </div>

    </div>
  )
  
}

export default Home
