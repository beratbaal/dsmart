import React from "react";
import MovieSearchCard from "../Components/MovieSearchCard";

export class MovieSearchView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div>

                    {this.props.movies.map((movie) => {

                        return <MovieSearchCard id={movie.id} title={movie.title} description={movie.overview} imageUrl={movie.poster_path} average={movie.vote_average} />;

                    })}
                </div>
            </>
        );
    }
}