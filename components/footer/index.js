import Image from 'next/image'
import musicIcon from "../../img/icons/music.svg"
import Playlist from "../playlist"
import {useState} from "react"
import {
 Links
} from "../../img/index.js"
const Footer = ({musicState, channelProp, setChannel}) =>{

  const [playlist, setPlaylist] = useState(false);

  const showPlaylist = () => {
    setPlaylist(!playlist)
    
  }
    return(
        <footer className="footer">
          <div className="container">
            <div className="flex-container">
          <div className="links_left flex-item">
            <div className="links_icon" title="Developer DAO website">
              <a>
              <Image src={musicIcon} alt="Links Icon" title="Info" onClick={ () => showPlaylist()}/>
              <Playlist playListMode={playlist} channelProp={channelProp} setChannel={setChannel}/>
              </a>
            </div>
          </div>
           <div className="links_right flex-item">
           <svg className=  {musicState ? "on" : "off"} width="25" height="" viewBox="0 0 77 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 26L10 48" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M68 26L68 48" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M54 13V60" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 13V60" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M39 7L39 66" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
          </div>
          </div>
          </div>
        </footer>
    )
}
export default Footer