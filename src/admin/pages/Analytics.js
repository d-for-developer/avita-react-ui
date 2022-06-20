import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import SideDrawer from '../layouts/SideDrawer';
const data = [{ name: '01 March', uv: 400, pv: 2400, amt: 2000 },
 { name: '08 March', uv: 800, pv: 2100, amt: 3400 }, 
 { name: '15 March', uv: 3500, pv: 2700, amt: 5400 },
 { name: '22 March', uv: 400, pv: 2400, amt: 2400 },
 { name: '29 March', uv: 1000, pv: 2100, amt: 3400 } 
];

export default function Analytics() {
  return (
    <div className='row'>
    <div className='col-md-2'>
      <SideDrawer />
    </div>
    <div className='col-md-10'>

      <div className='row'>
        <h3 className="text-left my-4 text-center">Analytics Data</h3>
        <hr />

       <div className='col-md-12 mb-2'>
        <div className='product-card'>
        <h5 className="text-center">Visitors Analytics</h5>

        <LineChart width={1500} height={500} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>

          </div>
        </div>


        <div className='col-md-12 mb-2'>
        <div className='product-card'>
        <h5 className="text-center">Warranty Analytics</h5>

        <LineChart width={1500} height={500} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>



          </div>
        </div>

      </div>


    </div>
  </div>
    )
}
