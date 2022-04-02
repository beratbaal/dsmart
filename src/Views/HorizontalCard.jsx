import React from "react";
import "../css/horizontalcard.css";
import MovieCard from "../Components/MovieCard";

function scrolling(target, value) {  
    const customHorizontal = target.parentElement.parentElement.parentElement 
    customHorizontal.scrollLeft += value;
}


export class HorizontalCard extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div className="customHorizontalCard" id="customH">
                <div class="container-fluid">

                    <div class="row flex-nowrap">

                        {this.props.movies.map((movie) => {

                         return <MovieCard moviename={movie.title}  movieposter={movie.poster_path} movieavarage={movie.vote_average} />;
                         
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
