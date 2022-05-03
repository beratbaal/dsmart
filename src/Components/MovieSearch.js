import React, { useContext, useEffect, useState } from 'react';
import { MovieSearchView } from '../Views/MovieSearchView';



function MovieSearch({
}) {
    
    const [nowPlayingMovieList, setNowPlayingMovieList] = useState(["",]);
  
    
  
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
    
    
    return (
        <div>
           <MovieSearchView movies={nowPlayingMovieList} />
        </div>
      
      
    );
  }
  
  export default MovieSearch