import './App.css';
import { Link, } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Link to="nupp">
        <button className='nupp'>nupp</button>
      </Link>

      <Link to="text">
        <text className='text'> sinine tekst muudab suurust </text>
      </Link>

      <Link to="tekst">
        <text className='tekst'>roheline tekst</text>
      </Link>

      <Link to="pilt">
        <img className="pilt" src="https://media.wired.com/photos/5a5547032b3a7778f5ca06cb/1:1/w_1200,h_1200,c_limit/Doggo-FeatureArt2-104685145.jpg" alt="" />
      </Link>
    </div>
  );
}

export default App;
