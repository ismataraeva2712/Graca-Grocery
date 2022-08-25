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
AOS.init();
function App() {

  return (
    <div >
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
