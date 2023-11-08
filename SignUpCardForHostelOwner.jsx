
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpCardForHostelOwner.css';

const SignUpCardForHostelOwner = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add logic for handling sign-up (e.g., API call, user registration)
    console.log('Sign up clicked. Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    // Add your sign-up logic here
  };

  return (
    <div className="signup-card">
      <img src="../mak.png" alt="" className="makImage" />
      <h2>Hostel Registration</h2>
      <form onSubmit={handleSignUp}>
        <div className="ownerselectoptions">
          <label htmlFor=""><h3>Owner Information</h3></label>
        </div>
        <div className="ownername">
            <div className="form-group">
              <input type="textfield" placeholder="first name"  required />
            </div>        
            <div className="form-group">
              <input type="textfield" placeholder="last name" required />
            </div>
        </div>
        <div className="form-group">
          <input type="text" placeholder="phone number" pattern="[0-9]{10}" required />
        </div>
        <div className="form-group">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
        </div>
        <div className="ownerselectoptions"><b><label htmlFor="">Gender</label></b></div>
        <div className="ownerselectoptions">
          <div> &nbsp;&nbsp;
            <label htmlFor=""><input type="radio" name="gender" />Male</label>
            <label htmlFor=""><input type="radio" name="gender" />Female</label>
          </div>
        </div>
          <br />
          <div className="ownernationality">
              <div className="form-group">
              <div className="form-group">
              <select name="" id="" required>
                <option value="" disabled selected>Nationality</option>
                <option value="">Kenya</option>
                <option value="">Uganda</option>
                <option value="">Tanzania</option>
              </select>
            </div>
              </div>
              <div className="form-group">
                {/* empty div left intentionally */}
              </div>
          </div>
        <Link to="/hostelsignup">
            <button className="hostelNextButton" type="submit">Next</button>
        </Link>
      </form>
      <br />
      <hr />
      <div> <Link to="/" className="signUpFooter">Terms & Conditions</Link> <span> | </span> <Link to="/ownersignup" className="signUpFooter">Privacy Policy</Link> </div>
    </div>
  );
};

export default SignUpCardForHostelOwner;