import React, { useState } from 'react'
import { useEffect } from 'react';
import "../css/MovieListView.css";
import {MovieCard} from '../Components/moviecard.js';

function MovieListView() {

  const [movieList, setMovieList] = useState(["","","","","","","","","","","","","","","","","","","","",]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US&page=1'
    ).then(response => {
      return response.json();
    }).then(data => {
      const movies = data["results"];
      setMovieList(movies)
    });
  }, []);


  function MovieListUl(movies){
    const Ul=[<></>];
    for(let i=0;i<movies.length;i+=4){
      Ul.push(
      <div className='movielistview-row'>
      {
        movies.slice(i,i+6).map((movie)=>
          MovieListLi(movie)
        )
      }
      </div>)
    }

    
    return Ul;
  }

  function MovieListLi(movie){
    return(
      <div className='movielistview-col'>
        <MovieCard imageUrl={movie["poster_path"]} title={movie["title"]} key={movie["id"]} />
      </div>
    );
  }

  return (
    <div className='movielistview'>
      <div className='container movielistview-container'>
        {MovieListUl(movieList)}
      </div>
    </div>
  )
}

export default MovieListView