import './App.css';
import { NavBar } from "./Views/navbar";
import { Slider } from "./Views/slider";
import { HorizontalCard } from "./Views/HorizontalCard";
import MovieSearch from './Components/MovieSearch';
import { Footer } from './Views/Footer';
import { SignUp } from './Views/SignUp';
import { SignIn } from './Views/SignIn';

import MovieInfo from "./Components/MovieInfo";


import { VideoJSView } from './Views/VideoJSView';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SelectedMovieContextProvider } from './Context/MovieContext';



function App() {
  const [topMovieList, setTopMovieList] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]);
  const [popularMovieList, setPopularMovieList] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]);
  const [nowPlayingMovieList, setNowPlayingMovieList] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]);
  const [upComingMovieList, setUpComingMovieList] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]);
  useEffect(() => {
    Apifetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c94cd598b45d6dedb0cb1072fb43adb8&language=en-US&page=1', setTopMovieList)
    Apifetch('https://api.themoviedb.org/3/movie/popular?api_key=c94cd598b45d6dedb0cb1072fb43adb8&language=en-US&page=1', setPopularMovieList)
    Apifetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c94cd598b45d6dedb0cb1072fb43adb8&language=en-US&page=1', setNowPlayingMovieList)
    Apifetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c94cd598b45d6dedb0cb1072fb43adb8&language=en-US&page=1', setUpComingMovieList)
    
  }, []);
  function Apifetch(url, setList) {
    fetch(url
    ).then(response => {
      return response.json();
    }).then(data => {
      
      const movies = data["results"];
      setList(movies)
      console.log(movies)
    });
  }
  function MainPage() {""
    return (
      <div className='main'>
        <NavBar />
  
        <Slider movies={popularMovieList.slice(10)} />

        <h1 className='headermoviescard'>En İyi Filmler</h1>


        <HorizontalCard movies={topMovieList} />
        <br />
        <h1 className='headermoviescard'>Popüler Filmler</h1>

        <HorizontalCard movies={popularMovieList} />
        <br />
        <h1 className='headermoviescard'>Gösterimde Olan Filmler</h1>

        <HorizontalCard movies={nowPlayingMovieList} />
        <br />
        <h1 className='headermoviescard'>Yakında Vizyonda</h1>
        <HorizontalCard movies={upComingMovieList} />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
       
        <Footer />
      </div>

    );

  }


  return (

    <BrowserRouter>



      <SelectedMovieContextProvider>

        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route index path='/SignUp' element={<SignUp />} />
          <Route index path='/SignIn' element={<SignIn />} />
          <Route index path='/MovieInfoPage' element={<MovieInfo />} />
          <Route index path='/VideoJSView' element={<VideoJSView/>}/>
          <Route index path='/MovieSearch' element={<MovieSearch/>}/>
        </Routes>
      </SelectedMovieContextProvider>
    </BrowserRouter>



  )
}

export default App;
