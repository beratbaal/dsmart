import React from "react";
import "../css/slider.css";
import SliderComp from "../Components/SliderComp";

const movies = [
  { "name": "Yüzüklerin Efendisi" }
 
]

export class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <button className="btnCustom">Hemen İzle</button>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            
            {movies.map((name)=>{
              return <SliderComp moviename={name.name}/>
            })}
          </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}