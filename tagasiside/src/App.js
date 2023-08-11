import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad'
import Uusleht from './pages/Uusleht';
import YksiksTagasisideAndja from './pages/YksiksTagasisideAndja';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div className="App">
      







      <Link to="/">
        <button className="nupp"> Avaleht </button>
        </Link>

      <Link to="/tagasiside">
        <button className="nupp"> Tagasiside </button>
      </Link>

      <Link to="/tagasiside-andjad">
        <button className="nupp"> Tagasiside andjad </button>
      </Link>

      <Link to="/uusleht">
        <button className="nupp"> Uus leht </button>
      </Link>

      <Link to="/tegevused">
        <button className="nupp"> Vaata mida tegema pead </button>
      </Link>

      <Link to="/kasutajad">
        <button className="nupp"> Kasutajad </button>
      </Link>


      <Routes>
        <Route path='' element ={<Avaleht/>} />
        <Route path='/tagasiside' element ={<Tagasiside/>} />
        <Route path='/tagasiside-andjad' element ={<TagasisideAndjad/>} />
        <Route path='/uusleht' element ={<Uusleht/>} />
        <Route path='/yks-andja/:index' element ={<YksiksTagasisideAndja/>} />
        <Route path='/tegevused' element= {<Tegevused/>} />
        <Route path='/kasutajad' element= {<Kasutajad/>} />
      </Routes>
    </div>
  );
}

export default App;
