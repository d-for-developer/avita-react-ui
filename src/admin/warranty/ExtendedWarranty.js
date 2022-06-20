import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from '../layouts/SideDrawer';


export default function ExtendedWarranty() {
  return (
    <div className='row'>
    <div className='col-md-2'>
      <SideDrawer />
    </div>
    <div className='card col-md-10 p-4'>
      <h1 className='text-center mb-5'>Extended Warranty</h1>
      <table class="table table-striped" id="table" data-url="json/data1.json" data-filter-control="true" data-show-search-clear-button="true">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Product Detail</th>
            <th scope="col">Detail</th>
            <th scope="col">Registered On</th>
            <th scope="col">Expiry On</th>
            <th scope="col">Status</th>
            <th scope="col">View More</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>

          <tr>
            <th scope="row">8</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>

          <tr>
            <th scope="row">9</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
          </tr>

          <tr>
            <th scope="row">10</th>
            <td>Sandeep Rawat</td>
            <td>AVITA Liber v14 <br />P/N: NS14ABC1234, <br />S/N: 1236547890</td>
            <td>18 Months Warrnaty<br /><small>12 months standard warranty and<br />6 months extended warranty</small></td>
            <td>Warranty Expires on:<br /> 31st March 2023</td>
            <td>Extended Warranty on:<br /> 01st April 2022</td>
            <td>Active</td>
            <td><Link to="/admin/warranty-details"><i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i></Link></td>
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
