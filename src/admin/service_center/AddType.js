import React from 'react';
import SideDrawer from '../layouts/SideDrawer';


export default function AddType() {
  return (
    <div className='row'>

    <div className='col-md-2'>
      <SideDrawer />
    </div>
    <div className='card col-md-10 p-4'>

      <h1 className='text-center mb-5'>Add New Type</h1>
      <div className='row col-md-12'>
        <div class="col-md-6 mb-3">
          <h5>Lorem Ipsum </h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
      
        </div>
        <div class="col-md-6 mb-3">
          <form>
          
            <div className='row mt-5'>
              <div class="col-md-9 mb-3">
                <label for="exampleInputService CenterType" class="form-label">Service Center Type</label>
                <input type="text" class="form-control" id="exampleInputService CenterType" aria-describedby="usernameHelp" />


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
