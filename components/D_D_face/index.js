import {React, useState, useEffect, useRef} from "react"
import anime from 'animejs';

export default function face({isTheMuic_playing_or_not, anim_el}) {
  let shapes =  {
    musicNotPlaying: "M240.351 252.51C236.562 247.423 225.478 237.343 211.457 237.713C197.436 238.083 188.878 247.732 186.351 252.51",
    muiscPlaying: "M186.351 237.703C190.14 242.79 201.224 252.87 215.245 252.5C229.266 252.13 237.824 242.481 240.351 237.703"
}
    const [mood, setMood] = useState("is_not_smileing")
    const [musicMode, setMusicMode] = useState(shapes.musicNotPlaying)
    
    const [animation, setAnimation] = useState({
      face:"face_animation",
      stopAnimation:"doNotAnimate"
    })
    const playing_or_not = () => {
        if(isTheMuic_playing_or_not === false){
          setMusicMode(shapes.musicNotPlaying)
        }else if(isTheMuic_playing_or_not === true){
          setMusicMode(shapes.muiscPlaying)
        }
    }
   
  

    useEffect(() => {
      playing_or_not();
      anime({
        targets: '#mouth',
        d: [
          { value: musicMode },
        ],
        easing: 'linear',
        duration: 0.1,
       
      });
    });

    return (
      
<svg id="face_svg" width="428" height="267" viewBox="0 0 428 267" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M383.781 171.962C383.781 78.0947 307.686 2 213.818 2" stroke="white" stroke-width="3.69483"/>
<g filter="url(#filter0_dddd_279_436)">
<path d="M397.636 186.28C397.636 201.839 391.433 214.453 383.78 214.453C376.128 214.453 369.925 201.839 369.925 186.28C369.925 170.72 376.128 158.107 383.78 158.107C391.433 158.107 397.636 170.72 397.636 186.28Z" fill="white"/>
</g>
<path d="M43.8564 171.962C43.8564 78.0947 119.951 2 213.818 2" stroke="white" stroke-width="3.69483"/>
<g filter="url(#filter1_dddd_279_436)">
<path d="M43.8563 214.453C36.2041 214.453 30.0007 201.84 30.0007 186.28C30.0007 170.72 36.2041 158.107 43.8563 158.107C51.5086 158.107 57.7119 170.72 57.7119 186.28C57.7119 201.84 51.5086 214.453 43.8563 214.453Z" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M111.71 130.472V214.092H141.223C164.508 214.092 183.384 195.373 183.384 172.282C183.384 149.191 164.508 130.472 141.223 130.472H111.71ZM129.779 148.391V196.174H141.223C154.529 196.174 165.315 185.477 165.315 172.282C165.315 159.087 154.529 148.391 141.223 148.391H129.779Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M251.077 130.472V214.092H280.59C303.875 214.092 322.751 195.373 322.751 172.282C322.751 149.191 303.875 130.472 280.59 130.472H251.077ZM269.146 148.391V196.174H280.59C293.896 196.174 304.682 185.477 304.682 172.282C304.682 159.087 293.896 148.391 280.59 148.391H269.146Z" fill="white"/>
<path id="mouth" d="M240.351 252.51C236.562 247.423 225.478 237.343 211.457 237.713C197.436 238.083 188.878 247.732 186.351 252.51" stroke="white" stroke-width="14.8065"/>
<defs>
<filter id="filter0_dddd_279_436" x="340.366" y="150.717" width="86.8281" height="115.463" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.461854"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_279_436"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.69483"/>
<feGaussianBlur stdDeviation="3.69483"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_279_436" result="effect2_dropShadow_279_436"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="14.7793"/>
<feGaussianBlur stdDeviation="11.0845"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_279_436" result="effect3_dropShadow_279_436"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="22.169"/>
<feGaussianBlur stdDeviation="14.7793"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect3_dropShadow_279_436" result="effect4_dropShadow_279_436"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_279_436" result="shape"/>
</filter>
<filter id="filter1_dddd_279_436" x="0.442377" y="150.717" width="86.8281" height="115.463" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.461854"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_279_436"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.69483"/>
<feGaussianBlur stdDeviation="3.69483"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_279_436" result="effect2_dropShadow_279_436"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="14.7793"/>
<feGaussianBlur stdDeviation="11.0845"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_279_436" result="effect3_dropShadow_279_436"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="22.169"/>
<feGaussianBlur stdDeviation="14.7793"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect3_dropShadow_279_436" result="effect4_dropShadow_279_436"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_279_436" result="shape"/>
</filter>
</defs>
</svg>
    )
}