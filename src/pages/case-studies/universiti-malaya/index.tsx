import { Metadata } from 'next';
import Layout from '@component/components/layouts/layout';

import React from 'react';
import { pageMetadata } from '@component/lib/metadata';

export const metadata: Metadata = pageMetadata.caseStudies.universitiMalaya;

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="soctor-logo mb-2 col-5">
            <img src="/images/svg/Malaya.svg" alt="Soctor Logo" loading="lazy" />
          </div>
          <div className="row my-4 d-flex justify-content-between">
            <div className="col-md-6 col-md-4 mb-5">
              <div className="healthcare-text-container">
                <div className="malaya-education stroke-text mb-5">
                  <h2>Education</h2>
                </div>

                <p className="education-description text-center">
                  VR Application for Universiti Malaya by
                  <br /> Brewcode Technologies  
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="socoter-img">
                <img
                  src="/images/vr-application-for-universiti-img.jpeg"
                  alt="health care image"
                  className="health-care-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="about-introduction">Introduction</div>
            <div className="col-11">
              <div className="about-content">
                <h2>About Project</h2>
                <p>
                  Universiti Malaya aimed to enhance its educational offerings by incorporating
                  advanced technologies to create more immersive and interactive learning
                  environments. Recognizing the potential of virtual reality (VR) in education,
                  Universiti Malaya partnered with Brewcode Technologies, known for its innovative
                  digital solutions, to develop a comprehensive VR application tailored for their
                  educational needs.
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
                    Universiti Malaya needed to enhance its digital presence with a modern,
                    interactive website. Partnering with Brewcode Technologies, the challenge was to
                    create a platform that reflected the university's prestige while offering
                    intuitive navigation and robust functionality. Brewcode developed a
                    user-friendly, visually appealing website to meet these diverse needs.
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
                      loading="lazy"
                    />{' '}
                    Business Goal
                  </h2>
                  <p className="section-description">
                    Universiti Malaya aimed to enhance its online presence and user engagement by
                    partnering with Brewcode Technologies to develop a modern, interactive website.
                    The goal was to attract prospective students and global partners while providing
                    streamlined access to resources for current users. This initiative sought to
                    bolster the university’s reputation and support its educational mission.
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
                  Understanding these diverse requirements is vital for crafting a website that
                  effectively meets their expectations
                  <br /> and facilitates seamless interaction with the university's offerings.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading genarl-padding">Prospective Students</strong>
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
                      High school graduates and transfer students seeking undergraduate or
                      postgraduate programs.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Current Students</strong>
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
                      Enrolled students requiring easy access to academic resources, schedules, and
                      support services.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Faculty and Staff</strong>
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
                      University employees needing streamlined communication tools and resource
                      access.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Alumni</strong>
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
                      Graduates interested in staying connected with the university community and
                      alumni services.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Global Partners</strong>
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
                      Educational and research institutions looking to collaborate with Universiti
                      Malaya.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <strong className="audience-list-heading">General Public</strong>
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
                      Individuals seeking information about the university’s programs, events, and
                      achievements.
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
                    We worked with different stakeholders to understand product, and a regular
                    connect with them
                    <br /> helped us understand user stories and needs.
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
                  {' '}
                  <span className="step-number">1</span>
                </p>
                <p className="gap-description">
                  Outdated website design lacking modern, visually appealing elements.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {' '}
                  <span className="step-number">2</span>
                </p>
                <p className="gap-description">
                  Poor navigation structure making information difficult to find.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {' '}
                  <span className="step-number">3</span>
                </p>
                <p className="gap-description">
                  Limited mobile accessibility, leading to a subpar user experience on smartphones
                  and tablets.
                </p>
              </div>
            </div>
            <div className="d-flex col-md-5 flex-column">
              <div className="d-flex p-4">
                <p>
                  {' '}
                  <span className="step-number">4</span>
                </p>
                <p className="gap-description">
                  Inefficient access to academic resources and administrative information.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  <span className="step-number">5</span>
                </p>
                <p className="gap-description">
                  Lack of interactive features to enhance user engagement.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  <span className="step-number">6</span>
                </p>
                <p className="gap-description">
                  Insufficient global reach, failing to attract international students and partners.
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
                  Design thinking is a methodology that attempts to solve complex problems in a
                  creative and user-centric way. Core features
                  <br /> of the design thinking methodology include
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
          {/* <div className="soctor-about-section">
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
          </div> */}

          {/* <div>
            <div className="col-12 py-5">
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
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
