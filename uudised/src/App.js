import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontaktid from './pages/Kontaktid';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';



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

      <Routes>
      <Route path='' element= { <Avaleht /> } />
      <Route path='uudised' element= { <Uudised />  } />
      <Route path='kontakt' element= { <Kontaktid />  } />
      <Route path='meist' element= { <Meist /> }  />
      </Routes>
    </div>
  );
}

export default App;
