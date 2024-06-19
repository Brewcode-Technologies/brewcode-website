import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          Information Technology | Brewcode Technology Private Limited
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="row my-4 d-flex justify-content-between">
            <div className="col-md-6 col-md-4 mb-5">
              <div className="soctor-logo">
                <img src="/images/svg/AT-T.svg" alt="AT&T Logo"   loading="lazy" />
              </div>

              <div className="healthcare-text-container">
                <div className="information-technology information-technology-stoke-text mb-5">
                  <h2>Information Technology</h2>
                </div>
                <div className="percentage-container">
                  <div className="list-page-description text-center">
                    AT&T Collaborate App Development   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="image-container-at mt-3">
                <img
                  src="/images/at-&-t-collaborate-app-development.png"
                  alt="AT&T Collaborate App Development"
                  className="at-t-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="container soctor-about-section">
            <div className="about-introduction">Introduction</div>
            <div className="col-11">
              <div className="about-content">
                <h2>About Project</h2>
                <p>
                  Brewcode Technologies played a pivotal role in the success of
                  the AT&T Collaborate app by providing expertise in agile
                  development and microservices architecture. Their contribution
                  ensured that the app could offer a comprehensive suite of
                  features, including advanced calling and collaboration tools,
                  while maintaining high performance and reliability. Brewcode’s
                  focus on user experience and technical excellence helped to
                  create a platform that not only met but exceeded the
                  expectations of enterprise users, solidifying AT&T
                  Collaborate’s position in the marke{" "}
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
                    <b> Device and Browser Compatibility:</b> Achieved universal
                    compatibility through extensive testing and optimization.
                  </p>
                  <p className="section-description">
                    <b>Load Management:</b> Implemented dynamic scaling of
                    backend resources to manage peak usage efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="soctor-about-section">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/business-goal.svg"
                      className="business-goal-icon mb-3"
                      alt=""
                      loading="lazy"
                    />
                    <h2 className="section-title mb-3">Business Goal</h2>
                  </div>

                  <p className="section-description">
                    Business Goal for Brewcode Meet: “To establish Brewcode Meet
                    as the premier enterprise communication platform that
                    enhances collaboration and productivity by delivering a
                    seamless, secure, and user-centric experience, thereby
                    driving digital transformation and fostering a connected
                    business environment.” This goal aligns with Brewcode
                    Technologies’ dedication to innovation and excellence,
                    aiming to set a new standard in enterprise communication
                    solutions.
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
                </div>{" "}
                <h2 className=" text-center"> Target Audience</h2>
                <p className="text-center">
                  The target audience for AT&T Collaborate, enhanced by Brewcode
                  Technologies, includes enterprise clients
                  <br /> seeking advanced calling and collaboration tools, and
                  professionals prioritizing high performance and user
                  <br /> experience in communication platforms.
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
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />
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
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />
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
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />
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
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />
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
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />
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
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                      loading="lazy"
                    />
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
                    loading="lazy"
                  />
                </div>
                <h2 className=" text-center">Discover</h2>
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
