import React from "react";
import VideoPlayer from 'react-video-js-player';
import MovieInfo from "../Components/MovieInfo";
import "../css/moviepage.css";




export class MovieInfoPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <div className="movieheader">
                <h2>Film Adı</h2>
            </div>
            <div className="description">
                <p>Film Açıklaması</p>
            </div>
            <div className="videocustom">
           VİDEO
            </div>
            </>
        );
    }
}