import React from 'react';
import User from '../../img/User.png';
import SideDrawer from '../layouts/SideDrawer';



export default function ShowCustomers() {

  return (
    <div className='row'>
      <div className='col-md-2'>
        <SideDrawer />
      </div>
      <div className='card col-md-10 p-4'>
        <img src={User} className="mb-4" style={{ width: 250 }} />

        <div className='row'>

          <div className='col-md-6'>
            <h6>Username : </h6>
            <small>sandy4u1994</small>
            <hr />
            <h6>Full Name : </h6>
            <small>Sandeep Rawat</small>
            <hr />
            <h6>Email : </h6>
            <small>sandy4u1994@gmail.com</small>
            <hr />
            <h6>Gender : </h6>
            <small>Male</small>
            <hr />
            <h6>Date of Birth : </h6>
            <small>26<sup>th</sup> Sept, 1994</small>
            <hr />
            <h6>Mobile No. : </h6>
            <small>+91-9871254608</small>
            <hr />
            <h6>Country : </h6>
            <small>India</small>
            <hr />
          </div>
          <div className='col-md-6'>
            <h6>Address : </h6>
            <small>B917-A, Advant Navis Business Park, Sector 142 Noida, UP</small>
            <hr />
            <h6>Pin : </h6>
            <small>201305</small>
            <hr />
            <h6>Campus Ambassador Program : </h6>
            <small>Activated <i class="fa fa-check"></i></small>
            <hr />
            <h6>Subscription : </h6>
            <small>Activated <i class="fa fa-check"></i></small>
            <hr />
            <h6>Warranty Registration : </h6>
            <small>Activated <i class="fa fa-check"></i></small>
            <hr />
          </div>


        </div>


      </div>
    </div>
  )
};
