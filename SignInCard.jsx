
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInCard.css';

const SignInCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add logic for handling sign-in (e.g., API call, authentication)
    console.log('Sign in clicked. Email:', email, 'Password:', password);
    // Add your authentication logic here
  };

  return (
    <div className="signin-card">
        <img src="../mak.png" alt="" className="makImage" />
      <h2>Sign into Hostel Management App</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label className="username">Account username <span className="star">*</span></label>
          <input className="SignInInput" type="text" pattern="[0-9]{10}" placeholder="Student number" required />
        </div>
        <div className="form-group">
        <label className="password">Account password <span className="star">*</span></label>
          <input className="SignInInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
        </div>
        <button className="signInButton" type="submit">Sign In</button>
      </form>
      <div className="forgot-signup">
        <br />
        <Link to="#">Forgot Password?</Link>
      </div>
      <div>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
      <br />
      <hr />
      <div> <Link to="/" className="signInFooter">Terms & Conditions</Link> <span> | </span> <Link to="/ownersignup" className="signInFooter">Privacy Policy</Link> </div>
    </div>
  );
};

export default SignInCard;
