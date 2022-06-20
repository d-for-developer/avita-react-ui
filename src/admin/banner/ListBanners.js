import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from '../layouts/SideDrawer';
import MobBanner from '../../img/mob_banner.jpg';
import WebBanner from '../../img/web_banner.jpg';



export default function ListBanners() {
    return (

        <div className='row'>

            <div className='col-md-2'>
                <SideDrawer/>
            </div>
            <div className='card col-md-10 p-4'>

                <h1 className='text-center mb-5'>List Banners</h1>

                <div className='d-flex justify-content-end'>
                  <a className='btn btn-secondary btn-sm p-2 m-2' href='/admin/add-banner'>Add Banner</a>
                </div>
                <table class="table table-striped" id="table" data-url="json/data1.json" data-filter-control="true" data-show-search-clear-button="true">

                    <thead>

                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Mobile Banner</th>
                            <th scope="col">Desktop Banner</th>
                            <th scope="col">Slug</th>
                            <th scope="col">Type</th>
                            <th scope="col">Updated On</th>
                            <th scope="col">Status</th>
                            <th scope="col">View </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td><img src={MobBanner} style={{ width: 50 }} ></img></td>
                            <td><img src={WebBanner} style={{ width: 250 }} ></img></td>
                            <td>avita-liber-v</td>
                            <td>Home</td>
                            <td>26<sup>th</sup> May, 2022</td>
                            <td>Active</td>
                            <td><Link to="/admin/banner-details"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                        </tr>

                    </tbody>


                </table>
                <div className='d-flex justify-content-center'>
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li class="page-item"><Link class="page-link" to="#">&lt;&lt; Previous</Link></li>
                            <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                            <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                            <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                            <li class="page-item"><Link class="page-link" to="#">4</Link></li>
                            <li class="page-item"><Link class="page-link" to="#">5</Link></li>
                            <li class="page-item"><Link class="page-link" to="#">Next &gt;&gt;</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
