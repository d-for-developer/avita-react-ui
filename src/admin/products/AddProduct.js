import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from '../layouts/SideDrawer';


export default function AddProduct() {
  return (
    <div className='row'>

      <div className='col-md-2'>
        <SideDrawer/>
      </div>
      <div className='card col-md-10 p-4'>

        <h1 className='text-center mb-5'>Add New Product</h1>
        <div className='row col-md-12'>
          <div class="col-md-6 mb-3">
            <h5>Lorem Ipsum </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h5>What is Lorem Ipsum?</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

          </div>
          <div class="col-md-6 mb-3">
            <form>
              <div className='row mb-4'>
                <div class="col-md-8 mb-3 float-right">
                </div>
                <div class="col-md-4 mb-3 float-right">
                  <button className='btn btn-outline-success btn-sm m-1'>Bulk Import</button>
                  <button className='btn btn-outline-success btn-sm m-1'>Export Data</button>
                </div>
              </div>
              <div className='row'>
                <div class="col-md-9 mb-3">
                  <label for="exampleInputUserId" class="form-label">Product Type</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">Notebook</option>
                    <option value="2">Smart Device</option>
                    <option value="3">Accessories</option>
                    <option value="4">Convertible</option>

                  </select>

                </div>
                <div className='col-md-3 mt-2 float-right'>
                  <Link to='/admin/product-type/'><button className='btn btn-outline-dark btn-sm mt-4'>Add New</button></Link>
                </div>
              </div>

              <div className='row'>
                <div class="col-md-9 mb-3">
                  <label for="exampleInputUserId" class="form-label">Product Series</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">LIBER</option>
                    <option value="2">CLARUS</option>
                    <option value="3">COSMOS</option>
                    <option value="4">ADMIROR</option>
                    <option value="5">PURA</option>
                    <option value="6">Essential</option>
                    <option value="7">PRIMUS series</option>
                    <option value="8">Premier</option>
                    <option value="9">VAIO SE14</option>
                    <option value="10">Essential Lite</option>
                    <option value="11">IMAGO</option>
                    <option value="12">MAGUS</option>
                    <option value="13">MAGUS COSMOS 2 IN 1</option>

                  </select>
                </div>
                <div className='col-md-3 mt-2 float-right'>
                <Link to='/admin/product-series/'><button className='btn btn-outline-dark btn-sm mt-4'>Add New</button></Link>
                </div>
              </div>
              <div className='row'>
                <div class="col-md-9 mb-3">
                  <label for="exampleInputUserId" class="form-label">Marketing Number</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">NS13A1</option>
                    <option value="2">NS14A1</option>
                    <option value="3">NS12A1</option>
                    <option value="4">NS13A2</option>
                    <option value="5">NS14A2</option>
                    <option value="6">NS14A8_INTEL</option>
                    <option value="7">NS14A8_AMD</option>
                  </select>
                </div>
                <div className='col-md-3 mt-2 float-right'>
                <Link to='/admin/product-model/'><button className='btn btn-outline-dark btn-sm mt-4'>Add New</button></Link>
                </div>
              </div>
              <div className='row'>
                <div class="col-md-9 mb-3">
                  <label for="exampleInputUserId" class="form-label">Product Number</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">NS13A1IN001P</option>
                    <option value="2">NS13A1IN002P</option>
                    <option value="3">NS13A1IN003P</option>
                    <option value="4">NS13A1IN004P</option>
                    <option value="5">NS13A1IN005P</option>
                    <option value="6">NS13A1IN006P</option>
                  </select>
                </div>
                <div className='col-md-3 mt-2 float-right'>
                <Link to='/admin/product-number/'><button className='btn btn-outline-dark btn-sm mt-4'>Add New</button></Link>
                </div>
              </div>
              <div className='row'>

                <div class="mb-3">
                  <label for="exampleInputProductTitle" class="form-label">Product Title</label>
                  <label>AVITA LIBER 13.3" 1920x1080 Full HD IPS, i5-7Y54, 8GB DDR3 RAM, 256GB SSD, WIFI+BT, Backlit Keyboard, Win 10 Home, Office 365 one-month Trial Bundled, Shamrock Green with Backpack</label>
                </div>
              </div>

              <div className='row'>
                <div class="col-md-9 mb-3">
                  <label for="exampleInputSerialNo" class="form-label">Serial Number</label>
                  <input type="text" class="form-control" id="exampleInputSerialNo" aria-describedby="usernameHelp" />
                </div>
                <div className='col-md-3 mt-2 float-right'>
                  <button className='btn btn-outline-success mt-4'>Validate</button>
                </div>
              </div>

              <div className='row'>
                <div class="col-md-9 mb-3 text-center">
                  <button className='btn btn-outline-submit mt-4'>Submit</button>
                </div>
              </div>

            </form>

          </div>
        </div>

      </div>

    </div>

  )
}
