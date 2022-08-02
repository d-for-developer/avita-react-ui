import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../Logo';

export default function Sidebar() {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="sidebar-accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#dashboard" aria-expanded="true" aria-controls="dashboard">
                                <h5 className='mt-2' id="headingOne">Dashboard</h5>

                            </button>

                        </h2>
                        <div id="dashboard" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="sidebar-accordion-body">
                                <ul className="list-unstyled components">

                                    <li className="active navlink">
                                        <Link exact to="/user/dashboard">Home </Link>

                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="sidebar-accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="sidebar-accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#banner" aria-controls="banner">
                                <h5 className='mt-2' id="headingOne">My Account</h5>
                            </button>

                        </h2>
                        <div id="banner" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="sidebar-accordion-body">
                                <ul className="list-unstyled components">

                                    <li className="navlink">
                                        <Link to="/user/profile">Profile</Link>
                                    </li>
                                    <li className="navlink">
                                        <Link to="/user/change-password">Change Password</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="sidebar-accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#news_events_blogs" aria-expanded="false" aria-controls="news_events_blogs">
                                <h5 className='mt-2' id="headingOne">Support</h5>

                            </button>

                        </h2>
                        <div id="news_events_blogs" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="sidebar-accordion-body">
                                <ul className="list-unstyled components">

                                    <li className="navlink">
                                        <Link to="/user/products">My Product</Link>
                                    </li>
                                    <li className="navlink">
                                        <Link to="/user/warranty-registration">Warranty Registration</Link>
                                    </li>
                                    <li className="navlink">
                                        <Link to="/user/contact-us">Contact Us</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="sidebar-accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#products" aria-expanded="false" aria-controls="products">
                                <h5 className='mt-2' id="headingOne">About</h5>

                            </button>

                        </h2>
                        <div id="products" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="sidebar-accordion-body">
                                <ul className="list-unstyled components">

                                    <li className="navlink">
                                        <Link to="/user/about">AVITA</Link>
                                    </li>
                                    <li className="navlink">
                                        <Link to="/user/faq">FAQ's</Link>
                                    </li>
                                    <li className="navlink">
                                        <Link to="/user/logout">Logout</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>


                </div>
            </nav>

        </div>


    )
}
