import React from 'react'

const imagePath="https://image.tmdb.org/t/p/original/";

function MovieCard({
  moviename, movieavarage, movieposter
}) {
  return (

    <div class="col-3">

      <div class="card card-block">
        <div className='movieimg'>
              <img src={imagePath+movieposter}/>
        </div>
        <div className='movieinfo'>
              <h4 className='info'>{moviename}</h4>
              <p className='info'>{movieavarage}</p>
        </div>
      </div>

    </div>

  )
}

export default MovieCard