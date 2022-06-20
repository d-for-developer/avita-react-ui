import React from 'react';
import User from '../../img/User.png';
import SideDrawer from '../layouts/SideDrawer';

export default function Settings() {


  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const [gender, setGender] = React.useState('male');

  const genderChange = (event) => {
    setGender(event.target.gender);
  };



  const countries = [
    { label: 'India', value: 'india' },
    { label: 'Other', value: 'other' },
  ];

  const [country, setCountry] = React.useState('india');

  const changeCountry = (event) => {
    setCountry(event.target.country);
  };


  return (
    <div className='row'>
    <div className='col-md-2'>
      <SideDrawer />
    </div>
    <div className='card col-md-10 p-4'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={User} className="m-2" style={{ width: 250 }} />
          <h6>Usrename : <span>sandy4u1994</span></h6>
          <h6>Email : <span>sandy4u1994@gmail.com</span></h6>
       
        </div>

        <div className='col-md-6 '>
    
          <form>
          <h3 className='mb-4'>Admin Settings</h3>

          <small>Items marked with an asterisk (*) must be filled out.</small>
          <hr />

            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputGender" className="form-label">Gender</label>
            <select className="form-select" value={gender} onChange={genderChange} aria-label="Select">
                {genders.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}
                  </option>
                ))
                }
                </select>

            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Date of Birth</label>
              <input type="date" className="form-control" id="exampleInputDateofBirth" />
            </div>
            <div className="mb-3">
            <label htmlFor="phone" className="form-label">Mobile Number</label>
            <input type="mobile" className="form-control" id="phone" />
          </div> 
            <div className="mb-3">
              <label htmlFor="exampleInputCountry" className="form-label">Country</label>
              <select className="form-select" value={country} onChange={changeCountry} aria-label="Select">
                {countries.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}
                  </option>
                ))
                }
                </select>

            </div>
       
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea type="text" className="form-control" id="address" />
            </div>    
             <div className="mb-3">
              <label htmlFor="pin" className="form-label">Pin</label>
              <input type="text" className="form-control" id="pin" />
            </div>

            <button type="submit" className="btn btn-submit">Save</button>
          </form>


        </div>

      </div>


    </div>
  </div>
    )
}
