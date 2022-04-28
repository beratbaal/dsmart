import React from 'react'
import '../css/video.css';
import VideoPlayer from 'react-video-js-player';
import { useState } from "react";


export default function VideoJS({
  autoplay,
  poster = "https://halitparlak.net/wp-content/uploads/2020/10/VideoJS.png",


}) {

  const [hlsUrl, setHlsUrl] = useState(
    "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
  );

  function onClick (){
   const  element = document.getElementById('link');
   if(element!=null){
     setHlsUrl(element.value)
     console.log(element.value)
   }

  }
  function VİdeoPlayer({url}){
    return(
      <div className='video-js'>
        
      <VideoPlayer
        src={url}
        poster={poster}
        playbackRates={[0.25, 0.50, 1, 1.25, 1.50, 2]}
        autoplay={true}
        controls={true}
      />
    
    </div>
    )
  }

  return (
    
    <>
    <div>
      
      <input 
        id='link'
        className="hlsinput"
        type="text"
        placeholder="HLS Url..."
        onChange={(e) => setHlsUrl(e.target.value)}
      />
      </div>
    <VİdeoPlayer url={hlsUrl}/>
      <button onClick={onClick}>git</button>
    </>
  )
}

