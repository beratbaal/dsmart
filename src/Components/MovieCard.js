import React from 'react'

function MovieCard({
    moviename,moviedescreption,movieposter
}) {
  return (

        <div class="col-3">
            
            <div class="card card-block"><h2>{moviename}</h2></div>
            
        </div>
    
  )
}

export default MovieCard