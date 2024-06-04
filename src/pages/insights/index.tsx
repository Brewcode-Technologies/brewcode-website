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
              <h2 className="chart-of-heading mb-4">Insights By Interests</h2>
            </div>
          </div>
          <div>
            <hr className="insights-line" />

            <div className="d-flex justify-content-between">
              <div className="col-md-3 d-flex justify-content-between my-5">
                <span>001</span>
                <div
                  className="col-md-3 insight-imag-container ml-4"
                  style={{ marginLeft: "100px" }}
                >
                  <img
                    src="/images/insight-online-bookkeeping.jpg"
                    alt="insight image"
                    className="insigts-image"
                  />
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-between my-5">
                <div className="col-md-3 insight-imag-container">
                  <p className="mb-4 date-text">JANUARY 21, 2024</p>
                  <h2 className="mb-5 online-bookkeeping-software-heading">
                    Online Bookkeeping Software: Key
                    <br />
                    Features To Look For
                  </h2>
                  <div className="d-flex flex-column">
                    <span className="health-text">HEALTH</span>
                    <span className="by-alex-glen-text">BY ALEX GLENN</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="insights-line" />
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <div className="col-md-3 d-flex justify-content-between my-5">
                <span>001</span>
                <div
                  className="col-md-3 insight-imag-container ml-4"
                  style={{ marginLeft: "100px" }}
                >
                  <img
                    src="/images/insights-trends.jpg"
                    alt="insight image"
                    className="insigts-image"
                  />
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-between my-5">
                <div className="col-md-3 insight-imag-container">
                  <p className="mb-4 date-text">JANUARY 21, 2024</p>
                  <h2 className="mb-5 online-bookkeeping-software-heading">
                    4 Key Trends For Accounting and <br />
                    Bookkeeping Services in 2024
                  </h2>
                  <div className="d-flex flex-column">
                    <span className="health-text">CYBER SECURITY</span>
                    <span className="by-alex-glen-text">BY ALEX GLENN</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="insights-line" />
          </div>

          <div className="row" style={{ position: "relative",  }}>
            <div className="col-12">
              <h2 className="chart-of-heading mb-4">Explore Our Insights</h2>
              <div className="explore-our-insigts-image">
                <h1 className="explore-our-insigts-heading">
                  The Great Reimagination of
                  <br />
                  Work Is Happening Now.
                </h1>
                <button className="read-more-button">Read More</button>
              </div>
            </div>
            <div
              className="row gr-5"
              style={{
                position: "absolute",
                bottom: "0",
                top: "430px",
                zIndex: "1",
                padding:'60px',
              
              }}
            >
              <div className="col-md-3">
                <div className="insight-explore-card">
                  <div className="card-body">
                    <h3 className="insight-explore-card-heading">ARTICLE</h3>
                    <p>
                      From Article To,
                      <br />
                      Reimagination
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="insight-explore-card">
                  <div className="card-body">
                    <h3 className="insight-explore-card-heading">ARTICLE</h3>
                    <p>
                      Better Quality data For
                      <br /> AI With Blockchain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="insight-explore-card">
                  <div className="card-body">
                    <h3 className="insight-explore-card-heading">ARTICLE</h3>
                    <p>
                      From Article To <br />
                      Reimagination
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="insight-explore-card">
                  <div className="card-body">
                    <h3 className="insight-explore-card-heading">ARTICLE</h3>
                    <div className="d-flex">
                      <p>
                        Reactive, Theory Of
                        <br /> Mind & Self-Aware
                      </p>
                    </div>
                    <div>
                      <button className="read-more-button-arrow">
                        {" "}
                        <FaArrowRightLong fontSize={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          
           <div className="row" style={{marginTop:'150px'}}>
           <div className="col-12">
              <h3 className="our-section-heading mb-3">Success Stories</h3>
            </div>
           </div>
            <div className="row my-2">
              <div className="col-3">
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
                      Process automation was on the menu for a large
                      quick-service restaurant
                    </h5>
                    <p className="insight-card-text">
                      HCLTech iONA platform helps achieve observability,
                      intelligent automation and robust operations
                    </p>
                    <FaArrowRightLong fontSize={18} className="fa-arrow-long" />{" "}
                  </div>
                </div>
              </div>

              <div className="col-3">
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
                      Ikano Bank - Cloud-driven technology transformation to
                      become a fully digital bank
                    </h5>
                    <p className="insight-card-text">
                      Building cloud-native applications on AWS with modernized
                      networking architecture
                    </p>
                    <FaArrowRightLong fontSize={18} className="fa-arrow-long" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-3">
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
                      Ikano Bank - Cloud-driven technology transformation to
                      become a fully digital bank
                    </h5>
                    <p className="insight-card-text">
                      Building cloud-native applications on AWS with modernized
                      networking architecture
                    </p>
                    <FaArrowRightLong fontSize={18} className="fa-arrow-long" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-3">
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
                      Process automation was on the menu for a large
                      quick-service restaurant
                    </h5>
                    <p className="insight-card-text">
                      HCLTech iONA platform helps achieve observability,
                      intelligent automation and robust operations
                    </p>
                    <FaArrowRightLong fontSize={18} className="fa-arrow-long" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
              <a href="#" className="mt-2 see-all-tech-industry-case-studies-link">See all tech industry case studies<MdKeyboardArrowRight fontSize={20}/></a>
              </div>
            </div>
          </div>
        </div>
      
      
    
    </Layout>
  );
};

export default Index;
