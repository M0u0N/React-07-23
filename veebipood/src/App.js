// import logo from './logo.svg'; edit --- toggle line comment 
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import MitteLeitud from './pages/MitteLeitud';
import { useState } from 'react';
import Hinnad from './pages/Hinnad';
import Poed from './pages/Poed';
import Tooted from './pages/Tooted';
import HaldaTooted from './pages/HaldaTooted';
import MuudaToode from './pages/MuudaToode';
import YksToode from './pages/YksToode';

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
          <button className="nupp"> Ostukorvi </button>
        </Link>

        <Link to="/seaded">
          <button className="nupp"> Seaded </button>
        </Link>

        <Link to="/hinnad">
          <button className="nupp"> Hinnad </button>
        </Link>

        <Link to="/poed">
          <button className="nupp"> Poed </button>
        </Link>

        <Link to="/tooted">
          <button className="nupp"> Tooted </button>
        </Link>

        <Link to="/halda">
          <button className="nupp"> Halda </button>
        </Link>

           <Routes>
            <Route path='' element= { <Avaleht/> } />
            <Route path='lisa-toode' element= { <LisaToode/> } />
            <Route path='ostukorv' element= { <Ostukorv/> } />
            <Route path='seaded' element= { <Seaded/> } />
            <Route path='hinnad' element= { <Hinnad/> } />
            <Route path='poed' element= { <Poed/> } />
            <Route path='tooted' element= { <Tooted/> } />
            <Route path='halda' element= { <HaldaTooted/> } />
            <Route path='muuda' element= { <MuudaToode/> } />
            <Route path='toode' element= { <YksToode/> } />
            <Route path='*' element= { <MitteLeitud/> } />
           </Routes>



    </div>
  );
}

export default App;
