import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React from "react";

const Soctor: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Soctor Healthcare | Brewcode Technology Private Limited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="soctor-logo mb-2 col-5">
            <img src="/images/svg/soctor.svg" alt="Soctor Logo" />
          </div>
          <div className="row my-4 d-flex justify-content-between">
            <div className="col-md-6 col-md-4 mb-5">
              <div className="healthcare-text-container">
                <div className="reflect stroke-text mb-5">
                  <h2>Healthcare</h2>
                </div>
                <div className="percentage-container">
                  <div className="percentage">
                    80% Increase In User Adoption
                    <p className="line"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="socoter-img">
                <img
                  src="/images/health-care-img.jpeg"
                  alt="health care image"
                  className="health-care-img"
                />
              </div>
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="about-introduction">Introduction</div>
            <div className="col-md-8">
              <div className="about-content">
                <h2>About Project</h2>
                <p>
                  Soctor helps in manage minor health problems like cold, cough,
                  fever, loose motions and many more conditions with commonly
                  available medicines using self-treatment advice developed by
                  doctors. It's easy. It's free.
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
                    />
                    Problem Statement
                  </h2>
                  <p className="section-description">
                    Irresponsible self-medication is a significant issue in
                    India, with 52% of individuals relying on previous
                    experiences, unqualified neighborhood pharmacists, and
                    online information, leading to serious health risks and
                    contributing to antibiotic resistance. There is a clear need
                    for a trusted, accessible platform to provide accurate,
                    personalized medical advice to promote safe self-care and
                    mitigate these risks.
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
                    />
                    Business Goal
                  </h2>
                  <p className="section-description">
                    Our business goal is to establish Soctor as the leading
                    platform for safe and responsible self-medication. We aim to
                    provide accurate, personalized medical advice and
                    professional consultations to millions of users. By
                    promoting educated and informed healthcare decisions, we
                    seek to reduce health risks and combat antibiotic
                    resistance.
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
                  to reliance on unqualified sources and lack of<br/> access to
                  reliable medical advice.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading genarl-padding">
                General Public
              </strong>
            </div>
            <div className="col-md-9">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>
                    <p>
                      Individuals who frequently self-medicate based on past
                      experiences, advice from unqualified sources, or online
                      information.
                    </p>
                  </div>
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      People looking for reliable health information and
                      guidance to manage common health issues safely.
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
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>
                    <p>
                      Individuals who frequently self-medicate based on past
                      experiences, advice from unqualified sources, or online
                      information.
                    </p>
                  </div>
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      People looking for reliable health information and
                      guidance to manage common health issues safely.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading">
                Chronic Disease Patients
              </strong>
            </div>
            <div className="col-md-9">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>
                    <p>
                      Patients with chronic conditions who require ongoing
                      medication management and often self-medicate to manage
                      symptoms.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading">Young Adults</strong>
            </div>
            <div className="col-md-9">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  
                    <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>
                    <p>
                      Tech-savvy individuals who are comfortable using digital
                      platforms for health information and advice.
                    </p>
                  </div>
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>

                    <p>
                      This group often turns to the internet for quick health
                      solutions and may benefit from a reliable, personalized
                      platform.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <strong className="audience-list-heading">Caregivers</strong>
            </div>
            <div className="col-md-9">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>
                    <p>
                      Family members or caregivers responsible for the health
                      and medication of others who need trustworthy advice to
                      ensure safe practices.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <strong className="audience-list-heading">
                Rural and Semi-Urban Population
              </strong>
            </div>
            <div className="col-md-9">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                  <img src="/images/list-page-arrow.svg" alt="" className="list-page-arrow-icon mt-2 "/>
                    <p>
                      Communities with limited access to healthcare facilities
                      and professionals, who often rely on local, unqualified
                      pharmacists or online sources for medical advice.{" "}
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
                <h2 className="text-center">Discover</h2>

                <p className="text-center">
                  We worked with different stakeholders to understand product,
                  and a regular connect with them <br />
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
                  {" "}
                  <span className="step-number">1</span>
                </p>
                <p className="gap-description">
                  Lack of a trusted, user-friendly platform for accurate and
                  personalized self-medication advice.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">2</span>
                </p>
                <p className="gap-description">
                  Reliance on unqualified sources due to the unavailability of
                  easily accessible professional medical guidance.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">3</span>
                </p>
                <p className="gap-description">
                  Misuse and health risks stemming from improper
                  self-medication.
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
                  Insufficient regulation of online medical information.
                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">5</span>
                </p>
                <p className="gap-description">
                  Need for better integration of technology and healthcare to
                  provide real-time, reliable, and tailored advice.
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
          <div className="soctor-about-section">
            <div className="about-introduction">Process</div>
            <div className="process-image-container">
              <img
                src="/images/process-image.jpg"
                alt="Human"
                className="process-image"
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
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/images/take-medicines.png"
                  alt="Take Medicines"
                  className="process-image"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/images/take-medicines-small-img.png"
                  alt="Take Medicines Small Image"
                  className="process-image"
                />
              </div>
              <div className="col-md-5">
                <img
                  src="/images/grab-medicine.png"
                  alt="Grab Medicine"
                  className="process-image"
                />
              </div>
              <div className="col-md-5">
                <img
                  src="/images/take-medicines-img.png"
                  alt="Take Medicines Image"
                  className="process-image take-medicines-img"
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

export default Soctor;
