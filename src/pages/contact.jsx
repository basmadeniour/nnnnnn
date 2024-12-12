import React from 'react';
import './Contact.css'; // Add your custom styles here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer/Footer"

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="row">
        {/* Left Section - Contact Information */}
        <div className="col-md-3 contact-info">
          <div className="info-box">
            <div className="iconshade">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            </div>
            <h5>Call To Us</h5>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <hr />
          <div className="info-box">
          <div className="iconshade">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <h5>Write To Us</h5>
            <p>
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-md-5 contact-form">
          <form>
                  <div className='row'>
            <div className="form-group col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name *"
                required
              />
            </div>
            <div className="form-group col-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email *"
                required
              />
            </div>
            <div className="form-group col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Phone *"
                required
              />
            </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Your Message"
                rows="7"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            
          </form>
        </div>
      </div>
      {/* <div className="footcontact">
      <Footer/>
      </div> */}
     
    </div>
  );
};

export default Contact;

