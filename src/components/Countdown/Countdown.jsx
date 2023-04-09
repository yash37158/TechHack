import React, {useState, useEffect} from 'react'
import Clock from '../Countdown/Clock'
import "./clock.css"
import ParticleBg from "../../ParticleBg";


function Countdown()  {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
  
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("April 11, 2023").getTime();
  
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
      <div className="home" >
    
     <div> <ParticleBg /> </div>
      <div name='home' className="Countdown">
         <div className='slogan'>
        <h1 className="h1">Join us as we count down the seconds to innovation,</h1><br/>
        <p className="p">The TechHack'23 website is going to be live soon, stay tuned !</p><br/>
        </div>
        <Clock 
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
      </div>
    );
  }

export default Countdown
