import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import Link from "next/link";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}
interface ContactFormSubmitEvent {
  event: "contact_form_submit";
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const Index: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  // GTM event data should be pushed on form submit, not here at component render

  const [isChecked, setIsChecked] = useState<boolean>(false);

  // const handleCheckboxChange = (): void => {
  //   setIsChecked((prev) => !prev);
  // };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission started:", formData); // Log form submission start

    const { name, mobile, email, message } = formData;

    if (!name || !mobile || !email || !message) {
      console.log("Validation failed: Missing fields");
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!isChecked) {
      console.log("Validation failed: Terms not accepted");
      toast.warning("Please accept the terms and conditions.");
      return;
    }

    try {
      console.log("Sending request to API:", formData); // Log before API call
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://ythcjaf9b1.execute-api.us-east-1.amazonaws.com/prod/brewcode-contact-form",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ name, email, mobile, message }),
      };

      const response = await axios.request(config);

      console.log("API Response:", JSON.stringify(response.data)); // Log response

      if (response.status === 200 && response.data.success) {
        toast.success("Contact Form Submitted Successfully!");
        setFormData({ name: "", mobile: "", email: "", message: "" });
        setIsChecked(false);
      } else {
        console.error("API returned non-success response:", response.data);
        toast.error(
          response.data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error: any) {
      console.error("Submission error:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      }); // Detailed error logging
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        toast.error(
          error.response.data.message ||
            `Server error (${error.response.status}). Please try again later.`
        );
      } else if (error.request) {
        // No response received (network error, CORS, etc.)
        console.error("No response received. Possible CORS or network issue.");
        toast.error(
          "Unable to connect to the server. Please check your internet connection."
        );
      } else {
        // Error setting up the request
        console.error("Request setup error:", error.message);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "click_to_call",
        phoneNumber: "+914035641584",
      });
      console.log("GTM Event Fired: click_to_call");
    }
  };

  const handleLocationClick = (locationName: string) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "location_click",
        location_name: locationName,
      });
      console.log("GTM Event Fired: location_click", locationName);
    }
  };

  const handleEmailClick = (email: string) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "email_click",
        email,
      });
      console.log("GTM Event Fired: email_click", email);
    }
  };

  const handleCheckboxChange = (): void => {
    const newValue = !isChecked;
    setIsChecked(newValue);

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "checkbox_toggle",
        checked: newValue,
      });
      console.log("GTM Event Fired: checkbox_toggle", newValue);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Brewcode Technology Private Limited",
      "url": "https://www.brewcode.com",
      "logo": "https://www.brewcode.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/brewcode",
        "https://x.com/brewcode"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210", // ✅ Use real number here
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brewcode.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.brewcode.com/contact" }
      ]
    }
  };

  return (
    <Layout>
    <Head>
        <title>Contact Us | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Contact Brewcode Technology Private Limited for inquiries, partnerships, or support."
        />
        <link rel="canonical" href="https://www.brewcode.com/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="contact-us-bg">
        <div className="container contact-form text-light">
          <h1 className="text-center contact-us-heading">{`{ Contact Us }`}</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
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
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
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
                    I have read all terms and conditions{" "}
                    <a href="#" className="privacy-policy">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="message" className="mgs-label mb-4">
                    Message
                  </label>
                  <textarea
                    className="form-control text-area bg-transparent text-white"
                    id="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="submit-btn">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Office Info Section */}
          <div className="row office-info">
            <div
              className="col-md-4"
              onClick={() => handleLocationClick("Hyderabad, India")}
            >
              <h5>Hyderabad, India</h5>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address">
                  H.No 2-60/48, Plot No 48, #102, Behind SaiBaba Temple, Sri
                  Rangapuri Colony, Miyapur HYDERABAD, TELANGANA 500049
                </p>
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
              {/* <p className="contact-address mt-3">Phone: +91 4035641584</p> */}
              <p className="contact-address mt-3">
                <a
                  href="tel:+914035641584"
                  className="phone-link contact-address"
                  onClick={handlePhoneClick}
                >
                  Phone: +91 4035641584
                </a>
              </p>

              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address mt-3">
                  Email:{" "}
                  <a
                    href="mailto:contact@brewcode.co"
                    className="text-white email-text"
                    onClick={() => handleEmailClick("contact@brewcode.co")}
                  >
                    contact@brewcode.co
                  </a>
                </p>
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
            </div>

            <div
              className="col-md-4"
              onClick={() => handleLocationClick("Bangalore, India")}
            >
              <h5>Bangalore, India</h5>
              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address">
                  #198, CMH Road, 2nd Floor,
                  <br />
                  Desk No.289 Indiranagar,
                  <br />
                  Bangalore, India-560038
                </p>
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
              {/* <p className="contact-address mt-3">Phone: +91 4035641584</p>
               */}
              <p className="contact-address mt-3">
                <a
                  href="tel:+914035641584"
                  className="phone-link contact-address"
                  onClick={handlePhoneClick}
                >
                  Phone: +91 4035641584
                </a>
              </p>

              <p className="hyderabad-line" />
              <div className="d-flex justify-content-between arrow-parent">
                <p className="contact-address mt-3">
                  Email:{" "}
                  <a
                    href="mailto:contact@brewcode.co"
                    className="text-white email-text"
                    onClick={() => handleEmailClick("contact@brewcode.co")}
                  >
                    contact@brewcode.co
                  </a>
                </p>
                <span className="FaArrowRight">
                  <FaArrowRight fontSize={25} />
                </span>
              </div>
              <p className="hyderabad-line" />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
      />
    </Layout>
  );
};

export default Index;
