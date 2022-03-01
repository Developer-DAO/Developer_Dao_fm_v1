import {React} from "react"
import Image from 'next/image'
import BackgroundImg  from "../../img/dddddddddddd.png"
import {
    black_logo,
    black_arrow
  } from "../../img/index.js"

export default function Info_menu({info,timer}) {

  
    return (
     
        <span className={info ? "show menu info_menu" :"hide menu info_menu" }>
        <Image className="background_img" src={BackgroundImg} alt="Background Img" />
        <div className="inner_menu">
        <div className="info_menu_logo">
        <Image src={black_logo} alt="full Screen Icon"/>
        </div>
        <div className="info_menu_text">
          <ul>
          <a href="https://www.developerdao.com/" rel="noreferrer" target="_blank">
            <li className="info_menu_links_holder">
           
                <span className="info_menu_links">Website</span>
                <span className="info_menu_links">
                  <Image src={black_arrow} alt="black arrow Icon"/>
                </span>
                </li>
              </a>
        
          
              <a href="https://developerdao.notion.site/developerdao/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e" rel="noreferrer" target="_blank">
              <li className="info_menu_links_holder">
                <span className="info_menu_links">Wiki</span>
                <span className="info_menu_links">
                <Image src={black_arrow} alt="black arrow Icon"/>
                </span>
           
            </li> 
            </a>
            <a href="https://twitter.com/developer_dao" rel="noreferrer" target="_blank">
            <li className="info_menu_links_holder">
           
                <span className="info_menu_links">Twitter</span>
                <span className="info_menu_links">
                <Image src={black_arrow} alt="black arrow Icon"/>
                </span>
           
            </li>
            </a>
        
              <a href="https://twitter.com/sadiq_moo" rel="noreferrer" target="_blank">
              <li className="info_menu_links_holder">
                <span className="info_menu_links">Credit</span>
                <span className="info_menu_links">
                <Image src={black_arrow} alt="black arrow Icon"/>
                </span>
           
            </li>
            </a>
          </ul>
        </div>
        </div>
      </span>
    )
}