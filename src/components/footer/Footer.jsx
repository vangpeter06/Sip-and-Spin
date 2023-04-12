import React from 'react';
import './footer.css';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlinePhone} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sip & Spin</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="mailto:vang_peter06@yahoo.com" target="__blank"><AiOutlineMail /></a>
      <a href="tel:503-328-8289" target="__blank"><AiOutlinePhone /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Peter Vang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer