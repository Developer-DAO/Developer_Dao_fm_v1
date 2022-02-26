
import {React, useState, useRef} from "react"
import { gsap } from "gsap";
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// css
import styles from '../styles/Home.module.css'
// img
import {
  Background,
  PlayIcon,
  PauseIcon,
  InfoIcon,
  OpenfullScreen,
  ClosefullScreen,
  TwitterIcon,
  time,
  black_logo,
  black_arrow
} from "../img/index.js"
// 

import PageHead from "../components/PageHead/index.js"
import Footer from "../components/footer/index.js"
import Face from "../components/D_D_face/index.js"

export default function Home() {
  const screenMood = useFullScreenHandle();
  const [info, setInfo] = useState("false")
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
          <Image src={PlayIcon}alt="Picture of the author"/>
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
    <div className={styles.container}>
      <PageHead />
      <FullScreen handle={screenMood}>
      
      <main className={styles.main}>
      <header>
       <div className="container">
          <div className="logo">
            <Image src="/Group50.svg" alt="Vercel Logo" layout='fill' />
            <span className="fm_live"></span>
          </div>
          <div className="headIcons">
           <ul>
           <li className="icons infoIcon" title="Info" onClick={ () => showInfo()}>
                <Image src={InfoIcon}alt="info Icon"/>
            </li>
            <span className={info ? "info_menu" :"info_menu_mode" }>
              <div className="info_menu_logo">
              <Image src={black_logo} alt="full Screen Icon"/>
              </div>
              <div className="info_menu_text">
                <ul>
                  <li className="info_menu_links_holder">
                    <a href="https://www.developerdao.com/" target="_blank">
                      <span className="info_menu_links">Website</span>
                      <span className="info_menu_links">
                        <Image src={black_arrow} alt="black arrow Icon"/>
                      </span>
                    </a>
                  </li>
                  <li className="info_menu_links_holder">
                    <a href="https://developerdao.notion.site/developerdao/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e" target="_blank">
                      <span className="info_menu_links">Wiki</span>
                      <span className="info_menu_links">
                      <Image src={black_arrow} alt="black arrow Icon"/>
                      </span>
                    </a>
                  </li>
                  <li className="info_menu_links_holder">
                    <a href="https://twitter.com/developer_dao" target="_blank">
                      <span className="info_menu_links">Twitter</span>
                      <span className="info_menu_links">
                      <Image src={black_arrow} alt="black arrow Icon"/>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </span>
             <li className="icons" title="tweet">
              <a href="https://twitter.com/intent/tweet?text=Chilling with 🎧 Lofi Music on Developer DAO FM https://developerdaofm.com/" target="_blank">
                  <Image src={TwitterIcon} alt="twitter Icon"/>
              </a>
             </li>
            
             <li className="full_screen_button icons" onClick={screenMood.enter} title="Full Screen">
                  <Image src={OpenfullScreen}alt="full Screen Icon"/>
             </li>
             <li className="close_full_screen_button icons" onClick={screenMood.exit} title="Exit Full Screen">
                  <Image src={ClosefullScreen}alt="full Screen Icon"/>
             </li>
             
           </ul>
          </div>
        </div>
      </header>
        <div className="anmation">
            <div className="face_background">
            </div>
            <Face isTheMuic_playing_or_not={state.playing} anim_el={boxRef}/>
            <ReactPlayer 
             url='https://youtu.be/5qap5aO4i9A'
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
        <Footer musicState={state.playing}/>
      </main>
   
      </FullScreen>
    </div>
  )
}
