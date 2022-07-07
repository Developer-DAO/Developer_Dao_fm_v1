
import {React, useState, useRef} from "react"
import Image from 'next/image'

import ReactPlayer from 'react-player/youtube'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// css
import styles from '../styles/Home.module.css'
// img
import {
  PlayIcon,
  PauseIcon,
  InfoIcon,
  OpenfullScreen,
  ClosefullScreen,
  TwitterIcon,
  time,
  account
} from "../img/index.js"
// 
import PageHead from "../components/PageHead/index.js"
import Footer from "../components/footer/index.js"
import Face from "../components/D_D_face/index.js"
import Info_menu from "../components/Info_menu/index.js"
import Timer from "../components/timer/index.js"
import ProductHunt from "../components/ProductHunt/index.js"


export default function Home() {
  const screenMood = useFullScreenHandle();
  const [info, setInfo] = useState(false);
  const [timer, setTimerMode] = useState(false)
  const [channel, setChannel] = useState("https://youtu.be/5qap5aO4i9A")
  const [state, setTheState] = useState( {
    url: null,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
    fullScreen:false
  })
  
  const showInfo = () => {
    setInfo(!info)
    clearTimer();
   
  }
  const showTimer = () => {
    setTimerMode(!timer);
   clearInfo();
  }
  const clearTimer = () =>{
    if(timer === true){
      setTimerMode(false)
    }
  }
  const clearInfo = () =>{
    if(info === true){
      setInfo(false)
    }
  }
  const closeMenu = () =>{
    setInfo(false);
    setTimerMode(false)
  }
  const boxRef = useRef();
  
  const handlePlayPause = () => {
    setTheState({ playing: !state.playing })
  }

  const  handlePlay = () => {
    console.log('onPlay')
    setTheState({ playing: true })
  }
  const play = () =>{
    return (
      <div  className="button play_button" onClick={() => {
        handlePlayPause();
      }}>
        <span className="button_span"></span>
        <span className="button_span"></span>    
        <div className="icon_mode">
          <Image src={PlayIcon} alt="Picture of the author"/>
        </div>
      </div>
    )
  }

  const pause = () =>{
    return (
      <div className="button pause_button" onClick={() =>{
        handlePlayPause();
      }}>
        <span className="button_span"></span>
        <span className="button_span"></span>    
        <div className="icon_mode">
          <Image src={PauseIcon}alt="Picture of the author"/>
        </div>
      </div>
    )
  }
 
  return (
    <div id="body" className={styles.container} >
      <PageHead />
      <FullScreen handle={screenMood}>
      <main className={styles.main} >
      <header>
       <div className="container">
         <div className="header_container">
          <div className="logo">
            <Image src="/Group50.svg" alt="Vercel Logo" layout='fill' />
            <span className="fm_live"></span>
          </div>
          <div className="headIcons">

          <div className="full_screen_button icons" onClick={screenMood.enter} title="Full Screen">
                  <Image src={OpenfullScreen}alt="full Screen Icon"/>
             </div>
             <div className="close_full_screen_button icons" onClick={screenMood.exit} title="Exit Full Screen">
                  <Image src={ClosefullScreen}alt="full Screen Icon"/>
             </div>
             <div className="icons" title="tweet">
              <a href="https://twitter.com/intent/tweet?text=Chilling with 🎧 Lofi Music on Developer DAO FM https://developerdaofm.com/" rel="noreferrer" target="_blank">
                  <Image src={TwitterIcon} alt="twitter Icon"/>
              </a>
             </div>
             <Timer timer={timer} />
             <div className="icons time_icon" title="time Icon"  onClick={ () => showTimer()}>
                  <Image src={time} alt="time Icon"/>
             </div>
             <Info_menu info={info} />
             <div className="icons infoIcon" title="Info" onClick={ () => showInfo()}>
                <Image src={InfoIcon}alt="info Icon"/>
            </div>

            {/* <div className="icons userIcon" title="Info" onClick={ () => showInfo()}>
                <Image src={account}alt="user Icon"/>
            </div>
             */}
          
          </div>
          </div>
        </div>
      </header>
        <div className="anmation">
            <div className="face_background">
            </div>
            <Face isTheMuic_playing_or_not={state.playing} anim_el={boxRef}/>
            <ReactPlayer 
             url={channel}
             width="0"
             height="0"
             playing={state.playing}
             loop={state.loop}
             onReady={() => console.log('onReady')}
             onStart={() => console.log('onStart')}
             onPlay={() => handlePlay()}
            />
          <div className="button_container">
            {state.playing ? pause() : play()}
          </div>
        </div>
        <Footer musicState={state.playing} showInfo={showInfo} infoProp={info} channelProp={channel} setChannel={setChannel}/>
        <ProductHunt />
      
      </main>
   
      </FullScreen>
    </div>
  )
}
