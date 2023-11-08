
import React from 'react';
import './AboutPage.css';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div>
    <Header />
    <div className="about-page">
      <div className="about-content">
        <h2>About Hostel Management Application</h2>
        <p>
          Welcome to our Hostel Management Application! We are dedicated to providing efficient hostel management solutions for students, staff, and hostel administrators. Our application simplifies the process of hostel allocation, room management, and student accommodation.
        </p>
        <p>
          With our user-friendly interface and powerful features, managing hostels has never been easier. Our goal is to streamline hostel operations, enhance security, and improve the overall hostel living experience for students.
        </p>
        <h3>Meet the Team</h3>
        <ul>
          <li>Muwanguzi Derrick K - Founder</li>
          <li>Kakembo Joash - Lead Developer</li>
          <li>Luwaga Mathew Wicky - UX Designer</li>
          <li>Turinawe Andrew - UX Designer</li>
          <li>Tugume Nathan - UX Designer</li>
          {/* Add more team members as needed */}
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default AboutPage;