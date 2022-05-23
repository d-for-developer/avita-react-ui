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
            <Link exact to="/admin">Home </Link>
          </li>
          <li className="navlink mb-2">
          <Link to="/admin/analytics">Analytics </Link>
        </li>
          <h5 className='mt-4'>Products</h5>
          <hr />
          <li className="navlink mb-2">
            <Link to="/admin/products">All Products</Link>
          </li>
          <li className="navlink mb-2">
          <Link to="/admin/product-categories">Product Categories</Link>
        </li>

          <h5 className='mt-4'>Warranty Details</h5>
          <hr />
          <li className='navlink mb-2'>
            <Link to="/admin/customers">All Customers</Link>
          </li>
          <li className='navlink mb-2'>
            <Link to="/admin/warranty-registered">Warranty Registered</Link>
          </li>
          <li className='navlink'>
            <Link to="/admin/invoices">All Invoices</Link>
          </li>

          <h5 className='mt-4'>Settings</h5>
          <hr />
          <li className="navlink mb-2">
          <Link to="/admin/settings">Settings </Link>
        </li>
          <li className="navlink mb-2">
            <Link to="/admin/logout">Logout </Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}
