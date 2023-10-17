import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Article from './pages/Products';
import Intro from './pages/Intro';
import List from './pages/List';
import SingleArticle from './pages/SingleProduct';
import HomePage from './pages/Homepage';

function App() {
  return (
    <>
      <Navbar/>
      <div className='mainContent'>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path='intro' element={<Intro />}/>
          <Route path='article' element={<Article />}/>
          <Route path='list' element={<List />}/>
          <Route path='article/:articleId' element={<SingleArticle />}/>
        </Routes>
      </div>
    </>
)

}

export default App;
