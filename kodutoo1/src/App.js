import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Avaleht from './pages/avaleht';


function App() {
  return (
    <div className="App">

      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/kontakt">
      <button>Kontakt</button>
      </Link>

      <Link to="/meist">
      <button>Meist</button>
      </Link>

      <Link to="/Seaded">
      <button>Seaded</button>
      </Link>
      <Routes>
        <Route path="" element= {<Avaleht />} />
        <Route path="kontakt" element= {<Kontakt />} />
        <Route path="meist" element= {<Meist />} />
        <Route path="seadmed" element= {<Seaded />} />
      </Routes>



    </div>
  );
}

export default App;
