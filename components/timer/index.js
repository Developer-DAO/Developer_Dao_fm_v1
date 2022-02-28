import React, { useEffect, useState , useRef} from "react";

import Image from 'next/image'
import BackgroundImg  from "../../img/dddddddddddd.png"


import useSound from 'use-sound';


const padTime = (time) =>{
  return time.toString().padStart(2,0);
}

export default function Timer({timer}) {
 const [playSound, { stop }] = useSound("/alarm.mp3");
 const [buttonPlay] = useSound("/click.mp3");
 const [timeLeft, setTimeLeft] = useState(25 * 60);
 const intervallRef = useRef(null);
 const intervallSound = useRef(null);

 const startTimer = () => {
  console.log("startTimer")
  if(intervallRef.current !== null) {
    return;
  }

  intervallRef.current = setInterval(()=>{
    setTimeLeft( timeLeft => {
      if(timeLeft >= 0) {
        return timeLeft - 1;
      }
      return 0
     }  
    )
   },1000)
 }
 const stopTimer = () => {
  if(intervallRef.current === null) {
    return;
  }
   clearInterval(intervallRef.current);
   intervallRef.current = null;
 
 }
 const resetTimer = () => {
  clearInterval(intervallRef.current);
  intervallRef.current = null;
  setTimeLeft(25 * 60);
  stop()
  clearInterval(intervallSound.current);
  intervallSound.current = null;
 }
 const alarmFun = () =>{
  if(intervallSound.current !== null) {
    return;
  }
  intervallSound.current = setInterval(() =>{
    playSound()
   },2000)
 }
 
 useEffect(() =>{
  if(timeLeft == 0){
    alarmFun()
   }
 })

 const min = padTime(Math.floor(timeLeft / 60))
 const sec = padTime(timeLeft - min * 60);

    return (
      <span className={timer ? " hide menu time_menu" :"show menu time_menu" }>
      <Image className="background_img" src={BackgroundImg} alt="Background Img" />
      <div className="inner_menu">
        <div className="time_circle" onClick={() => playSound()}>
          <div className="cirle"></div>
          <div className="time_num">{min}<span>:</span>{sec}</div>
        </div>
        <div className="buttons_container">
          <buttons id="play" className="buttons"  onClick={() =>startTimer()}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.08789 12.9826V1.76447L7.32303 4.62867L12.5582 7.49288L2.08789 12.9826Z" fill="white" stroke="white" stroke-width="2.99151" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </buttons>
          <buttons id="puse" className="buttons" onClick={() => stopTimer()}>
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.193359" y="0.280273" width="3.79935" height="16.1472" fill="white"/>
          <rect x="10.5918" y="0.280273" width="3.79935" height="16.1472" fill="white"/>
          </svg>
          </buttons>
          <buttons id="replay" className="buttons" onClick={() => resetTimer()}>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0216 8.38452C15.0221 9.82509 14.5279 11.2221 13.6218 12.342C12.7156 13.4619 11.4525 14.2367 10.0435 14.5368C8.63455 14.8369 7.16527 14.6442 5.88141 13.9908C4.59754 13.3374 3.57696 12.263 2.99034 10.9473L1.04662 11.7368C1.81715 13.5023 3.17204 14.9487 4.8835 15.8328C6.59496 16.7168 8.55863 16.9847 10.4444 16.5914C12.3301 16.198 14.0229 15.1674 15.2382 13.6729C16.4535 12.1783 17.1172 10.3108 17.1176 8.38452C17.1177 6.63466 16.5703 4.92863 15.552 3.50551C14.5338 2.0824 13.0958 1.01355 11.4396 0.448743C9.78342 -0.116062 7.992 -0.148506 6.31643 0.355959C4.64086 0.860423 3.16512 1.87651 2.09603 3.26182V0.69907H0V6.28849L1.04802 7.33651H5.93876V5.24047H3.28658C3.97842 4.04108 5.04679 3.10358 6.3259 2.57344C7.60501 2.0433 9.02334 1.95017 10.3608 2.3085C11.6982 2.66683 12.88 3.45658 13.7228 4.55521C14.5655 5.65384 15.022 6.9999 15.0216 8.38452V8.38452Z" fill="white"/>
            </svg>
          </buttons>
        </div>
      </div>
    </span>
    )
}