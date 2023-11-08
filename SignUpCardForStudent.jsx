
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpCardForStudent.css';

const SignUpCardForStudent = () => {
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
      <h2>Create an Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="studentname">
            <div className="form-group">
              <input type="textfield" placeholder="first name"  required />
            </div>        
            <div className="form-group">
              <input type="textfield" placeholder="last name" required />
            </div>
        </div>
        <div className="form-group">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="student number" pattern="[0-9]{10}" required />
        </div>
        <div className="studentselectoptions">
            <div className="form-group">
              <select name="" id="" required>
                <option value="" disabled selected>Gender</option>
                <option value="">male</option>
                <option value="">female</option>
              </select>
            </div>        
            <div className="form-group">
              <select name="" id="" required>
                <option value="" disabled selected>Nationality</option>
                <option value="">Kenya</option>
                <option value="">Uganda</option>
                <option value="">Tanzania</option>
              </select>
            </div>
          </div>
          <div className="studentpassword">
              <div className="form-group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="set password" required />
              </div>
              <div className="form-group">
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" required />
              </div>
          </div>
        <button className="signUpButton" type="submit">Register</button>
      </form>
      <div className="forgot-signin">
        <br />
        Already have an account?<Link to="/book/:id"> Sign In</Link>
      </div>
      <br />
      <hr />
      <div> <Link to="/" className="signUpFooter">Terms & Conditions</Link> <span> | </span> <Link to="/ownersignup" className="signUpFooter">Privacy Policy</Link> </div>
    </div>
  );
};

export default SignUpCardForStudent;