import React from "react";
import "../css/horizontalcard.css";
import MovieCard from "../Components/MovieCard";



export class HorizontalCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="customHorizontalCard">
                <div class="container-fluid">

                    <div class="row flex-nowrap">

                        {this.props.movies.map((movie) => {
                          
                            return <MovieCard moviename={movie.title} movieposter={movie.poster_path} />;
                        })}

                    </div>
                </div>
            </div>
        );
    }
}
