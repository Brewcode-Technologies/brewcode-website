import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";



const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Insights | Brewcode Technology Private Limited</title>
        <meta name="description" content="Description of your insights page" />
      </Head>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="cloud-image">
          <img
            alt="Comprehensive application services icon"
            src="/images/insight-hero-image.jpg"
            className="mb-3 hero-cloud"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="services-content">
              <h1 className="services-header">Insights</h1>
              <p className="insights-description text-center">
                We Believe The Exchange Of <br />
                Knowledge Fuels Collective Growth
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-container py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="chart-of-heading mb-2">
                Insights By Interests
              </h2>
            </div>
          </div>
          <hr className="insights-line" />
          <div className="row">
            <div className="col-md-5">
              <span>001</span>
              <img
                src="/images/insight-online-bookkeeping.jpg"
                alt="insight image"
                className="insigts-image"
               
              />
            </div>

            <div className="col-md-7 my-auto">
              <p className="mb-4">JANUARY 21, 2024</p>
              <h2 className="mb-5">
                Online Bookkeeping Software: Key Features To Look For
              </h2>
              <div className="d-flex flex-column">
                <span>HEALTH</span>
                <span>BY ALEX GLENN</span>
              </div>
            </div>
          </div>

          <hr className="insights-line" />
          <div className="row">
            <div className="col-md-5">
              <span>001</span>
              <img
                src="/images/insight-online-bookkeeping.jpg"
                alt="insight image"
                className="insigts-image"
               
              />
            </div>

            <div className="col-md-7 my-auto">
              <p className="mb-4">JANUARY 21, 2024</p>
              <h2 className="mb-5">
                Online Bookkeeping Software: Key Features To Look For
              </h2>
              <div className="d-flex flex-column">
                <span>HEALTH</span>
                <span>BY ALEX GLENN</span>
              </div>
            </div>
          </div>

          <hr className="insights-line" />

          <div className="row my-5">
  <div className="col-12">
    <h3 className="our-section-heading mb-3">Success Stories</h3>
  </div>
  <div className="col-12 col-md-6 col-lg-3 mb-4">
    <div className="insight-success-stories-card">
      <Image
        src="/images/process-automation.jpg"
        className="card-img-top insight-top-image"
        alt="application support and services Image"
        width={200}
        height={200}
        priority
      />
      <div className="card-body">
        <h5 className="insight-card-heading">
          Process automation was on the menu for a large quick-service restaurant
        </h5>
        <p className="insight-card-text">
          HCLTech iONA platform helps achieve observability, intelligent automation and robust operations
        </p>
        <FaArrowRightLong fontSize={18}  className="fa-arrow-long" />
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 mb-4">
    <div className="insight-success-stories-card">
      <Image
        src="/images/ikano-bank.jpg"
        className="card-img-top insight-top-image"
        alt="application support and services Image"
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="insight-card-heading">
          Ikano Bank - Cloud-driven technology transformation to become a fully digital bank
        </h5>
        <p className="insight-card-text">
          Building cloud-native applications on AWS with modernized networking architecture
        </p>
        <FaArrowRightLong fontSize={18}  className="fa-arrow-long" />
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 mb-4">
    <div className="insight-success-stories-card">
      <Image
        src="/images/ikano-bank.jpg"
        className="card-img-top insight-top-image"
        alt="application support and services Image"
        width={200}
        height={200}
        priority
      />
      <div className="card-body ">
        <h5 className="insight-card-heading">
          Ikano Bank - Cloud-driven technology transformation to become a fully digital bank
        </h5>
        <p className="insight-card-text">
          Building cloud-native applications on AWS with modernized networking architecture
        </p>
        <FaArrowRightLong fontSize={18} className="fa-arrow-long"  />
      </div>
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3 mb-4">
    <div className="insight-success-stories-card">
      <Image
        src="/images/process-automation.jpg"
        className="card-img-top insight-top-image"
        alt="application support and services Image"
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="insight-card-heading">
          Process automation was on the menu for a large quick-service restaurant
        </h5>
        <p className="insight-card-text">
          HCLTech iONA platform helps achieve observability, intelligent automation and robust operations
        </p>
        <FaArrowRightLong fontSize={18} className="fa-arrow-long" />
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </Layout>
  );
};

export default Index;
