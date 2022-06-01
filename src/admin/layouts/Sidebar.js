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
        <div class="accordion" id="accordionExample">
          <div class="sidebar-accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#dashboard" aria-expanded="true" aria-controls="dashboard">
                <h5 className='mt-2' id="headingOne">Dashboard</h5>

              </button>

            </h2>
            <div id="dashboard" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="sidebar-accordion-body">
                <ul className="list-unstyled components">

                  <li className="active navlink">
                    <Link exact to="/admin/dashboard">Home </Link>

                  </li>
                  <li className="navlink">
                    <Link to="/admin/analytics">Analytics </Link>

                  </li>
                  <li className="navlink">
                    <Link to="/admin/all-countries">Countries</Link>

                  </li>
                  <li className="navlink">
                    <Link to="/admin/customers">Customers</Link>

                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="sidebar-accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="sidebar-accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#banner" aria-controls="banner">
                <h5 className='mt-2' id="headingOne">Banner</h5>
              </button>

            </h2>
            <div id="banner" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="sidebar-accordion-body">
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/banners">All Banners</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/grid-layout">Grid Layout</Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="sidebar-accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#news_events_blogs" aria-expanded="false" aria-controls="news_events_blogs">
                <h5 className='mt-2' id="headingOne">News Events & Blogs</h5>

              </button>

            </h2>
            <div id="news_events_blogs" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="sidebar-accordion-body">
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/blogs">Blogs</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/articles">Articles</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/news">News & Events</Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="sidebar-accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#products" aria-expanded="false" aria-controls="products">
                <h5 className='mt-2' id="headingOne">Products</h5>

              </button>

            </h2>
            <div id="products" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="sidebar-accordion-body">
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/products">All Products</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/product-categories">Product Categories</Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="sidebar-accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#warranty" aria-expanded="false" aria-controls="warranty">
                <h5 className='mt-2' id="headingOne">Warranty Details</h5>

              </button>

            </h2>
            <div id="warranty" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="sidebar-accordion-body">
                <ul className="list-unstyled components">

                  <li className='navlink'>
                    <Link to="/admin/extended-warranty">Extended Warranty</Link>
                  </li>
                  <li className='navlink'>
                    <Link to="/admin/warranty-registered">Warranty Registered</Link>
                  </li>

                  <li className='navlink'>
                    <Link to="/admin/invoices">All Invoices</Link>
                  </li>
                  <li className='navlink'>
                    <Link to="/admin/damage-protection">Accidental Damage Protection </Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="sidebar-accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#services" aria-expanded="false" aria-controls="services">
                <h5 className='mt-2' id="headingOne">Services</h5>

              </button>

            </h2>
            <div id="services" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="sidebar-accordion-body">
                <ul className="list-unstyled components">

                  <li className='navlink'>
                    <Link to="/admin/all-shops">Where to Buy</Link>
                  </li>
                  <li className='navlink'>
                    <Link to="/admin/service-center">Service Center</Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="sidebar-accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="sidebar-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#settings" aria-expanded="false" aria-controls="settings">
                <h5 className='mt-2' id="headingOne">Settings</h5>

              </button>

            </h2>
            <div id="settings" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="sidebar-accordion-body">
                <ul className="list-unstyled components">

                  <li className="navlink">
                    <Link to="/admin/settings">Admin Settings </Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/change-password">Change Password </Link>
                  </li>
                  <li className="navlink">
                    <Link to="/admin/other-pages">Other Pages </Link>
                  </li>

                  <li className="navlink">
                    <Link to="/admin/logout">Logout </Link>
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
