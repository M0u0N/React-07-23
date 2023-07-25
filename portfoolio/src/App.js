import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Facebook from './pages/Facebook';
import Instagram from './pages/Instagram';
import Twitter from './pages/Twitter';


function App() {
  return (
    <div>
      <img className='banner' src='https://www.womensaid.org.uk/wp-content/uploads/2021/12/WA-Website-Banner.jpg' alt='' />
      <div className='kast'></div>

      <div className='muutlikud'>
        <Link className='main-link' to="facebook">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
        </Link>
        <Link className='main-link' to="instagram">
        <img src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" alt="" />
        </Link>
        <Link className='main-link' to="twitter">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" />
        </Link>
      </div>

    <Routes>
      <Route path='facebook' element={<Facebook/> } />
      <Route path='instagram' element={<Instagram/> } /> 
      <Route path='twitter' element={<Twitter/> } /> 
    </Routes>
    </div>
  );
}

export default App;
