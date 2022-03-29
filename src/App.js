import logo from './logo.svg';
import './App.css';
import { NavBar } from "./Views/navbar";
import { Slider } from "./Views/slider";
import {HorizontalCard} from "./Views/HorizontalCard";
import { Footer } from './Views/Footer';

import { useEffect, useState } from 'react';



function App() {
  const [topMovieList, setTopMovieList] = useState(["","","","","","","","","","","","","","","","","","","","",]);
  const [popularMovieList, setPopularMovieList] = useState(["","","","","","","","","","","","","","","","","","","","",]);
  const [nowPlayingMovieList, setNowPlayingMovieList] =  useState(["","","","","","","","","","","","","","","","","","","","",]);
  const [upComingMovieList, setUpComingMovieList] = useState(["","","","","","","","","","","","","","","","","","","","",]);
  useEffect(() => {
    Apifetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US&page=1',setTopMovieList)
    Apifetch('https://api.themoviedb.org/3/movie/popular?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US&page=1',setPopularMovieList)
    Apifetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US&page=1',setNowPlayingMovieList)
    Apifetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3a01017aaf287e88713b7c8edd51e903&language=en-US&page=1',setUpComingMovieList)

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
    <div className='main'>

     <NavBar />
     <Slider movies={popularMovieList.slice(10)}/>
     
     <h1 className='headermoviescard'>En İyi Filmler</h1>
     <HorizontalCard movies={topMovieList}/>
     <br/>
     <h1 className='headermoviescard'>Popüler Filmler</h1>
     <HorizontalCard movies={popularMovieList}/>
     <br/>
     <h1 className='headermoviescard'>Gösterimde Olan Filmler</h1>
     <HorizontalCard movies={nowPlayingMovieList}/>
     <br/>
     <h1 className='headermoviescard'>Yakında Vizyonda</h1>
     <HorizontalCard movies={upComingMovieList}/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>

    </div>
   

  )
}

export default App;
