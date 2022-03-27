import React from "react";
import "../css/horizontalcard.css";
import MovieCard from "../Components/MovieCard";

const movies = [{
    "name":"Yüzüklerin Efendisi"
},
{
    "name":"Avengers Endgame"
},
{
    "name":"Recep İvedik 2"
}]

export class HorizontalCard extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render(){

        return(
            <div className="customHorizontalCard">
            <div class="container-fluid">

    <div class="row flex-nowrap">

        {movies.map((name)=>{ 
        
            return <MovieCard moviename={name.name}/>;
        })}
        
    </div>
</div>
</div>
        );
    }
}
