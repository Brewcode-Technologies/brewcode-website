import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Vodafone Italia | Brewcode Technology Private Limited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="soctor-logo col-5 d-flex text-center">
            <img src="/images/svg/Vodafone.svg" alt="Vodafone Logo"  loading="lazy"/>
          </div>
          <div className="row my-4 d-flex justify-content-between mb-5">
            <div className="col-md-6 col-md-4">
              <div className="healthcare-text-container">
                <div className="information-technology information-technology-stoke-text">
                  <h2>Information Technology</h2>
                </div>

                <h2 className="iformation-description">
                  Vodafone Italia Collaborate App
                </h2>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <img
                src="/images/vodafone-Italia-img.jpeg"
                alt="vodafone image logo"
                className="health-care-img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="about-introduction">Introduction</div>
            <div className="col-12">
              <div className="about-content">
                <h2>About Project</h2>
                <p>
                  Brewcode Technologies spearheaded a project for Vodafone,
                  focusing on enhancing customer engagement through a tailored
                  digital platform, integrating innovative features for improved
                  user, interaction, and delivering a seamless online experience
                  to drive Vodafone’s market growth.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="soctor-about-section">
                <div className="section-about-introduction">Challenge</div>

                <div className="d-flex flex-column">
                  <h2 className="section-title mb-3">
                    <img
                      src="/images/problem-statement.svg"
                      className="problem-statemt-icon"
                      alt=""
                      loading="lazy"
                    />
                    Problem Statement
                  </h2>
                  <p className="section-description">
                    The existing corporate communication infrastructure at
                    Vodafone Italia lacks efficiency and flexibility, hindering
                    effective collaboration among employees. Traditional methods
                    of communication are fragmented and fail to meet the demands
                    of modern business operations. There is a pressing need for
                    a solution that streamlines corporate communication while
                    ensuring seamless integration across diverse platforms and
                    devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="soctor-about-section">
                <div className="d-flex flex-column">
                  <h2 className="section-title mb-3">
                    <img
                      src="/images/business-goal.svg"
                      className="business-goal-icon"
                      alt="business-goal icon"
                      loading="lazy"
                    />
                    Business Goal
                  </h2>
                  <p className="section-description">
                    The business goal for Vodafone Italia is to optimize
                    corporate communication through a sophisticated messaging
                    application. This involves seamless integration with the
                    BroadCloud® service delivery platform, enabling efficient
                    collaboration across diverse devices and networks. The
                    objective is to establish the Vodafone Italia Collaborate
                    App as the leading solution for modernized and streamlined
                    corporate communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="about-introduction">Audience</div>
            <div className="col-12">
              <div className="about-content">
                <div className="image-icon-container">
                  <img
                    src="/images/target-audience-icon.svg"
                    alt="Target Audience icon"
                    className="image-icon"
                    loading="lazy"
                  />
                </div>
                <h2 className=" text-center"> Target Audience</h2>

                <p className="text-center">
                  Vodafone’s target audience includes individual consumers and
                  businesses, offering services like mobile<br/> connectivity,
                  broadband, and IoT solutions to meet diverse communication
                  needs.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading genarl-padding">
              Corporate Professionals
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      loading="lazy"
                      className="list-page-arrow-icon mt-2 "
                    />

                    <p>
                    Executives, managers, and employees in corporate settings who require efficient and secure communication tools.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Small and Medium<br/>Enterprises (SMEs)</strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />

                    <p>
                    Business owners and employees in SMEs seeking cost-effective and scalable communication solutions to enhance productivity and collaboration.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">
              Remote Workers and<br/> Telecommuters
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />

                    <p>
                    Individuals working remotely or from home who rely on reliable communication platforms to stay connected with colleagues and clients.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">IT Administrators</strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />

                    <p>
                    Professionals responsible for managing corporate communication infrastructure and ensuring seamless integration with existing systems.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">
              Mobile Workforce
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />

                    <p>
                    Field workers, sales representatives, and on-the-go professionals who need access to business communication tools while away from the office.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <strong className="audience-list-heading">
              Vodafone Italia<br/> Subscribers
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />

                    <p>
                    Existing customers of Vodafone Italia looking to leverage their mobile services for enhanced corporate communication capabilities.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="discover-bg">
    <div className="container">
      
      <div className="soctor-about-section">
        <div className="about-introduction">Gap In Market</div>
        <div className="row">
          <div className="col-12">
            <div className="about-content text-center">
              <img
                src="/images/discover.svg"
                className="business-goal-icon text-center"
                alt=""
                loading="lazy"
              />
              <h2 className="text-center">Discover</h2>
              <p className="text-center">
              In our product exploration, we discovered the Vodafone Italia Collaborate App, seamlessly integrating with BroadCloud® to<br/> unify communication across devices and networks, revolutionizing corporate messaging.
              </p>
              <hr className="col-md-4 mx-auto" />
              <h2 className="text-center">Gaps That We Identified</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row gap-that-container">
        <div className="col-md-6">
          <div className="d-flex p-4">
            <span className="step-number">1</span>
            <p className="gap-description ml-3">
            Existing communication tools lack integration, leading to inefficiencies and confusion among users.
            </p>
          </div>
          <div className="d-flex p-4">
            <span className="step-number">2</span>
            <p className="gap-description ml-3">
            Current solutions do not adequately support remote work and mobile communication needs, hindering productivity.
            </p>
          </div>
          <div className="d-flex p-4">
            <span className="step-number">3</span>
            <p className="gap-description ml-3">
            There is a lack of robust security features in place to protect sensitive corporate data and communications.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex p-4">
            <span className="step-number">4</span>
            <p className="gap-description ml-3">
            The absence of advanced collaboration features hampers teamwork and decision-making processes within the organization.
            </p>
          </div>
          <div className="d-flex p-4">
            <span className="step-number">5</span>
            <p className="gap-description ml-3">
            Integrating communication tools with existing systems is cumbersome and time-consuming, causing delays and disruptions.
            </p>
          </div>
          <div className="d-flex p-4">
            <span className="step-number">6</span>
            <p className="gap-description ml-3">
            The current infrastructure does not scale effectively to accommodate growing business needs, limiting future expansion and adaptability.
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
      <div className="bg-black">
        <div className="container">
          <div className="soctor-about-section">
            <div className="about-introduction">Design Method</div>
            <div className="col-12">
              <div className="about-content">
                <h2 className="text-center">Design Thinking Process</h2>

                <p className="text-center">
                  Design thinking is a methodology that attempts to solve
                  complex problems in a creative and user-centric way. Core
                  features
                  <br /> of the design thinking methodology include.
                </p>
              </div>
            </div>
           
          </div>
          <div className="soctor-about-section my-4">
            <div className="about-introduction">Process</div>
            <div className="process-image-container">
              <img
                src="/images/discovery-design-delivery-img.png"
                alt="Discovery, Design, and Delivery Process"
                className="process-image"
                loading="lazy"
             
              />
            </div>
          </div>
          <h2 className="text-center final-ui-screens">How It Works</h2>
          <div className="soctor-about-section">
            <div className="about-introduction">Plan Of Action</div>
            <div className="row d-flex flex-wrap justify-content-center g-4">
              <div className="col-6">
                <img
                  src="/images/brewcode-who-we-are-laptop-image.png"
                  alt="Brewcode Who We Are image"
                  className="process-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="col-12">
              <h2 className="text-center my-5 final-ui-screens">
                Final Ui Screens
              </h2>
            </div>
            <div className="row d-flex flex-wrap justify-content-center g-4 mb-5">
              <div className="col-md-3">
                <img
                  src="/images/soctor-register.png"
                  alt="Soctor Register"
                  className="process-image"
                  loading="lazy"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-symptoms.png"
                  alt="Soctor Symptoms"
                  className="process-image"
                  loading="lazy"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-medical-history.png"
                  alt="Soctor Medical History"
                  className="process-image"
                  loading="lazy"
                />
              </div>

              <div className="col-md-3">
                <img
                  src="/images/soctor-travel-sickness-personaldetails.png"
                  alt="Soctor Travel Sickness Personal Details"
                  className="process-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="row d-flex flex-wrap justify-content-center g-4">
              <div className="col-md-3">
                <img
                  src="/images/soctor-safe-self-medication-advice.png"
                  alt="Soctor Safe Self Medication Advice"
                  className="process-image-design"
                  loading="lazy"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-travel-sleep.png"
                  alt="Soctor Travel Sleep"
                  className="process-image-design"
                  loading="lazy"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-symptoms.png"
                  alt="Soctor Symptoms"
                  className="process-image-design"
                  loading="lazy"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-medical-history.png"
                  alt="Soctor Medical History"
                  className="process-image-design"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
