import React from "react";
import "../css/slider.css";
import { Button } from "../Components/Button";

function SliderComp({
    moviename, moviedescreption, movieposter
}) {
const path= "https://image.tmdb.org/t/p/original/"
    return (
        <div className="item">
        <img  src={path+movieposter}/>
        <div className="carousel-caption">
          <h3 className="movienamecustom">{moviename}</h3>
          <p className="moviedescreptioncustom">{moviedescreption}</p>
          <Button buttonStyle="btnSlider">Hemen İzle</Button>
     
        </div>
      </div>
    )
}

export default SliderComp