import React from "react";
import "../css/slider.css";

export class Slider extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={"https://img.dsmartgo.com.tr//content/f/Ih/41147/Background.jpg?v=637698016395562761"} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={""} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={""} alt="Third slide"/>
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