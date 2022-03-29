import React from "react";
import "../css/slider.css";

function SliderComp({
    moviename, moviedescreption, movieposter
}) {
const path= "https://image.tmdb.org/t/p/original/"
    return (
        <div className="item">
        <img  src={path+movieposter}  />
        <div className="carousel-caption">
          <h3 className="movienamecustom">{moviename}</h3>
          <p className="moviedescreptioncustom">{moviedescreption}</p>
          <button className="btnCustom">Hemen İzle</button>
     
        </div>
      </div>
    )
}

export default SliderComp