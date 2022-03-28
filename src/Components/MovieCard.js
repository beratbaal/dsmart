import React from 'react'

const imagePath="https://image.tmdb.org/t/p/w500/";

function MovieCard({
  moviename, moviedescreption, movieposter
}) {
  return (

    <div class="col-3">

      <div class="card card-block">
        <div className='movieimg'>
              <img src={imagePath+movieposter}/>
        </div>
        <div className='movieinfo'>
              <h4>{moviename}</h4>
        </div>
      </div>

    </div>

  )
}

export default MovieCard