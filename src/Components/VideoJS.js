import React, { useEffect, useRef } from 'react'
import '../css/video.css';
import VideoPlayer from 'react-video-js-player';


const skipTime = 15;

function VideoJS({
    src,
    poster,
    autoplay,
    onPlay,
    onPause,
    onEnd
}) {

    const handle=(player)=>{

        player.on('play', () => {
            onPlay();
        });
        player.on('pause', () => {
            onPause();
        });
        player.on('ended', () => {
            onEnd();
        });
        document.addEventListener("keydown",(e)=>{
            if(e.keyCode==37){
                skip(player)
            }else if(e.keyCode==39){
                skip(player)
            }
          }
        )
    }
    function skip(player){
        player.currentTime( Math.floor(player.currentTime()+skipTime));
    }

  return (
    <div className='video-js'>
        <VideoPlayer
            src={src}
            poster={poster}
            playbackRates={[0.25, 0.50, 1, 1.25, 1.50]}
            autoplay={autoplay}
            controls
            onReady={handle}
        />
    </div>
  )
}

export default VideoJS