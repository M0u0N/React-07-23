import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import {Ordering} from './pages/Ordering';
import SingleProduct from './pages/SingleProduct';
import HomePage from './pages/Homepage';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <>
      <Navbar/>
      <div className='mainContent'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='ordering' element={<Ordering />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='order-details' element={<OrderDetails/>} />
          <Route path='product/:productId' element={<SingleProduct />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
)

}

export default App;
