import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Welcome To</h1>
        <h1>Sip and Spin</h1>
        <h2>Bar/Party/Cold Beer/Slots Machine/Food</h2>
        <CTA />
      </div>

      <div className="sipNSpin">
        <img src={Logo} alt="Sip and Spin" />
        <br />
        <div className="hours">
          <h2>Business Hours</h2>
          <p>Mon: 11AM - 11PM</p>
          <p>Tues: 11AM - 11PM</p>
          <p>Wed: 11AM - 11PM</p>
          <p>Thurs: 11AM - 11PM</p>
          <p>Fri: 11AM - 12PM</p>
          <p>Sat: 11AM - 12PM</p>
          <p>Sun: 11AM - 11PM</p>
        </div>
        <br />
        <div className="map">
          <a href="https://www.google.com/maps/dir//Sip+%26+Spin/@45.4923225,-122.5582524,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54959f00f8b4e36b:0x8db0f1e6e1fa9bb3!2m2!1d-122.4881831!2d45.492412">
            <h2>17102 Southeast Powell Boulevard</h2>
            <h3>Portland, OR 97236</h3>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
