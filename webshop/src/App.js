import { Route, Routes} from 'react-router-dom'



import './App.css';
import AddProduct from './pages/admin/AddProduct'
import AdminHome from './pages/admin/AdminHome'
import EditProduct from './pages/admin/EditProduct'
import MaintainCategories from './pages/admin/MaintainCategories'
import MaintainProducts from './pages/admin/MaintainProducts'
import MaintainShops from './pages/admin/MaintainShops'
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import {ContactUs} from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import NotFound from './pages/global/NotFound';
import EditShops from './pages/admin/EditShops';
import NavigationBar from './components/NavigationBar';



function App() {

  return (
    <div className="App">
      <NavigationBar/>
    

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="product/:productId" element={<SingleProduct />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit-product/:productId" element={<EditProduct />} />
        <Route path="admin/maintain-categories" element={<MaintainCategories/>} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route path="admin/edit-shops/:shopName" element={<EditShops />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    
    </div>
  );
}

export default App;


// 1 muuta favicon + nimi
// 2 muuta font
// 3 Firebase üles



//1. homepage sort filter
//2. maintainproducts kustutamine
//3. addproducts lisamine
//4. singleproduct ühe toote vaatamine
//5. homepage ostukorvi lisamine
//5.b cart.js ostukorvi vaatamine, tühjendamine, summa, kustuta, kui tühi ei näita
//6. kodune projekt tõlge ja bootstrap(uudised)
//7. react toastify, uus toode lisades, kustutades, ostukorvi lisades


// 3.4 keel, chatgpt
// addproducts.js id unikaalsuse kontroll



//23.08:
//poed: leaflet
//kontakivorm: emailJS
//ostukorvis salvestamine localstorages


//28.08
//ostukorvis koguse
//ostukorvis kujundus
//pakiautomaadid

// 30.08
//andmebaas

//04.09
//makse - EveryPay
