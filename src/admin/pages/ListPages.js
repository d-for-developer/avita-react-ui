import React from 'react'
import { Link } from 'react-router-dom';
import SideDrawer from '../layouts/SideDrawer';


export default function ListPages() {
  return (
    <div className='row'>

      <div className='col-md-2'>
        <SideDrawer />
      </div>
      <div className='card col-md-10 p-4'>

        <h1 className='text-center mb-5'>List Pages</h1>
        <div className='d-flex justify-content-end'>
          <a className='btn btn-secondary btn-sm p-2 m-2' href='/admin/add-pages'>Add Pages</a>
        </div>
        <table class="table table-striped" id="table" data-url="json/data1.json" data-filter-control="true" data-show-search-clear-button="true">

          <thead>

            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Page Name</th>
              <th scope="col">Slug</th>
              <th scope="col">Country</th>
              <th scope="col">Type</th>
              <th scope="col">Created On</th>
              <th scope="col">Updated On</th>
              <th scope="col">View </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Repair Terms and Service</td>
              <td>repair-t&c</td>
              <td>India</td>
              <td>Terms and Service</td>
              <td>1<sup>st</sup> May, 2022</td>
              <td>1<sup>th</sup> June, 2022</td>
              <td><Link to="/admin/page-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
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
