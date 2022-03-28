import React from "react";
import "../css/slider.css";

function SliderComp({
    moviename, moviedescreption, movieposter
}) {
const path= "https://image.tmdb.org/t/p/original/"
    return (
        <div className="item">
        <img  src={path+movieposter} alt="Los Angeles" />
        <div className="carousel-caption">
          <h3>{moviename}</h3>
          <p>{moviedescreption}</p>
          <button className="btnCustom">Seç İzle</button>
     
        </div>
      </div>
    )
}

export default SliderComp