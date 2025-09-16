import { Metadata } from 'next';
import Layout from '@component/components/layouts/layout';

import React from 'react';
import { pageMetadata } from '@component/lib/metadata';

export const metadata: Metadata = pageMetadata.caseStudies.stJude;

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="soctor-logo mb-2 col-5">
            <img src="/images/svg/st-jude.svg" alt="st-jude  Logo" />
          </div>
          <div className="row my-4 d-flex justify-content-between">
            <div className="col-md-6 col-md-4 mb-5">
              <div className="healthcare-text-container">
                <div className="reflect stroke-text mb-5">
                  <h2>Healthcare</h2>
                </div>
                <div className="percentage-container text-white">
                  Digital Transformation of St. Jude India ChildCare Centres
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="socoter-img">
                <img
                  src="/images/st-jude-india-childCare.jpeg"
                  alt="st jude india childCare image"
                  className="health-care-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="about-introduction">Introduction</div>
            <div className="col-12">
              <div className="about-content">
                <h2>About Project</h2>
                <p>
                  Brewcode proudly partnered with St. Jude India ChildCare Centres to drive their
                  digital transformation by transitioning their .Net website to WordPress. Our team
                  integrated the CCAvenue payment gateway to streamline donations, implemented SEO
                  optimizations to boost online visibility, and developed a custom backup system to
                  ensure data integrity. This project underscores Brewcode's commitment to
                  leveraging technology for impactful social change.
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
                    St. Jude India ChildCare Centres faced significant challenges with their
                    existing .Net website, including limited scalability, a cumbersome donation
                    process, and inadequate online visibility. Additionally, the lack of integrated
                    SEO features and an unreliable backup system hampered their ability to attract
                    and retain donors. In the broader market, many NGOs struggle with outdated
                    websites that impede effective fundraising and outreach, highlighting a pressing
                    need for modern, user-friendly digital solutions.
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
                    />
                    Business Goal
                  </h2>
                  <p className="section-description">
                    The primary business goal of this project was to enhance St. Jude India
                    ChildCare Centres' digital infrastructure to support their mission more
                    effectively. This involved transitioning their website to a scalable and
                    user-friendly WordPress platform, integrating a seamless CCAvenue payment
                    gateway for donations, and implementing robust SEO strategies to improve online
                    visibility.
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
                  St. Jude India ChildCare Centres’ digital transformation targets philanthropists
                  and online donors, focusing
                  <br /> on user-friendly donation processes and enhanced web presence for social
                  impact.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading genarl-padding">Potential Donors</strong>
            </div>
            <div className="col-md-9">
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
                      Individuals and organizations looking to contribute to a worthy cause, seeking
                      a seamless and secure online donation experience.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading">Existing Donors</strong>
            </div>
            <div className="col-md-9">
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
                      Current supporters who require a reliable and user-friendly platform to
                      continue their contributions and stay informed about the organization's
                      impact.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading">Volunteers and Supporters</strong>
            </div>
            <div className="col-md-9">
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
                      People interested in volunteering opportunities and updates about St. Jude
                      India ChildCare Centres, who need easy access to information and engagement
                      channels.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading">
                Healthcare and Childcare
                <br /> Professionals
              </strong>
            </div>
            <div className="col-md-9">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <img
                      src="/images/list-page-arrow.svg"
                      alt=""
                      className="list-page-arrow-icon mt-2 "
                    />
                    <p>
                      Professionals seeking collaboration opportunities and insights into the
                      organization's work, requiring detailed and accessible information about
                      initiatives and programs.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading">General Public</strong>
            </div>
            <div className="col-md-9">
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
                      Individuals interested in learning more about St. Jude India ChildCare
                      Centres' mission and achievements, looking for engaging and informative
                      content.
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

                <p className="text-center">
                  We worked with different stakeholders to understand product, and a regular connect
                  with them <br />
                  helped us understand user stories and needs
                </p>
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
                  Existing .Net platform lacked scalability and was difficult to update.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {' '}
                  <span className="step-number">2</span>
                </p>
                <p className="gap-description">
                  Lack of integrated SEO features resulted in low search engine rankings, reducing
                  website reach and visibility.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {' '}
                  <span className="step-number">3</span>
                </p>
                <p className="gap-description">
                  Absence of a reliable backup system risked data loss and compromised data
                  security.
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
                  Website lacked interactive features to keep donors informed and attract new
                  supporters, limiting engagement.{' '}
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {' '}
                  <span className="step-number">5</span>
                </p>
                <p className="gap-description">
                  The donation system was cumbersome and not user-friendly, potentially leading to
                  lost contributions.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {' '}
                  <span className="step-number">6</span>
                </p>
                <p className="gap-description">
                  Website lacked interactive features to keep donors informed and attract new
                  supporters, limiting engagement.{' '}
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
          <div className="soctor-about-section">
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
              <div className="col-md-4">
                <img
                  src="/images/take-medicines.png"
                  alt="Take Medicines"
                  className="process-image"
                  loading="lazy"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/images/take-medicines.png"
                  alt="Take Medicines"
                  className="process-image"
                  loading="lazy"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/images/take-medicines-small-img.png"
                  alt="Take Medicines Small Image"
                  className="process-image"
                  loading="lazy"
                />
              </div>
              <div className="col-md-5">
                <img
                  src="/images/grab-medicine.png"
                  alt="Grab Medicine"
                  className="process-image"
                  loading="lazy"
                />
              </div>
              <div className="col-md-5">
                <img
                  src="/images/take-medicines-img.png"
                  alt="Take Medicines Image"
                  className="process-image take-medicines-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* <div>
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
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
