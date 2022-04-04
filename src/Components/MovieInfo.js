import React, { useContext, useEffect, useState } from 'react'
import "../css/movieinfopage.css";
import SelectedMovieContext from "../Context/MovieContext"
import {Link} from "react-router-dom"




function MovieInfoPage({
}) {
    
    const selectedMovieContext = useContext(SelectedMovieContext);
    const videoApiPath="https://api.themoviedb.org/3/movie/"+selectedMovieContext.id+"/videos?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US";
    const [videoContent,setVideoContent] = useState({
        site:"",
        key:"",
    });

    useEffect(() => {
        fetch(videoApiPath
        ).then(response => {
          return response.json();
        }).then(data => {
            const content = data["results"][0];
            setVideoContent({
                site:content["site"],
                key:content["key"],
            }
            );
            window.scrollTo(0,0);
        });
      }, []);

    return(

        <div>
          <div >
           <Link to={"/"}><img src={"https://assets.dsmartgo.com.tr/content/img/dsmart-logo-footer.svg"}  className='logocustommovieinfo'/></Link>   
          </div>
            <div className='movieinfocustom'>
                <div className='movieheader'>
                    <h2>{selectedMovieContext.title}</h2>
                </div>
                <div className='moviedescreption'>
                    <p>{selectedMovieContext.description}</p>
                </div>
            </div>
            <div className='movievideocustom'>
            <iframe src={"https://www.youtube.com/embed/"+videoContent.key} className="videoscreen"></iframe> 
         
            </div>
         
        </div>
   
        
    );
}

export default MovieInfoPage