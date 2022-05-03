import React, { useContext } from 'react'
import SelectedMovieContext from '../Context/MovieContext';
import "../css/moviesearchcard.css";

const imagePath = "https://image.tmdb.org/t/p/original/";

function MovieSearchCard({
  id, title, description, imageUrl, background, average
}) {
  const selectedMovie = useContext(SelectedMovieContext);
  function clickMovie() {
    selectedMovie.selectMovie(id, title, description, imageUrl, background, average);
  }
  return (
    
    <div class="mainsearchcard">
      <div class="cardsearch cardsearch-blocksearch">
        <div className='moviesearchcardimg'>
        <img src={imagePath + imageUrl} />
        <div className='movieinfo'>
          <h2>{title}</h2>
          <h2>{average}</h2>
        </div>
        </div>
   </div>
   </div>
  
  )
}

export default MovieSearchCard