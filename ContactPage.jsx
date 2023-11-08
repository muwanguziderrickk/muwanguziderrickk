
import React from 'react';
import './ContactPage.css';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div>
    <Header />
    <div className="contact-page">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, please feel free to reach out to our support team. We are here to assist you!</p>
        <div className="contact-details">
          <div className="contact-info">
            <h3>Photo</h3>
            <div><img src="../logo1.png"/></div>
            <div><img src="../logo1.png"/></div>
            <div><img src="../logo1.png"/></div>
            <div><img src="../logo1.png"/></div>
            <div><img src="../logo1.png"/></div>
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>derrickmk421@gmail.com</p>
            <p><br/>support@hostelmanagementapp.com</p>
            <p>mathewwickey@gmail.com</p>
            <p>adrewturinawe@hotmail.com</p>
            <p>nathan@hostelmanagementapp.com</p>
          </div>
          <div className="contact-info">
            <h3>Tel No.</h3>
            <p>+1 123 456 7890</p>
            <p><br/>+1 123 456 7891</p>
            <p>+1 123 456 7892</p>
            <p>+1 123 456 7893</p>
            <p>+1 123 456 7893</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactPage;
