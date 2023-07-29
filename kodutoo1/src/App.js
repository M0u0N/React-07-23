import './App.css';
import { Link, Route, Routes, } from 'react-router-dom';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Avaleht from './pages/avaleht';
import {useState} from 'react';
import {useRef} from 'react';

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
