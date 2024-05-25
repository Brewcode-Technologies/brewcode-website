import Layout from "@component/components/layouts/layout";
import React from "react";

const Contact: React.FC = () => (
  <Layout>
    <div className="contact-us-bg">
      <div className="container contact-form text-light">
        <h1 className="text-center contact-us-heading">{`{ Contact Us }`}</h1>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-4 ">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input type="text" className="form-control" id="mobile" />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">
                  E-Mail
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                />
                <div className="d-flex">
                  <label
                    className="form-check-label text-light"
                    htmlFor="terms"
                  >
                    I have read all terms and conditions &nbsp;
                    <a href="#">Privacy Policy</a>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="message" className="form-label mb-1">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={9}
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-light">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="row office-info mt-5">
          <div className="col-md-6">
            <h5>Hyderabad, India</h5>
            <p>
              1-62/74/4B, 102, First Floor Behind SaiBaba Temple, Sri Ranganpuri
              Colony, Miyapur
            </p>
            <p>HYDERABAD, TELANGANA-500049</p>
            <p>Phone Number</p>
            <p>E-Mail</p>
          </div>
          <div className="col-md-6">
            <h5>Bangalore, India</h5>
            <p>
              #198, CMH Road, 2nd Floor, Desk No.289 Indiranagar, Bangalore,
              India-560038
            </p>
            <p>Phone Number</p>
            <p>E-Mail</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
