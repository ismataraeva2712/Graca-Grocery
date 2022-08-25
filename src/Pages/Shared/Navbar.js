import React from 'react';
import { Link } from 'react-router-dom';
import { GiFruitBowl } from 'react-icons/gi';
import { GiFruiting} from 'react-icons/gi';

const Navbar = () => {
     const menuItem=<>
        <li><Link to='/'>Home</Link></li>
       
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </>
    return (
        <div>
            <div class="navbar bg-primary px-12 mx-auto text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">   < GiFruiting size={30}  /> Graca-Grocery </a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;