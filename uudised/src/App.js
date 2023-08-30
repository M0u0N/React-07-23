import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontaktid from './pages/Kontaktid';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudised from './pages/HaldaUudised';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';



function App() {
  return (
    <div>

        <Link to="">
          <button className="nupp"> Avaleht </button>
        </Link>

        <Link to="uudised">
          <button className="nupp"> Uudised </button>
        </Link>

        <Link to="kontakt">
          <button className="nupp"> Kontaktid </button>
        </Link>

        <Link to="meist">
          <button className="nupp"> Meist </button>
        </Link>

        <Link to="lisa_uudis">
          <button className="nupp"> Lisa uudis </button>
        </Link>

        <Link to="halda_uudised">
          <button className="nupp"> Halda uudiseid </button>
        </Link>

      <Routes>
      <Route path='' element= { <Avaleht /> } />
      <Route path='uudised' element= { <Uudised />  } />
      <Route path='kontakt' element= { <Kontaktid />  } />
      <Route path='meist' element= { <Meist /> }  />
      <Route path='lisa_uudis' element= { <LisaUudis /> }  />
      <Route path='halda_uudised' element= { <HaldaUudised /> }  />
      <Route path='uudis/:index' element= { <YksUudis /> }  />
      <Route path='muuda/:index' element= { <MuudaUudis /> }  />
      <Route path='kasutaja-postitus/:kasutajaId' element= { <KasutajaPostitus /> }  />
      <Route path='vaata-postitus/:postituseId' element= { <YksPostitus /> }  />
      </Routes>
    </div>
  );
}

export default App;
