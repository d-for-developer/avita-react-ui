import React from 'react';
import Sidebar from '../layouts/Sidebar';
import User from '../../img/User.png';

export default function ChangePassword() {
  return (
    <div className='row'>
    <div className='col-md-2'>
      <Sidebar />
    </div>
    <div className='card col-md-10 p-4'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={User}  alt="Admin Profile" className="m-2" style={{ width: 250 }} />
          <h6>Usrename : <span>sandy4u1994</span></h6>
          <h6>Email : <span>sandy4u1994@gmail.com</span></h6>
        </div>

        <div className='col-md-6'>
    
        <form>
        <h3 className='my-4 mb-4'>Change Password</h3>
        <small>Items marked with an asterisk (*) must be filled out.</small>
        <hr/>
        <div class="mb-3">
        <label for="exampleInputPassword" class="form-label">Current Password</label>
        <input type="password" class="form-control" id="exampleInputPassword" />
      </div>

      <div class="mb-3">
        <label for="exampleInputnewPassword" class="form-label">New Password</label>
        <input type="confirm" class="form-control" id="exampleInputnewPassword" />
      </div>

      
      <div class="mb-3">
        <label for="exampleInputconfirmPassword1" class="form-label">Confirm Password</label>
        <input type="confirm" class="form-control" id="exampleInputconfirmPassword" />
      </div>

         <button type="submit" class="btn btn-submit">Change Password</button>
       </form>


        </div>

      </div>


    </div>
  </div>
    )
}
