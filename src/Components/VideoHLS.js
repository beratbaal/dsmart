import { useState } from "react";
import ReactHlsPlayer from "react-hls-player";


export default function VideoHLS(){
    const [hlsUrl, setHlsUrl] = useState(
        "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    );
    

    return(
        <div>
        <input
        type="text"
        className="form-control w-90 m-2 my-4"
        placeholder="HLS Url..."
        value={hlsUrl}
        aria-label="hls-url"
        aria-describedby="set-hls-url"
        onChange={(e) => setHlsUrl(e.target.value)}
      />
        <ReactHlsPlayer 
        src={hlsUrl}
        autoPlay={true}
        controls={true}
        width="60%"
        height="auto"
        />
        </div>
    )
}