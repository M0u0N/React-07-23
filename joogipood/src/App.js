import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import JoogiHaldus from './pages/JoogiHaldus';
import LisaJook from './pages/LisaJook';

function App() {
  return (
    <div>

    <Link to="">
      <button className='nupp'>Avaleht</button>
    </Link>

    <Link to="/lisa">
      <button className='nupp'>Lisa jooke</button>
    </Link>

    <Link to="/halda">
      <button className='nupp'>Halda jooke</button>
    </Link>


    <Routes>
      <Route path='' element={< Avaleht/>} />
      <Route path='/lisa' element={< LisaJook/>} />
      <Route path='/halda' element={< JoogiHaldus/>} />
    </Routes>


    </div>
  );
}

export default App;
