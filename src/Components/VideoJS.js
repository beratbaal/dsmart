import React from 'react'
import '../css/video.css';
import VideoPlayer from 'react-video-js-player';




function VideoJS({
    src,
    autoplay,
    poster="https://halitparlak.net/wp-content/uploads/2020/10/VideoJS.png",
    

}) {

  

  return (
    <div className='video-js'>
        <VideoPlayer
            src={src}
            poster={poster}
            playbackRates={[0.25, 0.50, 1, 1.25, 1.50, 2]}
            autoplay={autoplay}
            
        />
    </div>
  )
}

export default VideoJS