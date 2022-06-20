import React from 'react';
import SideDrawer from '../layouts/SideDrawer';


export default function ShowShop() {
  return (
    <div className='row'>
    <div className='col-md-2'>
      <SideDrawer />
    </div>
    <div className='card col-md-10 p-4'>
      <h3 className='my-4'>Shop Detail</h3>
      <small className='mb-4'>Items marked with an asterisk (*) must be filled out.</small>
      <hr />
      <form>
        <div className='row'>
          <div className='col-md-6 mt-5'>
            <div class="mb-3">
              <label for="exampleInputType" class="form-label">Shop Name</label>
              <input type="text" placeholder="Shop Name" className="form-control" name="code" />
            </div>
            <div class="mb-3">
              <label className="form-label">Select Type</label>
              <select name="brandName" id="brand" className="form-select">
                <option value="home">Brand Store</option>
                <option value="product">Retail Partner</option>
              </select>
            </div>


            <div class="mb-3">
              <label for="exampleInputType" class="form-label">Shop Address</label>
              <textarea placeholder="Shop Address" rows="3" className="form-control" name="code" ></textarea>
            </div>

            <div class="mb-3">
              <label for="exampleInputType" class="form-label">City</label>
              <input type="text" placeholder="City" className="form-control" name="code" />
            </div>

            <div class="mb-3">
              <label for="exampleInputType" class="form-label">State</label>

              <input type="text" placeholder="State" className="form-control" name="code" />
            </div>

            <div class="mb-3">
              <label for="exampleInputType" class="form-label">Pin</label>

              <input type="number" placeholder="Pin Code" className="form-control" name="code" />
            </div>
          </div>

          <div className='col-md-6 mt-5'>

            <div class="mb-3">
              <label for="exampleInputType" class="form-label">Email</label>
              <input type="email" placeholder="Email Address" className="form-control" name="code" />
            </div>

            <div class="mb-3">
              <label for="exampleInputType" class="form-label">Phone</label>

              <input type="number" placeholder="Phone No" className="form-control" name="code" />
            </div>

            <div className='row'>
              <div className='col-md-6 mb-3'>

                <label for="exampleInputType" class="form-label">Opening Hours</label>

                <input type="time" placeholder="Opening Hours" className="form-control" name="code" />
              </div>
              <div className='col-md-6 mb-3'>

                <label for="exampleInputType" class="form-label">Closing Hours</label>

                <input type="time" placeholder="Closing Hours" className="form-control" name="code" />
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputType" class="form-label">Off Days </label><br />
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" /> Sunday
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" /> Monday
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value=""  /> Tuesday
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" /> Wednesday
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" /> Thursday
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value=""  /> Friday
                </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value=""  /> Saturday
                </label>
              </div>

            </div>
            <div class="mb-3">

              <label for="exampleInputType" class="form-label">Description:</label>
              <textarea class="form-control" placeholder="Shop Description" rows="6"></textarea>
            </div>
            <button type="submit" class="btn btn-submit">Save</button>

          </div>

        </div>
      </form>


    </div>
  </div>
    )
}
