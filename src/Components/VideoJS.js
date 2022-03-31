import React from "react";
import VideoPlayer from "react-video-js-player";    

const VideoJS = ()=>{
         src,
         poster

    return(
        <div>
            <VideoPlayer
            src={src}
            poster={poster}>
            </VideoPlayer>
        </div>
    );
}