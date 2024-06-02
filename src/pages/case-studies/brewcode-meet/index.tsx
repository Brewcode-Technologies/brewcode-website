import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React from "react";

const Career: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Soctor Healthcare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black py-5">
        <div className="container">
          <div className="socoter-hero-section-container my-5">
            <div className="col-md-6 ">
              <div className="soctor-logo d-flex text-center mb-5">
                <img src="/images/svg/soctor.svg" alt="Soctor Logo" />
              </div>

              <div className="healthcare-text-container">
              <div className="reflect stroke-text ">
                <h2>Healthcare</h2>
              </div>
                <span className="user-adoption">
                  80% Increase In User Adoption
                </span>
              </div>
            </div>
            <div className="col-md-6 socoter-img-container">
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
                    <span className="icon">📄</span> Problem Statement
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
                    <span className="icon">🎯</span> Business Goal
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
                <span className="icon text-center">👥</span>
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
            <div className="col-md-3">
              <strong className="audience-list-heading genarl-padding">
                General Public
              </strong>
            </div>
            <div className="col-md-9">
              <li className="target-audience-item">
                <div className="d-flex flex-column">
                  <div className="d-flex">
                    <span className="icon">➡</span>
                    <p>
                      Individuals who frequently self-medicate based on past
                      experiences, advice from unqualified sources, or online
                      information.
                    </p>
                  </div>
                  <div className="d-flex">
                    <span className="icon">➡</span>

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
                    <span className="icon">➡</span>
                    <p>
                      Individuals who frequently self-medicate based on past
                      experiences, advice from unqualified sources, or online
                      information.
                    </p>
                  </div>
                  <div className="d-flex">
                    <span className="icon">➡</span>

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
                    <span className="icon">➡</span>
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
                    <span className="icon">➡</span>
                    <p>
                      Tech-savvy individuals who are comfortable using digital
                      platforms for health information and advice.
                    </p>
                  </div>
                  <div className="d-flex">
                    <span className="icon">➡</span>

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
                    <span className="icon">➡</span>
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
                    <span className="icon">➡</span>
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
            <div className="about-introduction">Audience</div>
            <div className="col-12">
              <div className="about-content">
                <span className="icon text-center">👥</span>
                <h2 className=" text-center">Descover</h2>

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
              <div className="d-flex  p-4">
                <span className="step-number">1</span>
                <p className="gap-description">
                  Lack of a trusted, user-friendly platform for accurate and
                  personalized self-medication advice.
                </p>
              </div>
              <div className="d-flex  p-4">
                <span className="step-number">2</span>
                <p className="gap-description">
                  Reliance on unqualified sources due to the unavailability of
                  easily accessible professional medical guidance.
                </p>
              </div>
              <div className="d-flex  p-4">
                <span className="step-number">3</span>
                <p className="gap-description">
                  Misuse and health risks stemming from improper
                  self-medication.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column col-md-5">
              <div className="d-flex  p-4">
                <span className="step-number">4</span>
                <p className="gap-description">
                  Insufficient regulation of online medical information.
                </p>
              </div>
              <div className="d-flex  p-4">
                <span className="step-number">5</span>
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
                <span className="icon text-center mb-1">👥</span>
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
            <div className="">
              <div className="process-image-container">
                <img src="/images/human.jpg" className="process-image" />
              </div>
            </div>
          </div>
          <h2 className="text-center final-ui-screens">How It Works</h2>
          <div className="soctor-about-section">
            <div className="about-introduction">Process</div>
            <div className="row d-flex flex-wrap justify-content-center g-4">
              <div className="col-md-4">
                <img
                  src="/images/take-medicines.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/images/take-medicines.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/images/take-medicines-small-img.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-5">
                <img
                  src="/images/grab-medicine.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-5">
                <img
                  src="/images/take-medicines-img.png"
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
                  className="process-image"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-symptoms.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-medical-history.png"
                  className="process-image"
                />
              </div>

              <div className="col-md-3">
                <img
                  src="/images/soctor-travel-sickness-personaldetails.png"
                  className="process-image"
                />
              </div>
            </div>
            <div className="row d-flex flex-wrap justify-content-center g-4">
              <div className="col-md-3">
                <img
                  src="/images/soctor-safe-self-medication-advice.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-travel-sleep.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-symptoms.png"
                  className="process-image"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="/images/soctor-medical-history.png"
                  className="process-image"
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
