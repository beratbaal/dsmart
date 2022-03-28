import logo from './logo.svg';
import './App.css';
import { NavBar } from "./Views/navbar";
import { Slider } from "./Views/slider";
import {HorizontalCard} from "./Views/HorizontalCard";
import { useEffect, useState } from 'react';



function App() {
  const [topMovieList, setTopMovieList] = useState(["","","","","","","","","","","","","","","","","","","","",]);
  const [popularMovieList, setPopularMovieList] = useState(["","","","","","","","","","","","","","","","","","","","",]);
  useEffect(() => {
    Apifetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US&page=1',setTopMovieList)
    Apifetch('https://api.themoviedb.org/3/movie/popular?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US&page=1',setPopularMovieList)
  }, []);
  function Apifetch(url,setList){
    fetch(url
    ).then(response => {
      return response.json();
    }).then(data => {

      const movies = data["results"];
      setList(movies)
      console.log(movies)
    });
  }
  return (
    <div>

     <NavBar />
     <Slider movies={popularMovieList.slice(10)}/>
     <HorizontalCard movies={topMovieList}/>
     <HorizontalCard movies={popularMovieList}/>

    </div>

  )
}

export default App;
