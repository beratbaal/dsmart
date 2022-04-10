import React, { useContext, useEffect, useState } from 'react'
import "../css/movieinfopage.css";
import SelectedMovieContext from "../Context/MovieContext"
import { Link } from "react-router-dom"
import {MovieInfoHorizontalCard} from "../Views/MovieInfoHorizontalCard";
import {Footer} from "../Views/Footer";



function MovieInfoPage({
}) {
    const imagePath = "https://image.tmdb.org/t/p/w500/";
    const [nowPlayingMovieList, setNowPlayingMovieList] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]);
    const selectedMovieContext = useContext(SelectedMovieContext);
    const videoApiPath = "https://api.themoviedb.org/3/movie/" + selectedMovieContext.id + "/videos?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US";
    const [videoContent, setVideoContent] = useState({
        site: "",
        key: "",
    });
    useEffect(()=>{
        Apifetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c94cd598b45d6dedb0cb1072fb43adb8&language=en-US&page=1', setNowPlayingMovieList)
    },[])
    function Apifetch(url, setList) {
        fetch(url
        ).then(response => {
          return response.json();
        }).then(data => {
    
          const movies = data["results"];
          setList(movies)
          console.log(movies)
        });
      }
    useEffect(() => {
        fetch(videoApiPath
        ).then(response => {
            return response.json();
        }).then(data => {
            const content = data["results"][0];
            setVideoContent({
                site: content["site"],
                key: content["key"],
            }
            );
            window.scrollTo(0, 0);
        });
    }, []);

    return (
        <div>
            <Link to={"/"}><img src={"https://assets.dsmartgo.com.tr/content/img/dsmart-logo-footer.svg"} className='logocustommovieinfo' /></Link>
            <div ><img src={imagePath + selectedMovieContext.poster} className='movieinfoposter' /></div>
            <div className='movieinfoheader'><h4>{selectedMovieContext.title}</h4></div>
            <div className='movievideocustom'>
                <iframe src={"https://www.youtube.com/embed/" + videoContent.key} className="videoscreen"></iframe>
            </div>
            <div className='movieinfodescription'><p>{selectedMovieContext.description}</p></div>
            <Link to={"/VideoHls"}> <button className='videojsbtn'>VideoJS</button></Link> 
            <p className='oneriheader'>Sizin İçin Önerilenler</p>
            <MovieInfoHorizontalCard movies={nowPlayingMovieList}/>
            <br/> <br/> <br/> <br/>
            <Footer/>
        </div>

    );
}

export default MovieInfoPage