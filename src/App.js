
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import  {BrowserRouter,Routes,Route}  from 'react-router-dom';
import  Home  from './Pages/Home';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import  LoginSignup  from './Pages/LoginSignup';
import Cart from './Pages/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/j-beauty' element={<ShopCategory category="j-beauty"/>}/>
          <Route path='/k-beauty' element={<ShopCategory category="k-beauty"/>}/>
          <Route path='/hot deals' element={<ShopCategory category="hot deals"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
