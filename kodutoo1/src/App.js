import './App.css';
import { Link, Route, Routes, } from 'react-router-dom';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Avaleht from './pages/avaleht';
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import {useState} from 'react';
import {useRef} from 'react';
import Books from './pages/books';
import Numbrid from './pages/Numbrid';

function App() {
  const[sisselogitud, muudaSisselogitud] = useState("ei");
  const[sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum( kasutajaNimiRef.current.value + " olete sisselogitud");}
    else{
      muudaSonum("Vale parool");
    }
  }


  return (
    <div className="App">
      <div>{sonum}</div>
      {sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /> <br />
        <label >Parool</label> <br />
        <input ref={paroolRef} type="password"/>  <br />
      </div>}

      {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" &&<button onClick={() => muudaSisselogitud("ei")}>Logi välja</button>}




      {/* ------------------------------------------ */}

      <Link to="/">
        <button className=''>Avaleht</button>
      </Link>

      <Link to="/kontakt">
      <button className=''>Kontakt</button>
      </Link>

      <Link to="/meist">
      <button className=''>Meist</button>
      </Link>

      <Link to="/seaded">
      <button className=''>Seaded</button>
      </Link>

      <Link to="/leht">
      <button className=''>Leht</button>
      </Link>

      <Link to="/loader">
      <button className=''>Loader</button>
      </Link>

      <Link to="/books">
      <button className=''>Books</button>
      </Link>

      <Link to="/numbrid">
      <button className=''>Numbrid</button>
      </Link>

      <Routes>
        <Route path="" element= {<Avaleht />} />
        <Route path="kontakt" element= {<Kontakt />} />
        <Route path="meist" element= {<Meist />} />
        <Route path="seaded" element= {<Seaded />} />
        <Route path="leht" element= {<Leht />} />
        <Route path="loader" element= {<Loader />} />
        <Route path="books" element= {<Books />} />
        <Route path="numbrid" element= {<Numbrid />} />
      </Routes>



    </div>
  );
}

export default App;
