import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Sidebar from './layouts/Sidebar';


const data = [{ name: '01 March', uv: 400, pv: 2400, amt: 2000 },
{ name: '08 March', uv: 800, pv: 2100, amt: 3400 },
{ name: '15 March', uv: 3500, pv: 2700, amt: 5400 },
{ name: '22 March', uv: 400, pv: 2400, amt: 2400 },
{ name: '29 March', uv: 1000, pv: 2100, amt: 3400 }
];

export default function Dashboard() {


return (
    <div className='row'>
    <div className='col-md-2'>
      <Sidebar />
    </div>
    <div className='col-md-10'>

      <div className='row'>
        <h3 className="text-left my-4 text-center">Admin Dashboard</h3>
        <hr />
        <div className='col-md-3 mb-2'>

          <div className='product-card'>

            <h5 className="text-left">Customers</h5>

            <div className='row'>
              <div className='col-md-6 mt-5 mb-5'>

                <h6 className="text-left">Total Count:</h6>
                <h6 className="text-left">Registered:</h6>
                <h6 className="text-left">Last Week:</h6>
                <h6 className="text-left">Last Month:</h6>

              </div>


              <div className='col-md-6 mt-5 mb-5'>
                <h6 className='mt-2'>123 <small>Customers</small></h6>
                <h6 className='mt-2'>456 <small>Customers</small></h6>
                <h6 className='mt-2'>789 <small>Customers</small></h6>
                <h6 className='mt-2'>741 <small>Customers</small></h6>
              </div>
              <h6 className='text-center'><a href='/'>View More</a></h6>

            </div>
          </div>


        </div>


        <div className='col-md-3 mb-2'>

          <div className='product-card'>

            <h5 className="text-left">Products</h5>

            <div className='row'>
              <div className='col-md-6 mt-5 mb-5'>

              <h6 className="text-left">Total Count:</h6>
              <h6 className="text-left">Registered:</h6>
              <h6 className="text-left">Last Week:</h6>
              <h6 className="text-left">Last Month:</h6>

              </div>


              <div className='col-md-6 mt-5 mb-5'>
              <h6 className='mt-2'>123 <small>Products</small></h6>
              <h6 className='mt-2'>456 <small>Products</small></h6>
              <h6 className='mt-2'>789 <small>Products</small></h6>
              <h6 className='mt-2'>741 <small>Products</small></h6>
              </div>

            </div>
            <h6 className='text-center'><a href='/'>View More</a></h6>

          </div>


        </div>


        <div className='col-md-3 mb-2'>

          <div className='product-card'>

            <h5 className="text-left">Warranty Registered</h5>

            <div className='row'>
              <div className='col-md-6 mt-5 mb-5'>

              <h6 className="text-left">Total Count:</h6>
              <h6 className="text-left">Expired:</h6>
              <h6 className="text-left">Last Week:</h6>
              <h6 className="text-left">Last Month:</h6>
              </div>


              <div className='col-md-6 mt-5 mb-5'>
              <h6 className='mt-2'>123 <small>Registered</small></h6>
              <h6 className='mt-2'>456 <small>Registered</small></h6>
              <h6 className='mt-2'>789 <small>Registered</small></h6>
              <h6 className='mt-2'>741 <small>Registered</small></h6>
              </div>

            </div>
            <h6 className='text-center'><a href='/'>View More</a></h6>

          </div>


        </div>


        <div className='col-md-3 mb-2'>

          <div className='product-card'>

            <h5 className="text-left">Invoices</h5>

            <div className='row'>
              <div className='col-md-6 mt-5 mb-5'>

              <h6 className="text-left">Total Count:</h6>
              <h6 className="text-left">Verified:</h6>
              <h6 className="text-left">Last Week:</h6>
              <h6 className="text-left">Last Month:</h6>
              </div>


              <div className='col-md-6 mt-5 mb-5'>
              <h6 className='mt-2'>123 <small>Invoices</small></h6>
              <h6 className='mt-2'>456 <small>Invoices</small></h6>
              <h6 className='mt-2'>789 <small>Invoices</small></h6>
              <h6 className='mt-2'>741 <small>Invoices</small></h6>
              </div>

            </div>
            <h6 className='text-center'><a href='/'>View More</a></h6>

          </div>


        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 mb-2'>
        <div className='product-card'>
        <h5 className="text-center">Visitors Count</h5>

        <LineChart width={720} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
        <h6 className='text-center'><a href='/'>View More</a></h6>


          </div>
        </div>


        <div className='col-md-6 mb-2'>
        <div className='product-card'>
        <h5 className="text-center">Warranty Count</h5>

        <LineChart width={720} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <h6 className='text-center'><a href='/'>View More</a></h6>



          </div>
        </div>

      </div>


    </div>
  </div>

  )
}
