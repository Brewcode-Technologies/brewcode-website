import Layout from "@component/components/layouts/layout";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const Index: React.FC = () => {
  return (
    <Layout>
  
  <div className="dark-container py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="services-header about-us-heading mb-5 text-center">
                About Us
              </h1>
              <div className="col-lg-10 col-md-12 mx-auto">
                <p className="text-center about-us-description mb-3">
                  The company was established with the sole purpose to digitally
                  enable companies to grow now and tomorrow. In a nutshell, we
                  help you decode success! We thrive on delivering intuitive
                  competitive-edge business solutions in BFSI, Retail, and
                  Healthcare domain.
                </p>
                <p className="text-center about-us-description mb-3">
                  <b>
                    We are headquartered in Bidar, Karnataka. We have grown to
                    become a worldwide presence in countries like the United
                    States, Canada, Dubai, Singapore, the United Kingdom, and
                    more.
                  </b>
                </p>
                <p className="text-center about-us-description mb-3">
                  To enrich digital experiences, brewcode offers innovative and
                  ingenious solutions to businesses of all sizes. brewcode goes
                  beyond expectations. Content and communications are our areas
                  of expertise as a full-service global marketing company. Our
                  greatest strength is ensuring effective solutions for our
                  clients based on their needs. We are professional,
                  experienced, and forward thinking. We are exceptional today
                  because we create tomorrow's brands, web portals, and mobile
                  apps by creating today's premium brands.
                </p>
                <p className="text-center about-us-description">
                  Marketing and branding are integrated with digital
                  innovations. Our agency believes in the passion for bringing
                  more, and we begin where other agencies stop with a relentless
                  pursuit of success. Using creative innovation and technical
                  expertise, we combine your brand into something perfect. At
                  brewcode, we believe in creating a digital experience instead
                  of just coding a project. We can help you build a more
                  resilient IT infrastructure by providing you with superior
                  services and solutions. By optimizing your business
                  techniques, we can help you enhance your productivity.
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-img-top bg-black text-white text-center p-2 about-us-card-heading">
                  Who We Are
                </div>
                <div className="card-body about-us-card-body">
                  Brewcode is trying to solve industry problems with new tech.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-img-top bg-black text-white text-center p-2 about-us-card-heading">
                  Our Mission
                </div>
                <div className="card-body about-us-card-body">
                  Solutions that can be afforded by various companies.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-img-top bg-black text-white text-center about-us-card-heading p-2">
                  What We Do
                </div>
                <div className="card-body about-us-card-body">
                  We provide various services and solutions to different industries.
                </div>
              </div>
            </div>
          </div>
          <div className="row our-history mt-5">
            <div className="col-md-4 mb-4">
              <img
                src="/images/about-us-image-icon.svg"
                className="about-us-icon img-fluid"
                alt="About Us Icon"
              />
            </div>
            <div className="col-md-8">
              <h1 className="our-history-heading">Our History</h1>
              <p className="my-4 about-us-description">
                Founded in 2023, Brewcode Technologies Private Limited is an IT
                consulting and product development company. An organization with
                some of the most intellectual minds working together, we started
                as a provider of
              </p>
              <p>
                Our team’s potential pushed us to expand into <b>software development services.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
