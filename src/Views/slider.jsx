import React from "react";
import "../css/slider.css";
import SliderComp from "../Components/SliderComp";

const movies = [
  { "name": "Yüzüklerin Efendisi" },
  
  {"name":"Avengers"}
 
]


export class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="myCarousel" className="carousel slide myCarousel  " data-ride="carousel">
     
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
  
      <div className="carousel-inner">
  
        <div className="item active">
          <img  src={"https://image.tmdb.org/t/p/original/"+this.props.movies[0].backdrop_path} />
          <div className="carousel-caption">
            <h3>{this.props.movies[0].title}</h3>
            
          </div>
          
        </div>
        
        {
          
          this.props.movies.slice(1,10).map((object)=>{
          
             return  <SliderComp moviename={object.title} movieposter={object.backdrop_path}/>
          })
        }
    
      </div>
  

      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    );
  }
}