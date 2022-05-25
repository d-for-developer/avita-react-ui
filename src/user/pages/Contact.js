import React from 'react';
import Sidebar from "../layouts/Sidebar";


export default function Contact() {
  return (
    <div className="row">
    <div className="col-md-2">
      <Sidebar />
    </div>
    <div className="card col-md-10 p-4">
      <div className="row">
      <h1 className="text-left mb-4">Contact Us</h1>
      <p className="align-left mb-2">
        AVITA Customer Support. We are always available in case you need
        help. For queries on the product, warranty related inquiries or
        any form of customer support, please contact us on our toll-free
        customer support number or write to on our support email for
        general sales enquiry.
      </p>
      <hr />
      <div className="col-md-6">
 
          <h6>General Sales Enquiry :</h6>
          <p>+91-7827845054</p>
          <h6>Email :</h6>
          <p>Insales@nexstgo.com</p>
          <h6>Operating hours:</h6>
          <p>Monday to Friday : 9:30 am - 6:30 pm</p>
          <h6>Address:</h6>
          <p>
            405, 4th Floor, Copia Business Suites,
            <br />
            Jasola Vihar, New Delhi – 110025
          </p>
          <h6>Service:</h6>
          <p>Toll Free : 1800-103-9635</p>
        </div>

        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.614169699786!2d77.27868898195753!3d28.550131619204166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7ea6bcee9bf%3A0x4fee98c6c6f1c5b1!2sAVITA%20India!5e0!3m2!1sen!2sin!4v1645688219151!5m2!1sen!2sin"
            style = {{ width:700,
            height:450,
            border:0
            }}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  
  )
}
