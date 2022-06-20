import React from 'react';
import SideDrawer from '../layouts/SideDrawer';
import WebBanner from '../../img/web_banner_preview.jpg';
import MobBanner from '../../img/mob_banner_preview.jpg';
import editIcon from '../../icons/edit.svg';

export default function BannerDetails() {


    return (
        <div className='row'>
            <div className='col-md-2'>
            <SideDrawer/>
            </div>
            <div className='card col-md-10 p-4'>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-default">
                            <div className="card-header card-header-border-bottom">
                                <h2>Update Banner</h2>
                            </div>

                            <div className="card-body">

                                <form action="" method="POST" encType="multipart/form-data">

                                    <div className="row ec-vendor-uploads ">
                                        <div className="col-lg-4">
                                            <div className="ec-vendor-img-upload">
                                                <div className="ec-vendor-main-img">
                                                    <div className="avatar-upload">
                                                        <div className="avatar-edit">
                                                            <input name="mainImg" type='file' id="imageUpload"
                                                                className="ec-image-upload"
                                                                accept=".png, .jpg, .jpeg" />
                                                            <label htmlFor="imageUpload"><img
                                                                src={editIcon}
                                                                className="svg_img header_svg" alt="edit" width={250} /></label>
                                                        </div>
                                                        <div className="avatar-preview ec-preview">
                                                            <div className="imagePreview ec-div-preview">
                                                                <img className="ec-image-preview"
                                                                    src={WebBanner}
                                                                    alt="edit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>


                                            </div>

                                                   <div className="ec-vendor-img-upload">
                                                <div className="ec-vendor-main-img">
                                                    <div className="avatar-upload">
                                                        <div className="avatar-edit">
                                                            <input name="mainImg" type='file' id="imageUpload"
                                                                className="ec-image-upload"
                                                                accept=".png, .jpg, .jpeg" />
                                                            <label htmlFor="imageUpload"><img
                                                                src={editIcon}
                                                                className="svg_img header_svg" alt="edit" width={250} /></label>
                                                        </div>
                                                        <div className="avatar-preview ec-preview">
                                                            <div className="imagePreview ec-div-preview">
                                                                <img className="ec-image-preview"
                                                                    src={MobBanner}
                                                                    alt="edit" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>


                                            </div>
                                            
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="row g-3">
                                                <div className="ec-vendor-upload-detail">
                                                    <div className="row mt-2">
                                                        <div className="col-md-6">
                                                            <label htmlFor="productName" className="form-label">Banner
                                                                name</label>
                                                            <input type="text" name="productName"
                                                                className="form-control slug-title" id="productName" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Select Type</label>
                                                            <select name="brandName" id="brand" className="form-select">
                                                                <option value="home">Home Page</option>
                                                                <option value="product">Product Page</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-6">
                                                            <label className="form-label">Slug</label>
                                                            <input type="text" className='form-control' />

                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Status</label>
                                                            <select name="status" id="status" className="form-select">
                                                                <option value="active">Active</option>
                                                                <option value="inactive">Inactive</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-12">
                                                            <label htmlFor="url"
                                                                className="col-12 col-form-label">URL</label>
                                                            <div className="col-12">
                                                                <input id="url" name="url"
                                                                    className="form-control here set-url" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-12">
                                                            <label className="form-label">Sort Description</label>
                                                            <textarea name="shortDesc" className="form-control"
                                                                rows="2"></textarea>
                                                        </div>
                                                    </div>
                                                  
                                                    <div className="row mt-3">
                                                        <div className="col-md-12">
                                                            <label className="form-label">Full Detail</label>
                                                            <textarea name="longDesc" className="form-control"
                                                                rows="4"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">     
                                                    <div className="col-md-6">
                                                    <label className="form-label">Date From</label>
                                                    <input type="date" id="date" className="form-control" name="date" />
                                                </div>

                                                   <div className="col-md-6">
                                                            <label className="form-label">Date To</label>
                                                            <input type="date" id="date" className="form-control" name="date" />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-12">
                                                            <label className="form-label">Banner Tags <span>( Type and
                                                                make comma to separate tags )</span></label>
                                                            <input type="text" className="form-control" id="group_tag"
                                                                name="group_tag" value="" placeholder=""
                                                                data-role="tagsinput" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">

                                                        <div className="col-md-12">
                                                            <button type="submit"
                                                                className="btn btn-primary">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </form>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

</div>



    )
}
