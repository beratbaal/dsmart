import React from 'react'
import '../css/video.css';
import VideoPlayer from 'react-video-js-player';
import { useState } from "react";
import {Footer} from "../Views/Footer";
import { Logo } from './Logo';

export default function VideoJS({
  poster = "https://i2.cnnturk.com/i/cnnturk/75/800x400/5e7cec44d265a213003b28cf",


}) {

  const [hlsUrl, setHlsUrl] = useState(
    "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
  );

 
  function VİdeoPlayer({url}){
    return(
      <div className='video-js'>
        
      <VideoPlayer
        src={url}
        poster={poster}
        width="600"
        height="400"
        playbackRates={[0.25, 0.50, 1, 1.25, 1.50, 2]}
        autoplay={true}
        controls={true}
        
      />
    
    </div>
    )
  }

  return (
    
    <>
    <Logo logoStyle="videologocustom" />
    <div>
      
      <input 
      
        className="hlsinput"
        type="text"
        placeholder="HLS Url..."
        onChange={(e) => setHlsUrl(e.target.value)}
      />
      </div>
    <VİdeoPlayer url={hlsUrl}/>
  
    <Footer/>
    </>
  )
}

