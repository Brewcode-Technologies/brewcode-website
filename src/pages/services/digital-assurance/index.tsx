import ReusableButton from "@component/components/customHooks/reusableContactButton";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Index: React.FC = () => {
  const router = useRouter();

  
  const navigate = (url: string) => {
    router.push(url);
  };
  return (
    <Layout>
      <Head>
        <title> Digital Assurance | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Immersive AR/VR Solutions to Elevate Your Business"
        />
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
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="hero-section-content">
              <h1 className="cyber-security-services-heading mb-3">
                Digital Assurance
              </h1>

              <p className=" services-description text-center">
                Discover | Design | Deliver
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
                Optimizing Software Delivery with Value Stream Mapping and
                Automation:
              </p>
              <p className="overview-detail mb-3">
                A failure to identify inefficiencies in a system impacts the
                software delivery and impedes the digital transformation
                journey. Therefore, it is crucial to establish robust value
                stream mapping and automation strategies enabled by an
                enterprise’s metrics-driven approach.
              </p>
              <p className="overview-detail mb-3">
                As a leader in digital and cloud transformation with deep
                engineering expertise, Virtusa is well-positioned to solve
                challenges by offering
              </p>
              <div className="mb-4">
                <ReusableButton
                  label="Contact Us"
                  navigateTo={() => navigate("/contact-us")}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-container">
                <img
                  alt="Detailed view of application service offerings"
                  src="/images/digital-assurance-overview-image.jpg"
                  className="overview-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="container my-4 our-distenctive-div">
            <div className="row d-flex  justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <h3 className="our-section-heading mb-5">
                  What differentiates Virtusa’s digital assurance services from
                  our competitors?
                </h3>
              </div>

              <div className="col-lg-7 col-md-6 col-12">
                <div className="row mb-4 d-flex  justify-content-between">
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        <div className="">
                          <div className="">
                            <Image
                              alt="Comprehensive application services icon"
                              width={50}
                              height={50}
                              src="/images/svg/digital-assurance-icon2.svg"
                              className="mb-4"
                              loading="lazy"
                            />
                          </div>
                          <h4 className="service-title mb-3">Discover</h4>
                          <p className="service-description">
                            Assessing the current SDLC Capability Levels
                            involves evaluating value streams to arrive at a
                            baseline scorecard for overall performance index,
                            capability, and practice scores. The actionable
                            roadmap should include tool and process
                            rationalization, as well as a business value
                            priority matrix.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="">
                          <Image
                            alt="Harnessing technology icon"
                            width={50}
                            height={50}
                            src="/images/svg/digital-assurance-icon.svg"
                            className="mb-4"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="service-title mb-3">Deliver</h4>
                        <p className="service-description">
                          Seamless Transition involves fostering collaboration
                          across teams to ensure a flawless transition.
                          Hyperautomation, covering release automation, test
                          automation, and infrastructure and operations
                          automation, is essential for Automation Coverage.
                          Running test execution to provide key deliverables in
                          a timely fashion ensures effective management of Test
                          Artifacts. Lastly, adopting a factory model comprising
                          a core flex team enables scaled delivery and
                          facilitates Team Ramp-Up.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <div className="">
                        <Image
                          alt="Harnessing technology icon"
                          width={50}
                          height={50}
                          src="/images/svg/digital-assurance-icon1.svg"
                          className="mb-4"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="service-title mb-3">Design</h4>
                      <p className="service-description">
                        The QE Blueprint involves establishing standardized
                        SOPs, processes, and strategies for end-to-end Quality
                        Engineering. This includes prototyping and piloting
                        appropriate test frameworks and accelerators to enable
                        rapid prototyping and implementation. Additionally,
                        designing and creating the necessary test infrastructure
                        is crucial for supporting the QE process effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5 d-flex justify-content-center">
            <div className="col-8 ">
              <h5 className="our-section-subheading mb-4 text-center">
                Help clients navigate through their digital transformation
                journey by leveraging end-to-end engineering capabilities.
              </h5>
            </div>
            <div className="container my-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <div className="image-card-container">
                      <Image
                        src="/images/svg/advisory-image.jpg"
                        className="card-img-top"
                        alt="application support and services Image"
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Advisory</h5>
                      <p className="card-text">
                        Enhance operational efficiencies and build on optimized
                        pathway with current landscape assessment using Brewcode
                        steamlined QA process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/data-quality-assuarance.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                      Data quality assuarance
                      </h5>
                      <p className="card-text">
                      Secure and accelerate software deliverywith Brewcode smart data testing solutions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/non-functional-assurance.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                      Non functional 
                        <br /> assurance
                      </h5>
                      <p className="card-text">
                        Ensure the safety of your data and applications with our
                        Virtual Private Clouds (VPCs), load balancers, and
                        robust firewall protection. Our secure networking
                        infrastructure offers peace of mind, allowing you to
                        focus on your business without worrying about cyber
                        threats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/hyper-automation.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    
                    />
                    <div className="card-body">
                      <h5 className="card-title my-3">
                      Hyper-Automation
                      </h5>
                      <p className="card-text framework">
                      Devlop an enhanced and streamlined  user software development process with Brewcode AI based test life cycle automation.
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
