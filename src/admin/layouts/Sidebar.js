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
          <h5 className='mt-4'>Banner</h5>
          <hr />
          <li className="navlink">
            <Link to="/admin/banners">All Banners</Link>
          </li>
          <li className="navlink">
            <Link to="/admin/banner-grid">Grid Layout</Link>
          </li>
          <h5 className='mt-4'>News Events & Blogs</h5>
          <hr />
          <li className="navlink">
            <Link to="/admin/blogs">Blogs</Link>
          </li>
          <li className="navlink">
            <Link to="/admin/articles">Articles</Link>
          </li>
          <li className="navlink">
            <Link to="/admin/news">News & Events</Link>
          </li>
          <h5 className='mt-4'>Products</h5>
          <hr />
          <li className="navlink">
            <Link to="/admin/products">All Products</Link>
          </li>
          <li className="navlink">
            <Link to="/admin/product-categories">Product Categories</Link>
          </li>

          <h5 className='mt-4'>Warranty Details</h5>
          <hr />
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
            <Link to="/admin/adp-plan">Accidental Damage Protection </Link>
          </li>

          <h5 className='mt-4'>Services</h5>
          <hr />
          <li className='navlink'>
            <Link to="/admin/all-shops">Where to Buy</Link>
          </li>
          <li className='navlink'>
            <Link to="/admin/service-center">Service Center</Link>
          </li>



          <h5 className='mt-4'>Settings</h5>
          <hr />
          <li className="navlink">
            <Link to="/admin/settings">Settings </Link>
          </li>
          <li className="navlink">
            <Link to="/admin/logout">Logout </Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}
