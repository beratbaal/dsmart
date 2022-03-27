import React from "react";
import "../css/slider.css";

function SliderComp({
    moviename, moviedescreption, movieposter
}) {

    return (
        <div className="item">
        <img  src={"https://img.dsmartgo.com.tr//content/f/Ih/41147/Background.jpg?v=637698016395562761"} alt="Los Angeles" />
        <div className="carousel-caption">
          <h3>{moviename}</h3>
          <p>{moviedescreption}!</p>
        </div>
      </div>
    )
}

export default SliderComp