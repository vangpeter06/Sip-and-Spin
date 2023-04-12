import React from 'react';
import './nav.css';
import {GoHome} from 'react-icons/go';
import {CiBeerMugFull} from 'react-icons/ci';
import {BiFoodMenu} from 'react-icons/bi';
import {MdOutlineRateReview} from 'react-icons/md';
import {GrGallery} from 'react-icons/gr';
import {IoIosContact} from 'react-icons/io';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiBeerMugFull /></a>
      <a href="#reviews" onClick={() => setActiveNav('#review')} className={activeNav === '#review' ? 'active' : ''}><MdOutlineRateReview /></a>
      <a href="#menu" onClick={() => setActiveNav('#menu')} className={activeNav === '#menu' ? 'active' : ''}><BiFoodMenu /></a>
      <a href="#gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''}><GrGallery /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoIosContact /></a>
    </nav>
  )
}

export default Nav
