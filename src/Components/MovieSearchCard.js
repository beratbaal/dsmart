import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import SelectedMovieContext from '../Context/MovieContext';

const imagePath = "https://image.tmdb.org/t/p/original/";

function MovieSearchCard({
  id,title,description,imageUrl,background,average
}) {
  const selectedMovie = useContext(SelectedMovieContext);
  function clickMovie(){
    selectedMovie.selectMovie(id,title,description,imageUrl,background,average);
  }
  return (

    <div class="col-3">
      <Link to={"/MovieInfoPage"} onClick={clickMovie}>
      <div class="card card-block">
       
        <img src={imagePath + imageUrl} />
      
        <div className='movieinfo'>
          <h4 className='info'>{title}</h4>
            <p className='info'>{average}</p>
        </div>
      </div>
      </Link>
    </div>
    
  )
}

export default MovieSearchCard