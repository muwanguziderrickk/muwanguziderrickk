import React from "react";
import { Link } from 'react-router-dom';
import './HostelInformation.css';
import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faWifi,
  faShieldAlt,
  faPhone,
  faBed, 
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const HostelInformation = () => {
  return (
    <div>
    <Header />
    <div className="room-details">
      <div className="slideshow-container">
        <img src="../image1.png" alt="Room Image" className="room-image" />
      </div>
      <div className="room-container">
        <h2>Book for a room at our Hostel Bookiing App Today</h2>
        <p>
          Experience Fantastic Benefits and Obtain Better Rates When You Make a
          Direct Booking on Our Official Website
        </p>

        <div>
        <h2> Room Amenities</h2>
        </div>

        <div className="amenities">
        <div className="amenity">
          <FontAwesomeIcon icon={faWifi} />
          <span>Free WiFi</span>
        </div>
        <div className="amenity">
          <FontAwesomeIcon icon={faShieldAlt} />
          <span>Security 24/7</span>
        </div>
        <div className="amenity">
          <FontAwesomeIcon icon={faPhone} />
          <span>Contact: +123-456-7890</span>
        </div>
        <div className="room-type">
          <FontAwesomeIcon icon={faBed} />
          <span>Room Type: Single</span>
        </div>
        <div className="social-media">
          <FontAwesomeIcon icon={faUserFriends} />
          <span>Follow our Website: www.nanahostel.com</span>
        </div>
        <div className="amenity">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>+123-456-7890 </span>
        </div>
        <div className="amenity">
          <FontAwesomeIcon icon={faFacebook} />
          <span>Nana Hostel </span>
        </div>
        <div className="amenity">
          <FontAwesomeIcon icon={faInstagram} />
          <span>Nana Hostel </span>
        </div>
      </div>
      <div className="emptyDiv"></div>
      <div>
        <Link to='/book/:id'>
        <button className="booknowButton">Book Now!</button>
        </Link>
      </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default HostelInformation;