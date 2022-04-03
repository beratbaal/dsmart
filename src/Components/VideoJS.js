import React, { useEffect, useRef } from 'react'




const skipTime = 15;

function VideoJS({
    src,
    poster,
    autoplay
    
}) {



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
