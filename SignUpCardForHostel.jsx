
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpCardForHostel.css';

const SignUpCardForHostel = () => {
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
          <label htmlFor=""><h3>Hostel Information</h3></label>
        </div>
        <div className="hostelname">
            <div className="form-group">
              <input type="textfield" placeholder="hostel name"  required />
            </div>        
        </div>
        <div className="hostelLocation">
              <div className="form-group">
              <div className="form-group">
              <select name="" id="" required>
                <option value="" disabled selected>Location</option>
                <option value="">Kikoni</option>
                <option value="">Kikumikikumi</option>
                <option value="">Wandegeya</option>
              </select>
            </div>
            </div>
              <div className="form-group">
                {/* empty div left intentionally */}
              </div>
          </div>
        <div className="ownerselectoptions"><b><label htmlFor="">Upload Certificate of Operation<span className="star">*</span></label></b></div><br />
        <div className="form-group">
          <input type="file" required />
        </div>
        <div className="studentpassword">
              <div className="form-group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="set password" required />
              </div>
              <div className="form-group">
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" required />
              </div>
        </div>
          <br />
        <div className="SignUpCardForHostelButtons">
        <Link to="/ownersignup"><button className="hostelPrevButton" type="submit">Previous</button></Link>
        <button className="hostelRegisterButton" type="submit">Register</button>
        </div>
      </form>
      <br />
      <hr />
      <div> <Link to="/" className="signUpFooter">Terms & Conditions</Link> <span> | </span> <Link to="/ownersignup" className="signUpFooter">Privacy Policy</Link> </div>
    </div>
  );
};

export default SignUpCardForHostel;