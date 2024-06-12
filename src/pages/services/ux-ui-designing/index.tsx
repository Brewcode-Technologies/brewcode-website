import ReusableButton from "@component/components/customHooks/reusableContactButton";
import useNavigation from "@component/components/customHooks/useNavigation";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Index: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
       <Head>
        <title>UX/UI designing | Brewcode Technology Private Limited</title>
        <meta name="description" content="Harness the power of IaaS for seamless scalability and enhanced performance. Learn how Brewcode leverages IaaS to optimize costs, ensure robust operations, and drive business growth." />
      </Head>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
        }}
      >
        <div className="cloud-image p-4">
          <Image
            src="/images/img.jpg"
            alt="cyber security image"
            fill
            className="mb-3 hero-cloud"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="hero-section-content">
              <h1 className="cyber-security-services-heading mb-4 text-center">
              HumanizingDigital Experiences for <br />
                Global Businesses
              </h1>

              <p className=" services-description text-center">
              10+ Years of Helping Enterprises with <br />
                Product Strategy | UX Design | Front-End Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="overview-main">
        <div className="container">
          <div className="row d-flex justify-content-between my-5">
            <div className="col-md-8">
              <h3 className="overview-title mb-4">Overview</h3>
              <p className="overview-short-description mb-5">
                Designing the Future: UI/UX That
                <br /> Connects
              </p>
              <p className="overview-detail mb-3">
                In the realm of digital interaction, UI/UX design stands as the
                bridge between technology and the user. At Brewcode Technology,
                we craft interfaces that are not only visually stunning but also
                intuitively functional. Our designs are user-centric, ensuring
                that every touchpoint is an opportunity for engagement and
                satisfaction. We believe that good design is about creating
                experiences that feel as good as they look, fostering a seamless
                connection between your business and your audience.
              </p>
              <p className="overview-detail mb-3">
                This content emphasizes the importance of UI/UX design in
                creating meaningful connections with users and highlights
                Brewcode Technology’s commitment to excellence in this field.
              </p>
              <div className="mt-5">
                <ReusableButton
                  label="Contact Us"
                  navigateTo={() => navigate("contact-us")}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-container">
                <img
                  alt="Detailed view of application service offerings"
                  src="/images/designing-the-future.jpg"
                  className="overview-image"
                  property="true"
                />
              </div>
            </div>
          </div>
          <div className="container my-4 our-distenctive-div">
            <div className="row d-flex  justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <h3 className="our-section-heading mb-5">UI/UX Development</h3>
              </div>

              <div className="col-lg-7 col-md-6 col-12">
                <div className="row mb-4 d-flex  justify-content-between">
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        
                          <h4 className="service-title ui-ux-heading mb-3">
                            Frontend and Backend Development
                          </h4>
                          <p className="service-description">
                            We deliver a full range of change- the-business,
                            run-the-business and cross-functional IT application
                            services that are scalable, robust, secure and
                            maintainable.
                          </p>
                      
                      </div>
                      <div>
                        <h4 className="service-title ui-ux-heading mb-3">
                          API Development & Integration Servicess
                        </h4>
                        <p className="service-description">
                          Our investments in innovative solutions ensure you
                          benefit from the latest accelerators, methodologies
                          and engagement models tailored to meet your evolving
                          needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                  <div className="d-flex flex-column justify-content-between">
                    <div className="mb-5">
                      <h4 className="service-title ui-ux-heading mb-3">
                        Database Management
                      </h4>
                      <p className="service-description">
                        Our deep industry domain knowledge and technical
                        expertise enable us to deliver transformational results.
                        Our industrialized approach reduces costs, boosts
                        predictability and enhances agility.
                      </p>
                    
                    </div>
                    <div className="mb-3">
                      <h4 className="service-title ui-ux-heading mb-3">
                        Database Management
                      </h4>
                      <p className="service-description">
                        Our deep industry domain knowledge and technical
                        expertise enable us to deliver transformational results.
                        Our industrialized approach reduces costs, boosts
                        predictability and enhances agility.
                      </p>
                    
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <h3 className="our-section-heading mb-4">Insights for UI/UX projects</h3>
             
            </div>
            <div className="container my-4">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <div className="image-card-container">
                      <Image
                        src="/images/value-proposition.jpg"
                        className="card-img-top"
                        alt="application support and services Image"
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                      Value Proposition of Indian <br/>UX Agencies for US Businesses
                      </h5>
                      <p className="card-text">
                      The contemporary digital world with its cut-throat competitiveness has truly made it a task of paramount importance...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/rise-of-the-planet.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      priority
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                      The Rise of the Planet of<br/> Design Agencies
                      </h5>
                      <p className="card-text">
                      Time and effort are the crucial components of a marketplace and design is the most crucial component of brand...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/unlocking-b-2-b.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      priority
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                      Unlocking B2B Growth with<br/> Powerful UX Designs
                      </h5>
                      <p className="card-text">
                      In our contemporary world where an ever-increasing number of businesses are operating and giving more importance.
                      </p>
                    </div>
                  </div>
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
