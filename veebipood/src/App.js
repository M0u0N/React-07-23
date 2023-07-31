// import logo from './logo.svg'; edit --- toggle line comment 
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import MitteLeitud from './pages/MitteLeitud';
import { useState } from 'react';

function App() {
  const [teema, uuendaTeema] = useState(localStorage.getItem("teema"));

  const uuendaTeemaHeledaks = () =>{
      uuendaTeema("hele");
      localStorage.setItem("teema","hele");
  }
  const uuendaTeemaTumedaks = () => {
      uuendaTeema("tume");
      localStorage.setItem("teema", "tume");
  }

  return (
    <div className={teema === "tume" ? "tume-leht" : "hele-leht"}>
        <Link to="/">
          <img className="pilt" src="https://media.wired.com/photos/5a5547032b3a7778f5ca06cb/1:1/w_1200,h_1200,c_limit/Doggo-FeatureArt2-104685145.jpg" alt="" />
        </Link>

        {
          teema === "tume" ?
          <button onClick={uuendaTeemaHeledaks}>Heledaks</button> :
          <button onClick={uuendaTeemaTumedaks}>Tumedaks</button>
        }


        <Link to="/lisa-toode">
          <button className="nupp"> Lisa toode </button>
        </Link>

        <Link to="/ostukorv">
          <button className="nupp"> ostukorvi </button>
        </Link>

        <Link to="/seaded">
          <button className="nupp"> seaded </button>
        </Link>

           <Routes>
            <Route path='' element= { <Avaleht/> } />
            <Route path='lisa-toode' element= { <LisaToode/> } />
            <Route path='ostukorv' element= { <Ostukorv/> } />
            <Route path='seaded' element= { <Seaded/> } />
            <Route path='*' element= { <MitteLeitud/> } />
           </Routes>



    </div>
  );
}

export default App;
