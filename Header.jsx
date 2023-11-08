
import React from 'react';
import '../App.css';

export class Header extends React.Component{
    render() {
        return (
        <header className="header">
            <div className="logo">
                <img src="./logo1.png" alt="Logo" />
            </div>
            <div className="mak"><label>MAKERERE HOSTELS</label></div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        );
    }
}
export default Header;