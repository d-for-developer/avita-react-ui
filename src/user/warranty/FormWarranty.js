import React from 'react';
import Sidebar from '../layouts/Sidebar';
import SNLocation from '../../img/sn_location.png';


export default function FormWarranty() {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <Sidebar />
      </div>
      <div className='card col-md-10 p-4'>
      <h3 className='my-4'>Warranty Registration</h3>
      <small className='mb-4'>Items marked with an asterisk (*) must be filled out.</small>
      <hr/>
        <form>

          <div className='row'>
        
         

            <div className='col-md-6 mt-5'>
              <div class="mb-3">
                <label for="exampleInputType" class="form-label">Product Type</label>
                <select class="form-select" aria-label="Select">
                  <option selected>Select</option>
                  <option value="notebook">Notebook</option>
                  <option value="smart device">Smart Device</option>
                  <option value="accessories">Accessories</option>
                  <option value="convertible">Convertible</option>

                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputType" class="form-label">Product Series</label>
                <select class="form-select" aria-label="Select">
                  <option selected>Select</option>
                  <option value="liber">Liber</option>
                  <option value="essential">Essential</option>
                  <option value="admiror">Admiror</option>
                  <option value="pura">PURA</option>

                </select>
              </div>

              <div class="mb-3">
                <label for="exampleInputType" class="form-label">Product Number</label>
                <select class="form-select" aria-label="Select">
                  <option selected>Select</option>
                  <option value="ns14a1">NS14A1</option>
                  <option value="ns14a2">NS14A2</option>
                  <option value="ns14a3">NS14A3</option>
                  <option value="ns14a4">NS14A4</option>

                </select>
              </div>

              <div class="mb-3">
                <label for="exampleInputType" class="form-label">Product Model</label>
                <select class="form-select" aria-label="Select">
                  <option selected>Select</option>
                  <option value="ns14inr123">NS14INR123</option>
                  <option value="ns14inr124">NS14INR124</option>
                  <option value="ns14inr125">NS14INR125</option>
                  <option value="ns14inr126">NS14INR126</option>

                </select>
            </div>

              <div class="mb-3">
                <label for="exampleInputType" class="form-label">Product Configuration:</label>
                <p>AVITA LIBER 14" 1920x1080 Full HD IPS, i5-7Y54, 8GB DDR3 RAM, 256GB SSD, WIFI+BT, Backlit Keyboard, Win 10 Home, Office 365 one-month Trial Bundled, Batik in champagne gold with Backpack </p>
              </div>

            </div>
            <div className='col-md-6 mt-5'>
              <div class="mb-3">
                <label for="exampleInputnewSerialno" class="form-label">Serial No.</label>
                <input type="text" class="form-control" id="exampleInputnewSerialno" />
                <img src={SNLocation} alt="Serial no." className="m-2" style={{ width: 350 }} />

              </div>


              <div class="mb-3">
                <label for="exampleInputconfirmReseller" class="form-label">Reseller Name</label>
                <input type="text" class="form-control" id="exampleInputconfirmReseller" />
              </div>

              <div class="mb-3">
                <label for="exampleInputconfirmDate" class="form-label">Purchase Date</label>
                <input type="date" class="form-control" id="exampleInputconfirmDate" />
              </div>


              <button type="submit" class="btn btn-submit">Save</button>


            </div>
          </div>
        </form>


      </div>
    </div>

  )
}
