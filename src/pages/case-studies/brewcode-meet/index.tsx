import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Soctor Healthcare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="row my-4 d-flex justify-content-between">
            <div className="col-md-6 col-md-4 mb-5">
              <div className="soctor-logo d-flex text-center mb-5">
                <img src="/images/svg/Brewcode.svg" alt="Brewcode Logo" />
              </div>
              <div className="healthcare-text-container">
                <div className="information-technology information-technology-stoke-text mb-5">
                  <h2>Information Technology</h2>
                </div>
              
                  <h2 className="iformation-description">
                    Brewcode Meet – Setting New Standards in Enterprise
                    <br /> Communication  
                  </h2>
             
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="/images/brewcode-enterprise-meeting-platform.png"
                alt="Brewcode Enterprise Meeting Platform"
                className="health-care-img"
              />
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="about-introduction">Introduction</div>
            <div className="col-md-8">
              <div className="about-content">
                <h2>About Project</h2>
                <p>
                Brewcode Technologies took on the ambitious project of developing Brewcode Meet, an advanced enterprise meeting platform designed to cater to the growing needs for reliable digital communication in businesses.
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
                    />Problem Statement
                  </h2>
                  <p className="section-description">
                 <b> Device and Browser Compatibility:</b> Achieved universal compatibility through extensive testing and optimization.
                  </p>
                  <p className="section-description">
                  <b>Load Management:</b> Implemented dynamic scaling of backend resources to manage peak usage efficiently.
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
                      alt=""
                    /> Business Goal
                  </h2>
                  <p className="section-description">
                  Business Goal for Brewcode Meet: “To establish Brewcode Meet as the premier enterprise communication platform that enhances collaboration and productivity by delivering a seamless, secure, and user-centric experience, thereby driving digital transformation and fostering a connected business environment.”
This goal aligns with Brewcode Technologies’ dedication to innovation and excellence, aiming to set a new standard in enterprise communication solutions.
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
                  />
                </div>
                <h2 className=" text-center"> Target Audience</h2>

                <p className="text-center">
                  Below these groups are most at risk from self-medication due
                  to reliance on unqualified sources and lack of access to
                  reliable medical advice.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading genarl-padding">
                Businesses and
                <br /> Corporations{" "}
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      Organizations seeking to enhance internal communication
                      and collaboration among
                      <br /> employees.{" "}
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Remote Teams</strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      Teams that operate remotely and require reliable tools for
                      daily communication and
                      <br /> project management.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">
                Educational Institutions
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      Schools and universities that need a platform for virtual
                      classrooms, meetings, and
                      <br /> seminars.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">IT Departments</strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                       IT professionals who require a secure and efficient means
                      to support and manage their
                      <br /> company’s technology infrastructure.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">
                Project Managers
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      Individuals responsible for coordinating and overseeing
                      projects that involve multiple
                      <br /> stakeholders.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <strong className="audience-list-heading">
                HR Professionals
              </strong>
            </div>
            <div className="col-md-8">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      Human resources departments that conduct virtual
                      interviews, training sessions, and company-wide
                      announcements.
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
            <div className="col-12">
              <div className="about-content">
              <div className="text-center">
                  <img
                    src="/images/discover.svg "
                    className="business-goal-icon text-center"
                    alt=""
                  />
                </div>
                <h2 className=" text-center">Descover</h2>
                <div className="col-12">
                  <p className="text-center">
                    We worked with different stakeholders to understand product,
                    and a regular connect with
                    <br /> them helped us understand user stories and needs
                  </p>
                </div>

                <div>
                  <hr className="col-md-4 mx-auto" />
                  <div className="col-12">
                    <h2 className=" text-center">Gaps That We Identified</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gap-that-container">
            <div className="d-flex col-md-5 flex-column">
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">1</span>
                </p>
                <p className="gap-description">
                  Performance Analysis: Assessing whether the platform can
                  handle a high volume of users without compromising speed or
                  reliability
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">2</span>
                </p>
                <p className="gap-description">
                  User Feedback: Gathering and analyzing user feedback to
                  identify areas where the user experience may be lacking.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">3</span>
                </p>
                <p className="gap-description">
                  Feature Comparison: Comparing Brewcode Meet’s features with
                  those of leading competitors to spot functionalities that
                  might be missing or underdeveloped.
                </p>
              </div>
            </div>
            <div className="d-flex col-md-5 flex-column">
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">4</span>
                </p>
                <p className="gap-description">
                  Security Evaluation: Ensuring that all communication and data
                  storage is secure against potential breaches or
                  vulnerabilities.{" "}
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">5</span>
                </p>
                <p className="gap-description">
                  Integration Capabilities: Checking if the platform integrates
                  smoothly with other enterprise tools and systems.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">6</span>
                </p>
                <p className="gap-description">
                  Accessibility: Making sure the platform is accessible to all
                  users, including those with disabilities.{" "}
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
                  <br /> of the design thinking methodology include
                </p>
              </div>
            </div>
          </div>
          <div className="soctor-about-section my-4">
            <div className="about-introduction">Process</div>
            <div className="process-image-container">
              <img
                 src="/images/process-image.jpg"
                alt="Discovery, Design, and Delivery Process"
                className="process-image"
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
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-symptoms.png"
                  alt="Soctor Symptoms"
                  className="process-image"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-medical-history.png"
                  alt="Soctor Medical History"
                  className="process-image"
                />
              </div>

              <div className="col-md-3">
                <img
                  src="/images/soctor-travel-sickness-personaldetails.png"
                  alt="Soctor Travel Sickness Personal Details"
                  className="process-image"
                />
              </div>
            </div>
            <div className="row d-flex flex-wrap justify-content-center g-4">
              <div className="col-md-3">
                <img
                  src="/images/soctor-safe-self-medication-advice.png"
                  alt="Soctor Safe Self Medication Advice"
                  className="process-image-design"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-travel-sleep.png"
                  alt="Soctor Travel Sleep"
                  className="process-image-design"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-symptoms.png"
                  alt="Soctor Symptoms"
                  className="process-image-design"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-medical-history.png"
                  alt="Soctor Medical History"
                  className="process-image-design"
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
