import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@component/components/layouts/layout';
import Head from 'next/head';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const Index: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (): void => {
    setIsChecked((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, mobile, email, message } = formData;

    if (!name || !mobile || !email || !message) {
      toast.error('Please fill out all fields.');
      return;
    }

    if (!isChecked) {
      toast.warning('Please accept the terms and conditions.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Contact Form Submitted Successfully!');
        setFormData({ name: '', mobile: '', email: '', message: '' });
        setIsChecked(false);
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us | Brewcode Technology Private Limited</title>
        <meta name="description" content="Contact us page description" />
      </Head>

      <div className="contact-us-bg">
        <div className="container contact-form text-light">
          <h1 className="text-center contact-us-heading">{`{ Contact Us }`}</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="mobile" className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label">E-Mail</label>
                  <input
                    type="email"
                    className="form-control bg-transparent text-white"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex">
                  <div className="checkbox-main">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      aria-label="Accept terms and conditions"
                    />
                  </div>
                  <label
                    className="form-check-label text-light terms-and-conditions-text"
                    htmlFor="terms"
                    onClick={handleCheckboxChange}
                  >
                    I have read all terms and conditions{' '}
                    <a href="#" className="privacy-policy">Privacy Policy</a>
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="message" className="mgs-label mb-4">Message</label>
                  <textarea
                    className="form-control text-area bg-transparent text-white"
                    id="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="submit-btn">SUBMIT</button>
                </div>
              </div>
            </div>
          </form>

          {/* Office Info Section */}
          <div className="row office-info">
            <div className="col-md-4">
              <h5>Hyderabad, India</h5>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address">
                  H.No 2-60/48, Plot No 48, #102, Behind SaiBaba Temple, Sri Rangapuri Colony, Miyapur
                  HYDERABAD, TELANGANA 500049
                </p>
                <span className="FaArrowRight"><FaArrowRight fontSize={25} /></span>
              </div>
              <p className="hyderabad-line" />
              <p className="contact-address mt-3">Phone: +91 4035641584</p>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address mt-3">
                  Email: <a href="mailto:contact@brewcode.co" className="text-white email-text">contact@brewcode.co</a>
                </p>
                <span className="FaArrowRight"><FaArrowRight fontSize={25} /></span>
              </div>
              <p className="hyderabad-line" />
            </div>

            <div className="col-md-4">
              <h5>Bangalore, India</h5>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address">
                  #198, CMH Road, 2nd Floor,<br />
                  Desk No.289 Indiranagar,<br />
                  Bangalore, India-560038
                </p>
                <span className="FaArrowRight"><FaArrowRight fontSize={25} /></span>
              </div>
              <p className="hyderabad-line" />
              <p className="contact-address mt-3">Phone: +91 4035641584</p>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address mt-3">
                  Email: <a href="mailto:contact@brewcode.co" className="text-white email-text">contact@brewcode.co</a>
                </p>
                <span className="FaArrowRight"><FaArrowRight fontSize={25} /></span>
              </div>
              <p className="hyderabad-line" />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} pauseOnHover theme="dark" />
    </Layout>
  );
};

export default Index;
