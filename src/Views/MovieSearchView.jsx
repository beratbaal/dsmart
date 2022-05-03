import React from "react";
import MovieSearchCard from "../Components/MovieSearchCard";
import "../css/moviesearchcard.css";

 

export class MovieSearchView extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <>
                <div className="movielistview-col">

                    {this.props.movies.map((movie) => {
                       
                        return <MovieSearchCard id={movie.id} title={movie.title} description={movie.overview} imageUrl={movie.poster_path} average={movie.vote_average} />;
                        
                    })}
                </div>
            </>
        );
    }
}