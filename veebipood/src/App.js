// import logo from './logo.svg'; edit --- toggle line comment 
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
        <Link to="/">
          <img className="pilt" src="https://media.wired.com/photos/5a5547032b3a7778f5ca06cb/1:1/w_1200,h_1200,c_limit/Doggo-FeatureArt2-104685145.jpg" alt="" />
        </Link>

        <Link to="/lisa-toode">
          <button className="nupp"> Lisa toode </button>
        </Link>

        <Link to="/ostukorv">
          <button className="nupp"> ostukorvi </button>
        </Link>

           <Routes>
            <Route path='' element= { <Avaleht/> } />
            <Route path='lisa-toode' element= { <LisaToode/> } />
            <Route path='ostukorv' element= { <Ostukorv/> } />
           </Routes>



    </div>
  );
}

export default App;
