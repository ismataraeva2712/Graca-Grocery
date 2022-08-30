import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
// animation
import "animate.css/animate.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Inventory from './Pages/Home/Inventory';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';
import ManageInventories from './Pages/Home/ManageInventories';
import AddItem from './Pages/Home/AddItem';
import Notfound from './Pages/Shared/Notfound';
import Blog from './Pages/Shared/Blog';
import MyItem from './Pages/Home/MyItem';
AOS.init();
function App() {

  return (
    <div >
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/inventory/:id' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
      <Route path='/manageInventories' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>
      <Route path='/myItem' element={<RequireAuth><MyItem></MyItem></RequireAuth>}></Route>
      <Route path='/addItem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
