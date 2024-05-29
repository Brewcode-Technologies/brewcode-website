import BlackLayer from "@component/components/blackLayer";
import Layout from "@component/components/layouts/layout";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";


const Index: React.FC = () => {
  return (
    
    <Layout>
 <div className="e-commerce-hero-section">
        <div className="overlay-ar-vr">
          <div className="container" >
          
              <h1 className="e-commerce-short-heading mb-2">
              Looking For
              </h1>
              <h1 className="e-commerce-heading mb-2">
              EXPERIENCED 
              </h1>
              <h1 className="e-commerce-short-heading">
              Team
              </h1>
             
          </div>
        </div>
      </div>

      <BlackLayer />
      <div className="case-studies-black-container container-fluid">
        <div className="container">
          <p className="ar-vr-description-brewcode mb-5">
          Elevate your online business with our tailored Ecommerce solutions that seamlessly integrate technology, user experience, and business 
strategy. Our team of experts leverages cutting-edge technologies to deliver robust and scalable Ecommerce platforms. Here's what our 
Ecommerce services encompass
          </p>
       <div className="row">
       <div className="col-md-6">
       <div className="d-flex flex-column">
       <div className="our-e-commerce-services-container">
        <h2 className="our-e-commerce-services">Our E-Commerce Services</h2>
        </div>
          <img
            src="/images/e-commerce-img.jpeg"
            alt="E-Commerce Services"
            className="img-fluid e-commerce-img"
          />
       </div>
        </div>
        <div className="col-md-6 mt-5" style={{backgroundColor:'#000'}}>
       <div className="d-flex flex-column mb-3">
       <div className="e-commerce-accordion d-flex justify-content-between py-3 " >
          <p>Custom Ecommerce Development</p> <span style={{backgroundColor:'#ddd',height:"34px",}}><IoMdArrowDropdown fontSize={40} /></span>
         </div>
         <hr style={{color:'#fff',marginTop:'-20px'}} />
       </div>
       <div className="d-flex flex-column ">
       <div className="e-commerce-accordion d-flex justify-content-between py-3 " >
          <p>Custom Ecommerce Development</p> <span style={{backgroundColor:'#ddd',height:"34px",}}><IoMdArrowDropdown fontSize={40} /></span>
         </div>
         <hr style={{color:'#fff',marginTop:'-20px'}} />
       </div>
       <div className="d-flex flex-column mb-3">
       <div className="e-commerce-accordion d-flex justify-content-between py-3 " >
          <p>Custom Ecommerce Development</p> <span style={{backgroundColor:'#ddd',height:"34px",}}><IoMdArrowDropdown fontSize={40} /></span>
         </div>
         <hr style={{color:'#fff',marginTop:'-20px'}} />
       </div>
       <div className="d-flex flex-column ">
       <div className="e-commerce-accordion d-flex justify-content-between py-3 " >
          <p>Custom Ecommerce Development</p> <span style={{backgroundColor:'#ddd',height:"34px",}}><IoMdArrowDropdown fontSize={40} /></span>
         </div>
         <hr style={{color:'#fff',marginTop:'-20px'}} />
       </div>
       <div className="d-flex flex-column mb-2">
       <div className="e-commerce-accordion d-flex justify-content-between py-3 " >
          <p>Custom Ecommerce Development</p> <span style={{backgroundColor:'#ddd',height:"34px",}}><IoMdArrowDropdown fontSize={40} /></span>
         </div>
         <hr style={{color:'#fff',marginTop:'-20px'}} />
       </div>
       <div className="d-flex flex-column mb-2">
       <div className="e-commerce-accordion d-flex justify-content-between py-3 " >
          <p>Custom Ecommerce Development</p> <span style={{backgroundColor:'#ddd',height:"34px",}}><IoMdArrowDropdown fontSize={40} /></span>
         </div>
         <hr style={{color:'#fff',marginTop:'-20px'}} />
       </div>
        </div>
       </div>
      </div>
 
          </div>
       
    </Layout>
  );
};

export default Index;
