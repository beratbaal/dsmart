import { useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import "../css/videohls.css";
import { Logo } from "./Logo";
import { Footer } from "../Views/Footer";

export default function VideoHLS(){
    const [hlsUrl, setHlsUrl] = useState(
        "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    );
    

    return(
        <div>
            <Logo/>
            
        <input
        className="hlsinput"
        type="text"
        placeholder="HLS Url..."
        value={hlsUrl}
       
        onChange={(e) => setHlsUrl(e.target.value)}
      />
      
        <ReactHlsPlayer 
        src={hlsUrl}
        autoPlay={true}
        controls={true}
       
        />
        <Footer/>
        </div>
    )
}