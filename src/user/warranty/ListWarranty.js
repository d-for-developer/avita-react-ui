import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar';

export default function ListWarranty() {
  return (
    <div className='row'>

    <div className='col-md-2'>
      <Sidebar />
    </div>
    <div className='card col-md-10 p-4'>

      <h1 className='text-center mb-5'>List Warranty</h1>
      <div className='d-flex justify-content-end'>
      <a className='btn btn-secondary btn-sm p-2 m-2' href='/user/register-warranty'>Add Warranty</a>
      </div>
      <table class="table table-striped" id="table" data-url="json/data1.json" data-filter-control="true" data-show-search-clear-button="true">

        <thead>

          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Product Title</th>
            <th scope="col">SKU / Part No.</th>
            <th scope="col">Serial No.</th>
            <th scope="col">Register On</th>
            <th scope="col">Warranty Status</th>
            <th scope="col">View More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
            <td>NS14ABC1234</td>
            <td>3698521470</td>
            <td>24<sup>th</sup> March 2022</td>
            <td className='text-center'>Active</td>
            <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
          <th scope="row">10</th>
          <td>AVITA LIBER V14 NS14A8INF561-CS 14" (35.56cms) <br /><small>(Core i5-10210U/8GB/512GB SSD/FHD Display/<br />Windows 10 Home/Intel UHD Graphics 620), Active</small></td>
          <td>NS14ABC1234</td>
          <td>3698521470</td>
          <td>24<sup>th</sup> March 2022</td>
          <td className='text-center'>Active</td>
          <td className='text-center'><Link to="/user/warranty-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
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
