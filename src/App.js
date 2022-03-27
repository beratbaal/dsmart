import logo from './logo.svg';
import './App.css';
import { NavBar } from "./Views/navbar";
import { Slider } from "./Views/slider";
import {HorizontalCard} from "./Views/HorizontalCard";



function App() {
  return (
    <div>
      <NavBar />
      <Slider/>
     <HorizontalCard/>

    </div>

  )
}

export default App;
