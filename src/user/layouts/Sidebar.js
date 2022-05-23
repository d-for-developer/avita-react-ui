import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../Logo';


export default function Sidebar() {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <Logo />
                </div>

                <ul className="list-unstyled components">
                    <h5 className='mt-4'>Dashboard</h5>
                    <hr />
                    <li className="active navlink mb-2">
                        <Link to="/">Home </Link>
                    </li>
                    <h5 className='mt-4'>My Account</h5>
                    <hr />
                    <li className="active navlink mb-2">
                        <Link to="/profile">Profile </Link>
                    </li>
                    <li className='navlink mb-2'>
                        <Link to="/change-password">Change Password</Link>
                    </li>
                    <h5 className='mt-4'>Support</h5>
                    <hr />
                    <li className='navlink mb-2'>
                        <Link to="/products">My Product</Link>
                    </li>
                    <li className='navlink mb-2'>
                        <Link to="/warranty-registration">Warranty Registration</Link>
                    </li>
                    <li className='navlink'>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>

                    <h5 className='mt-4'>About</h5>
                    <hr />
                    <li className="active navlink mb-2">
                        <Link to="/about">AVITA</Link>
                    </li>
                    <li className='navlink mb-2'>
                        <Link to="/faq">FAQ's</Link>
                    </li>
                    <li className="active navlink mb-2">
                        <Link to="/logout">Logout </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
