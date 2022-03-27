import React from "react";
import "../css/slider.css";

function SliderComp({
    moviename,moviedescreption,movieposter
}){
    return(
        <div class="carousel-item active">
           <h2 className="moviename">{moviename}</h2>
        <img class="d-block w-100" src={"https://img.dsmartgo.com.tr//content/f/Ih/41147/Background.jpg?v=637698016395562761"} alt="First slide"
         />
          
      </div>
    )
}

export default SliderComp