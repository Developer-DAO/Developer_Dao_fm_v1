import {React} from "react"
import Image from 'next/image'
import BackgroundImg  from "../../img/dddddddddddd.png"
import {
    black_logo,
    black_arrow
  } from "../../img/index.js"
  
import img1 from "../../img/playlist/1.webp"
import img2 from "../../img/playlist/2.webp"
import img3 from "../../img/playlist/3.webp"
import img4 from "../../img/playlist/4.png"
import img5 from "../../img/playlist/5.webp"
import img6 from "../../img/playlist/6.webp"
import img7 from "../../img/playlist/7.webp"
export default function Playlist({info,playListMode,channelProp, setChannel}) {

  const channelPlaylist = (channelLink) =>{
    setChannel(channelLink)
  }
    return (
     
        <span className={playListMode ? "ddddd show_playlist menu menu_playlist " :" ddddd hide_playlist menu menu_playlist" }>
        <Image className="background_img" src={BackgroundImg} alt="Background Img" />
        <div className="inner_menu inner_playlist">
        <div className="info_menu_logo">
        
        </div>
        <div className="info_menu_text playlist_inner">
          <ul>
          {playlists.map( i => {
          return (
            <li className="playlists" onClick={ () => channelPlaylist(i.link)}>
                <div className="left_sec">
                  <div className="iamges_playlist">
                    <div className="overlay">
                      <Image 
                        src={i.img}
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="right_sec">
                  <h5>{i.title}</h5>
                  <p>{i.name}</p>
                  <span>Live</span>
                </div>
            </li> 
          )
        })}
           
          
          
            
          </ul>
        </div>
        </div>
      </span>
    )
}

const playlists = [
  {
    img:img7,
    title:"Drake but he's extra chill for an hour | Lofi Mix | CHILLAF",
    name:"CHILLAF ",
    link:"https://youtu.be/oXQmLDFTNRc"
  }, 
  {
    img:img5,
    title:"The Weeknd but he's chill af for an hour Lofi Mix CHILLAF",
    name:"CHILLAF ",
    link:"https://youtu.be/wA0C0uRxSaE"
  },
  {
    img:img1,
    title:"Coffee shop radio // 24/7 lofi hip-hop beats",
    name:"STEEZYASFUCK",
    link:"https://www.youtube.com/watch?v=-5KAN9_CzSA"
  },
  {
    img:img2,
    title:"Lofi hip hop radio chill beats to relax/study to..",
    name:"Chill with Taiki",
    link:"https://www.youtube.com/watch?v=HDhR2Yhnvfo"
  },
  {
    img:img3,
    title:"This is what daydreaming sounds like  Lofi Music..",
    name:"Lofi Vibes",
    link:"https://www.youtube.com/watch?v=KeWGT2IBvMk"
  },
  {
    img:img4,
    title:"Stop Overthinking - Lofi Music - Lofi Hip Hop Mix ~ ..",
    name:"Lofi Vibes",
    link:"https://www.youtube.com/watch?v=J8bjw_15thg"
  },
  
  {
    img:img6,
    title:"Bollywood Lofi Mixtape Vol.1 | 30 Minute Mix to Relax,",
    name:"Wormono Music",
    link:"https://youtu.be/q0BVR5jRXxE"
    
  }
  
  
]