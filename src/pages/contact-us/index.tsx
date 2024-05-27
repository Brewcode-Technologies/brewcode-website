import Layout from "@component/components/layouts/layout";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Contact: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Layout>
      <div className="contact-us-bg">
        <div className="container contact-form text-light">
          <h1 className="text-center contact-us-heading">{`{ Contact Us }`}</h1>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white"
                    id="name"
                    autoFocus
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white"
                    id="mobile"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="form-control bg-transparent text-white"
                    id="email"
                  />
                </div>

                <div className="d-flex">
                  <div className="checkbox-main">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />{" "}
                    &nbsp;&nbsp;
                  </div>

                  <label
                    className="form-check-label text-light terms-and-conditions-text"
                    htmlFor="terms"
                    onClick={handleCheckboxChange}
                  >
                    I have read all terms and conditions &nbsp;
                    <a href="#" className="privacy-policy">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="message" className=" mgs-label mb-4">
                    Message
                  </label>

                  <textarea
                    className="form-control text-area bg-transparent text-white"
                    id="message"
                    rows={8}
                  ></textarea>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className=" submit-btn">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="row office-info">
            <div className="col-md-4">
              <h5 className="mb-4">Hyderabad, India</h5>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <a href="" className="contact-address">
                  1-62/74/4B, 102, First Floor Behind SaiBaba <br /> Temple, Sri
                  Ranganpuri Colony, Miyapur
                  <br />
                  HYDERABAD, TELANGANA 500049
                </a>
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
              <p>Phone Number</p>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                E-Mail
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
            </div>
            <div className="col-md-4">
              <h5 className="mb-4">Bangalore, India</h5>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <a href="" className="contact-address">
                  #198, CMH Road, 2nd Floor,
                  <br /> Desk No.289 Indiranagar,
                  <br /> Bangalore, India-560038
                </a>
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
              <p>Phone Number</p>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                E-Mail
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
