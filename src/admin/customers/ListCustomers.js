import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from '../layouts/SideDrawer';

export default function ListCustomers() {
  return (
    <div className='row'>

      <div className='col-md-2'>
        <SideDrawer />
      </div>
      <div className='card col-md-10 p-4'>

        <h1 className='text-center mb-5'>List Customers</h1>

        <table class="table table-striped" id="table" data-url="json/data1.json" data-filter-control="true" data-show-search-clear-button="true">

          <thead>

            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Mobile no.</th>
              <th scope="col">Country</th>
              <th scope="col">View </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>sandy4u</td>
              <td>sandy4u1994@gmail.com</td>
              <td>Male</td>
              <td>26<sup>th</sup> Sept, 1994</td>
              <td>+91-9871254608</td>
              <td>India</td>
              <td><Link to="/admin/customer-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>


          </tbody>


        </table>
        <div className='d-flex justify-content-center'>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item"><Link class="page-link" to="#">&lt;&lt; Previous</Link></li>
              <li class="page-item"><Link class="page-link" to="#">1</Link></li>
              <li class="page-item"><Link class="page-link" to="#">2</Link></li>
              <li class="page-item"><Link class="page-link" to="#">3</Link></li>
              <li class="page-item"><Link class="page-link" to="#">4</Link></li>
              <li class="page-item"><Link class="page-link" to="#">5</Link></li>
              <li class="page-item"><Link class="page-link" to="#">Next &gt;&gt;</Link></li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  )
}
