import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from '../layouts/SideDrawer';


export default function ShowPages() {
    return (
        <div className='row'>

            <div className='col-md-2'>
                <SideDrawer />
            </div>
            <div className='card col-md-10 p-4'>
                <form>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3 className='my-4'>Add Pages</h3>
                            <small className='mb-4'>Items marked with an asterisk (*) must be filled out.</small>
                            <hr />
                            <div className='row'>
                                <div className='mt-5'>
                                    <div class="mb-3">
                                        <label for="exampleInputType" class="form-label">Page Name</label>
                                        <input type="text" placeholder="Page Name" className="form-control" name="code" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputType" class="form-label">Slug</label>
                                        <input type="text" placeholder="slug" className="form-control" name="code" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputType" class="form-label">Country</label>
                                        <input type="text" placeholder="Country" className="form-control" name="code" />
                                    </div>

                                    <div className='row mb-3'>
                                        <div class="col-md-6">
                                            <label className="form-label">Select Type</label>
                                            <select name="brandName" id="brand" className="form-select">
                                                <option value="t&s">Terms and Service</option>
                                                <option value="privacy">Privacy Policy</option>
                                                <option value="repair">Repair Terms</option>

                                            </select>
                                        </div>
                                        <div className='col-md-6 mt-2 float-right'>
                                            <Link to='/admin/page-type/'><button className='btn btn-outline-dark mt-4'>Add New</button></Link>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputType" class="form-label">Short Description:</label>
                                        <textarea class="form-control" placeholder="Hong Kong SAR China" rows="5"></textarea>
                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className='col-md-6'>
                                <div className='mt-5'>
                                    <div class="mb-3">
                                        <label for="exampleInputType" class="form-label">Full Description</label>
                                        <textarea class="form-control" placeholder="Hong Kong SAR China" rows="10"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-submit">Save</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
