import React from 'react';
import "./about.css";
import Aboutimg from "../components/Assets/aboutimg.jpeg";
import SlickIcon from '../components/HandelSlickIcon/HandelSlickIcon';
import AboutIconSlick from '../components/AboutIconSlick/AboutIconSlick';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesPart from '../components/ServicesPart/ServicesPart';
import PersonCardSlick from '../components/PersonCardSlick/PersonCardSlick';


const About = () => {
  return (
    <div className="aboutcontainer">
      {/* About Section */}
      <div className="  aboutsec1 row">
  {/* Text Section */}
  <div className="col-10 col-md-5 aboutdata">
    <h3>Our Story</h3>
    <p>
      Launched in 2015, Exclusive is South Asia's premier online shopping
      marketplace with an active presence in Bangladesh. Supported by a
      wide range of tailored marketing, data, and service solutions,
      Exclusive has 10,500 sellers and 300 brands, serving 3 million
      customers across the region. Exclusive offers more than 1 million
      products and is growing rapidly, offering a diverse assortment in
      categories ranging from consumer electronics to fashion and home
      goods.
    </p>
  </div>
  {/* Image Section */}
  <div className="col-10 col-md-5 potosec">
    <img src={Aboutimg} alt="About Us" className="aboutimg" />
  </div>
</div>

      {/* Icon Section */}
      <div className="aboutslickicons">
        <AboutIconSlick />
      </div>
      <div className="employees">
         <PersonCardSlick/>
      </div>
      <div className="sec8">
       <ServicesPart/>
     </div>
    </div>
  );
};

export default About;
