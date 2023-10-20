import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Article from './pages/Products';
import {Ordering} from './pages/Ordering';
import List from './pages/List';
import SingleProduct from './pages/SingleProduct';
import HomePage from './pages/Homepage';

function App() {
  return (
    <>
      <Navbar/>
      <div className='mainContent'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='ordering' element={<Ordering />}/>
          <Route path='article' element={<Article />}/>
          <Route path='list' element={<List />}/>
          <Route path='product/:productId' element={<SingleProduct />}/>
        </Routes>
      </div>
    </>
)

}

export default App;
