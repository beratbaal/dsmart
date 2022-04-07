import React from "react";
import "../css/horizontalcard.css";
import MovieCard from "../Components/MovieCard";

function scrolling(target, value) {  
    const customHorizontal = target.parentElement.parentElement.parentElement 
    customHorizontal.scrollLeft += value;
}

export class MovieInfoHorizontalCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="customHorizontalCard" id="customH">
            <div class="container-fluidcustom">

                <div class="row flex-nowrap">

                    {this.props.movies.map((movie) => {

                     return <MovieCard id={movie.id} title={movie.title} description={movie.overview}  imageUrl={movie.poster_path} average={movie.vote_average} />;
                     
                    })}
                    <button className="btngeri" id="geri" onClick={e => scrolling(e.target, -1000)
                    }></button>
                    <button className="btnileri" id="ileri" onClick={e => scrolling(e.target, 500)
                    } ></button>
                </div>
            </div>

        </div>
        );
    }
}