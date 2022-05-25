import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Product from '../../img/Product.png';


export default function ShowProduct() {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <Sidebar />
      </div>
      <div className='card col-md-10 p-4'>
        <div className='row'>
          <div className='col-md-5'>
            <img src={Product} className="m-2" style={{ width: 400 }} />
            <h6>Product Title : </h6>
            <small>AVITA SATUS ULTIMUS S111 NU14A1INC43PN-MB 14.1 FHD (35.81cms) Laptop (Intel Celeron N4020/4GB/128GB SSD/FHD Display/Windows 11 Home/ Intel UHD Graphics), Matt Black </small>
            <hr />
            <h6>SKU / Part No. : </h6>
            <small>NU14A1INC43PN-MB</small>
            <hr />
            <h6>Serial No. : </h6>
            <small>B09V73PJB8</small>
            <hr />
            <h6>Purchased Date. : </h6>
            <small>22<sup>nd</sup> Feb, 2022</small>
            <hr />
            <h6>Warranty Status : </h6>
            <small>Active</small>

          </div>

          <div className='col-md-7'>
            <h4 className='mb-4 text-center mb-5 mt-5'>Other Information</h4>

            <div class="accordion" id="accordionExample">

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h5 className='mb-4'>Product Details</h5>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <h6>Type : </h6>
                    <small>Notebook</small>
                    <hr />
                    <h6>Series : </h6>
                    <small>Ultimus</small>
                    <hr />
                    <h6>Model : </h6>
                    <small>NU14A</small>
                    <hr />
                    <h6>Product No. : </h6>
                    <small>NU14A1INC43PN-MB</small>
                    <hr />
                    <h6>Serial No. : </h6>
                    <small>B09V73PJB8</small>
                    <hr />
                    <h6>Product Name : </h6>
                    <small>AVITA SATUS ULTIMUS S111 NU14A1INC43PN-MB 14.1 FHD (35.81cms) Laptop (Intel Celeron N4020/4GB/128GB SSD/FHD Display/Windows 11 Home/ Intel UHD Graphics), Matt Black </small>

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <h5 className='mb-4'>Order Details</h5>
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <h6>Order Date : </h6>
                    <small>22<sup>nd</sup> Feb, 2022</small>
                    <hr />
                    <h6>Amount : </h6>
                    <small>INR 21,490/-</small>
                    <hr />
                    <h6>Discount (if any) : </h6>
                    <small>5%</small>
                    <hr />
                    <h6>Invoice No. : </h6>
                    <small>#1031</small>
                    <hr />
                    <h6>Payment Method : </h6>
                    <small>Online / Credit Card</small>
                    <hr />
                    <h6>Reseller Name : </h6>
                    <small>Amazon</small>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    <h5 className='mb-4'>Warranty Details</h5>
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <h6>Registered on : </h6>
                    <small>22<sup>nd</sup> Feb, 2022</small>
                    <hr />
                    <h6>Expiry on : </h6>
                    <small>21<sup>st</sup> Aug, 2023</small>
                    <hr />
                    <h6>Duration : </h6>
                    <small>18 Months</small>
                    <hr />
                    <h6>Price : </h6>
                    <small>INR 1099/-</small>
                    <hr />
                    <h6>Extended Warranty (if any) : </h6>
                    <small>No</small>
                    <hr />
                  
                    <h6>Accidental Damage Protection (if any) : </h6>
                    <small>No</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
