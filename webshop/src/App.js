import './App.css';
import {Route, Routes} from 'react-router-dom'
import AddProduct from './pages/admin/AddProduct'
import AdminHome from './pages/admin/AdminHome'
import EditProduct from './pages/admin/EditProduct'
import MaintainCategories from './pages/admin/MaintainCategories'
import MaintainProducts from './pages/admin/MaintainProducts'
import MaintainShops from './pages/admin/MaintainShops'
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <div className="App">
    

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="product" element={<SingleProduct />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit-product" element={<EditProduct />} />
        <Route path="admin/maintain-categories" element={<MaintainCategories/>} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

    
    </div>
  );
}

export default App;
