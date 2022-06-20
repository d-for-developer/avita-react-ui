import React from 'react';
import SideDrawer from '../layouts/SideDrawer';


export default function ShowCountry() {
    return (
        <div className='row'>
            <div className='col-md-2'>
                <SideDrawer />
            </div>
            <div className='card col-md-10 p-4'>
                <h3 className='my-4'>Country Details</h3>
                <small className='mb-4'>Items marked with an asterisk (*) must be filled out.</small>
                <hr />
                <form>
                    <div className='row'>
                        <div className='col-md-6 mt-5'>
                            <div class="mb-3">
                                <label for="exampleInputType" class="form-label">Country Code</label>
                                <input type="text" placeholder="HK" className="form-control" name="code" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputType" class="form-label">Slug</label>
                                <input type="text"  placeholder="hk" className="form-control" name="code" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputType" class="form-label">Country Name (En)</label>
                                <input type="text"  placeholder="Hong Kong SAR China" className="form-control" name="code" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputType" class="form-label">Country Name (Tc)</label>
                                <input type="text"  placeholder="中華人民共和國香港特別行政區" className="form-control" name="code" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputType" class="form-label">Country Name (Sc)</label>

                                <input type="text"  placeholder="中国香港特别行政区" className="form-control" name="code" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputType" class="form-label">Description:</label>
                                <textarea class="form-control" placeholder="Hong Kong SAR China" row="10"></textarea>
                            </div>
                            <button type="submit" class="btn btn-submit">Save</button>

                        </div>
                      
                    </div>
                </form>


            </div>
        </div>
    )
}
