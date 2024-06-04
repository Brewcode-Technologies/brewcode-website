import ReusableButton from "@component/components/customHooks/reusableContactButton";
import useNavigation from "@component/components/customHooks/useNavigation";
import Layout from "@component/components/layouts/layout";
import Image from "next/image";
import React from "react";

const Index: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Layout>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="cloud-image">
          <img
            alt="Comprehensive application services icon"
            src="/images/img.jpg"
            className="mb-3 hero-cloud"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="services-content">
              <h1 className="services-header">Responsive UI Development</h1>
              <p className=" services-description text-center">
                Exhibit your digital footprint on various gadgets with a
                Responsive
                <br /> UI development approach.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-main">
        <div className="container">
          <div className="row d-flex justify-content-between my-5">
            <div className="col-md-7">
              <h3 className="overview-title mb-4">Overview</h3>
              <p className="overview-short-description mb-5">
                We help B2B companies in achieving their Engagement and
                <br /> Conversion goals through our UX Design and Front-End
                <br /> Engineering.
              </p>
              <p className="overview-detail mb-5">
                Collaboration is easy with us. We use tools that you are
                comfortable with (Slack, Figma, FigJam, Discord, Miro,
                Abstract). Seamlessly blend with your internal Product and UX
                teams. Iterate faster with our design team.
              </p>

              <div className="">
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
                  src="/images/web-development-image.jpg"
                  className="overview-image"
                  property="true"
                />
              </div>
            </div>
          </div>
          <div className="container my-4 our-distenctive-div">
            <div className="row d-flex  justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <h3 className="our-section-heading mb-5">
                  Need Of A Responsive UI
                  <br /> Development.{" "}
                </h3>
                <p className="our-section-subheading mb-5">
                  Adaptive Design for Every Screen” Crafting Fluid
                  <br /> Experiences Across Devices
                </p>
                <p className="our-section-text mb-4">
                  Robotic Process Automation revolutionizes productivity by
                  automating routine tasks, enabling a focus on higher-value
                  work. It ensures accuracy and speed in processes, driving
                  significant cost savings and operational excellence.
                </p>
              </div>

              <div className="col-lg-7 col-md-6 col-12">
                <div className="row mb-4 d-flex  justify-content-between">
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        <h4 className="service-title mb-3">
                          Visualize yourInnovation
                        </h4>
                        <p className="service-description">
                          Reduce the time to market. We have the expert team
                          that helps you hit the ground running. Get to product
                          market fit as early as possible.
                        </p>
                      </div>
                      <div className="mt-4">
                        <h4 className="service-title mb-3">
                          Your Trusted Design Partner
                        </h4>
                        <p className="service-description">
                          Collaboration is easy with us. We use tools that you
                          are comfortable with (Slack, Figma, FigJam, Discord,
                          Miro, Abstract). Seamlessly blend with your internal
                          Product and UX teams. Iterate faster with our design
                          team.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        <h4 className="service-title mb-3">
                          Pixel Perfect Front-End Engineering
                        </h4>
                        <p className="service-description">
                          Our Front-End Engineering maestros bring your ideas to
                          life. With a keen eye for detail, flawless execution,
                          and efficient delivery. These experts always ensure
                          that the transition from your design to the
                          application is absolutely pixel perfect.{" "}
                        </p>
                      </div>
                      <div className="">
                        <h4 className="service-title mb-3">Boost visibility</h4>
                        <p className="service-description">
                          When you use responsive design, you can manage one
                          website from a single set of hyperlinks, minimizing
                          the amount of time you have to spend maintaining your
                          site.{" "}
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
              <h5 className="our-section-subheading mb-4">
                Empowering Your Infrastructure with IaaS
              </h5>
              <p className="our-section-text col-12">
                In our design team, we understand the concept of developing
                Responsive UI Development to allow the layout to adapt according
                to the resolution of the user's computer screen without
                diminishing the content. Our designers use CSS and HTML to
                adjust the size and display of the site. With responsive design,
                we maintain the key concept that is fluidity and
                proportionality.
              </p>
            </div>
            <div className="container my-4">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <div className="image-card-container">
                      <Image
                        src="/images/Iaas-compute-esources-image.jpg"
                        className="card-img-top"
                        alt="application support and services Image"
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Mobile-first strategy </h5>
                      <p className="card-text">
                        Mobile devices have a completely different interaction
                        with software from desktop computers due to content
                        scaling, touch-screen gestures, and device-specific
                        keys.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/insurance-image.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      priority
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Dedicated to your business goals{" "}
                      </h5>
                      <p className="card-text">
                        The design team at brewcode always integrates your
                        unique requirements with the latest trends in responsive
                        website design and web portal design. Before launching a
                        project, we collaborate closely with you to understand
                        all your workflows and business objectives.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/retail-image.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      priority
                    />
                    <div className="card-body">
                      <h5 className="card-title">Result-oriented </h5>
                      <p className="card-text">
                        Throughout the project, we show you the business
                        outcomes of our responsive web design services. The data
                        we provide you, including visitor time, user engagement
                        rate, and conversions, is based on our extensive market
                        and business analysis, as well as our user research.{" "}
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
