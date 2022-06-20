import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from '../layouts/SideDrawer';



export default function Categories() {
  return (
    <div className='row'>

      <div className='col-md-2'>
        <SideDrawer />
      </div>
      <div className='card col-md-10 p-4'>

        <h1 className='text-center mb-5'>Categories Details</h1>

        <table className="table table-striped" id="table" data-url="json/data1.json" data-filter-control="true" data-show-search-clear-button="true">

          <thead>

            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Product Types</th>
              <th scope="col">Product Series</th>
              <th scope="col">Marketing Number</th>
              <th scope="col">Product Number</th>
              <th scope="col">Serial No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Notebook</td>
              <td>Liber</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Smart Devices</td>
              <td>IMAGO</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Accessories</td>
              <td>UBIQUE</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Notebook</td>
              <td>Liber</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Notebook</td>
              <td>Cosmos</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Notebook</td>
              <td>Admiror</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Notebook</td>
              <td>Cosmos</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Notebook</td>
              <td>Admiror</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Notebook</td>
              <td>Liber</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Notebook</td>
              <td>Admiror</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Notebook</td>
              <td>Admiror</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Notebook</td>
              <td>Liber</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Notebook</td>
              <td>Cosmos</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Notebook</td>
              <td>Liber</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>Notebook</td>
              <td>Admiror</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Notebook</td>
              <td>Liber</td>
              <td>NS14A1</td>
              <td>NS14ABC1234</td>
              <td>3214789650</td>
            </tr>
          </tbody>


        </table>
        <div className='d-flex justify-content-center'>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item"><Link className="page-link" to="#">&lt;&lt; Previous</Link></li>
              <li className="page-item"><Link className="page-link" to="#">1</Link></li>
              <li className="page-item"><Link className="page-link" to="#">2</Link></li>
              <li className="page-item"><Link className="page-link" to="#">3</Link></li>
              <li className="page-item"><Link className="page-link" to="#">4</Link></li>
              <li className="page-item"><Link className="page-link" to="#">5</Link></li>
              <li className="page-item"><Link className="page-link" to="#">Next &gt;&gt;</Link></li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
  )
}
