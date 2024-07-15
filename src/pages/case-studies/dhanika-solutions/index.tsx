import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Dhnaika solutions | Brewcode Technology Private Limited</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="soctor-logo col-5 d-flex text-center">
            <img src="/images/svg/dhanika.svg" alt="dhanika solution Logo"   loading="lazy" />
          </div>
          <div className="row my-4 d-flex justify-content-between mb-5">
            <div className="col-md-6 col-md-4">
              <div className="healthcare-text-container">
                <div className="information-technology information-technology-stoke-text">
                  <h2>Information Technology</h2>
                </div>

                <h2 className="iformation-description">
                Dhanika Solutions – Revolutionizing Career<br/> Opportunities  
                </h2>
              </div>
            </div>
           
            <div className="col-md-5 mt-5">
              <div className="socoter-img">
                <img
                  src="/images/dhanika-solutions.jpeg"
                  alt="dhanika solution image"
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
                Brewcode developed a cutting-edge website for Dhanika Solutions, enhancing their digital presence and streamlining the job application process. The site features a sleek design, optimized career portal, and robust CMS, reflecting Dhanika Solutions' innovative ethos. This project positions Dhanika Solutions to attract top talent and elevate their status in the IT services industry.
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
                  Dhanika Solutions, a leader in IT services, struggled with an outdated digital presence and a cumbersome job application process. Their existing website failed to engage users and attract top talent efficiently. They needed a modern, user-friendly platform to enhance their brand and streamline recruitment.
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
                  The business goal was to enhance Dhanika Solutions' digital presence and create a streamlined, user-friendly job application process. They aimed to attract top talent and effectively showcase their innovative services. The objective was to develop a modern website that embodies their brand ethos and improves operational efficiency.
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
                Dhanika Solutions’ revamped website caters to tech-savvy job seekers and IT professionals, showcasing an<br/> optimized career portal and a modern user experience to attract industry-leading talent.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading genarl-padding">
              Job Seekers
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
                    Individuals looking for career opportunities in the IT services sector. The revamped website aims to simplify their job search and application process.                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Clients and Partners</strong>
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
                    Businesses and organizations seeking innovative IT solutions. The site provides detailed information about Dhanika Solutions' services and expertise.                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">
              Industry Professionals              </strong>
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
                    Experts and influencers in the IT industry. The platform showcases Dhanika Solutions' thought leadership and technological advancements.                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">Current Employees</strong>
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
                    Team members of Dhanika Solutions who need access to company updates and internal resources. The website ensures they are well-informed and                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <strong className="audience-list-heading">
              Investors and<br/> Stakeholders
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
                    Individuals and entities interested in the financial and operational performance of Dhanika Solutions. The site offers comprehensive insights into the company’s growth, achievements, and future plans.                    </p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <strong className="audience-list-heading">
              Potential Customers              </strong>
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
                    Individuals and entities interested in the financial and operational performance of Dhanika Solutions. The site offers comprehensive insights into the company’s growth, achievements, and future plans.                    </p>
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
                  We discovered the need for a modern, user-centric website that effectively represents Dhanika Solutions'<br/> innovative brand. Additionally, a streamlined job application process was essential to attract top<br/> talent and improve overall recruitment efficiency.                  </p>
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
                Many IT service providers' websites had overly complex or outdated job portals, making it difficult for candidates to apply.                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">2</span>
                </p>
                <p className="gap-description">
                Competitor websites often lacked cohesive branding and clear messaging, leading to a fragmented user experience.                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">3</span>
                </p>
                <p className="gap-description">
                Existing sites in the market often lacked interactive elements, reducing user engagement and retention.                </p>
              </div>
            </div>
            <div className="d-flex col-md-5 flex-column">
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">4</span>
                </p>
                <p className="gap-description">
                Many IT services websites did not perform well on mobile devices, resulting in a poor user experience for mobile users.                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">5</span>
                </p>
                <p className="gap-description">
                Features such as advanced search filters, personalized user experiences, and real-time application tracking were often missing.                </p>
              </div>
              <div className="d-flex p-4">
                <p>
                  {" "}
                  <span className="step-number">6</span>
                </p>
                <p className="gap-description">
                Existing websites frequently lacked robust security measures, putting user data at risk and reducing trust.                </p>
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
