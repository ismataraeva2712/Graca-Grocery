import React from 'react';
import { GiFruitBowl } from 'react-icons/gi';
import { GiFruiting} from 'react-icons/gi';
const Footer = () => {
    return (
        <div >
            <footer class="footer pt-8 p-10 bg-black text-neutral-content">
            <div>
    
            <   GiFruiting size={30}  /> <p>Graca-Grocery<br></br>Providing reliable since 2002</p>
  </div> 
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
</footer>
<div className='bg-black text-center text-white'><small>Copyright © reserves by Graca-Grocery || 2022</small></div>
        </div>
    );
};

export default Footer;