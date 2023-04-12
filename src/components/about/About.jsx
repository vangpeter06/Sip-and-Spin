import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="title">
          <h1>About Sip & Spin</h1>
        </div>
        <div className="about_me">
          <p>
            Here at Sip & Spin it is a family own bar. It has live music with
            great hot food and snack. We also have wide variety selection of
            beers and liquor. We also have 6 slots machine for those who wants
            to gamble. If you just want to come in for a kick back and relax
            playing pool with some friends or play some video games we got that
            here.
          </p>
          <p>
            We also offer private events contact us for a quote and reserve your
            spots. Limited spots so call and reserve.
          </p>
          <h3>Click Here To Contact</h3>
          <a href="tel:503-328-8289" CALL className="btn">
            503-328-8289
          </a>
          <a href="#contact" className="btn btn-primary">
            Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
