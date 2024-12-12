import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import QR from "../Assets/QR.jpg";
import GooleApp from "../Assets/googleapp.png";
import Storeapp from "../Assets/appstore.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-6 col-md-3 foot">
          <h5>EXCLUSIVE</h5>
          <h6>Subscribe</h6>
          <p>Get 10% off your first order</p>
          <div className="subscribe">
            <input
              type="text"
              placeholder="Enter your Email"
              className="email-input"
            />
            <FontAwesomeIcon icon={faPaperPlane} className="email-icon" />
          </div>
        </div>
        <div className="col-0 col-md-2 foot foothide">
          <h5>SUPPORT</h5>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusiveggmall.com</p>
          <p>+88015-88588-9999</p>
        </div>
        <div className="col-0 col-md-2 foot foothide">
          <h5>ACCOUNT</h5>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="col-0 col-md-2 foot foothide">
          <h5>Quick Link</h5>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>Contact</p>
          <p>FAQ</p>
        </div>
        <div className="col-6 col-md-3 foot">
          <h5>Download App</h5>
          <p>Save $3 for app users only</p>
          <div className="row footcontaneeer">
            <div className=" col-6 qrdiv">
              <img src={QR} alt="QR Code for app download" className="qr-img" />
            </div>
            <div className="col col-6  align-items-center twosimgs">
              <div className="google">
                <img src={GooleApp} alt="Google App Store" className="app-img" />
              </div>
              <div className="storeapp">
                <img src={Storeapp} alt="Apple App Store" className="app-img apimg2" />
              </div>
            </div>
          </div>
          <div className="footicons">
          <FontAwesomeIcon icon={faFacebook} className="footiconnn1" />
          <FontAwesomeIcon icon={faTwitterSquare} className="footicon" />
          <FontAwesomeIcon icon={faInstagram} className="footicon" />
          <FontAwesomeIcon icon={faLinkedin} className="footicon" />
          </div>
        </div>
      </div>
      <hr />
      <p className="pcopy">Copyright Rimel 2022. All rights reserved.</p>
    </div>
  );
};

export default Footer;



