import React, { useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import WebBanner from '../../img/web_banner_preview.jpg';
import MobBanner from '../../img/mob_banner_preview.jpg';
import editIcon from '../../icons/edit.svg';
import SideDrawer from "../layouts/SideDrawer";


export default function AddNews() {

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

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
                                <h2>Add News</h2>
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
                                                            <label htmlFor="productName" className="form-label">News
                                                                Title</label>
                                                            <input type="text" name="productName"
                                                                className="form-control slug-title" id="productName" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Featured</label>
                                                            <select name="featured" id="featured" className="form-select">
                                                                <option value="yes">Yes</option>
                                                                <option value="no">No</option>

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
                                                        <div className="col-md-6">
                                                            <label className="form-label">Published On</label>
                                                            <input type="date" id="date" className="form-control" name="date" />
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label className="form-label">Banner Tags <span>( Type and
                                                                make comma to separate tags )</span></label>
                                                            <input type="text" className="form-control" id="group_tag"
                                                                name="group_tag" value="" placeholder=""
                                                                data-role="tagsinput" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-12">
                                                            <label className="form-label">Caption</label>
                                                            <textarea name="shortDesc" className="form-control"
                                                                rows="4"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-3">
                                                        <div className="col-md-12">
                                                            <label className="form-label">Description</label>
                                                            <Editor
                                                                onInit={(evt, editor) => editorRef.current = editor}
                                                                initialValue="<p>This is the initial content of the editor.</p>"
                                                                init={{
                                                                    height: 500,
                                                                    menubar: false,
                                                                    plugins: [
                                                                        'advlist autolink lists link image charmap print preview anchor',
                                                                        'searchreplace visualblocks code fullscreen',
                                                                        'insertdatetime media table paste code help wordcount'
                                                                    ],
                                                                    toolbar: 'undo redo | formatselect | ' +
                                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                        'removeformat | help',
                                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                                }}
                                                            />
                                                        </div>
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
