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
        <title>
          Full Stack Development | Brewcode Technology Private Limited
        </title>
        <meta
          name="description"
          content="Comprehensive full-stack development services to empower your digital presence. Partner with us to transform your vision into reality with cutting-edge full-stack solutions."
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
                Empower Your Digital Presence
              </h1>

              <p className=" services-description text-center">
                Brewcode Technology Private Limited embodies the pinnacle of
                full-stack development
                <br /> merging innovative design with powerful backend systems
                to bring your digital
                <br /> aspirations to life.
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
                Faster Building, Smarter
                <br /> Management
              </p>
              <p className="overview-detail mb-3">
                At Brewcode Technology Private Limited, we are dedicated to
                accelerating your business growth through comprehensive
                full-stack development services. Our expertise spans the entire
                development cycle, from sophisticated front-end design to robust
                back-end solutions. We ensure seamless integration with
                databases, servers, and APIs, while our DevOps
                practices streamline deployment and scalability. With a keen
                focus on version control systems, we maintain the highest
                standards of quality and innovation. Partner with us to
                transform your vision into reality with cutting-edge full-stack
                solutions.
              </p>
              <p className="overview-detail mb-5">
                We brewcode Technology Private Limited full-stack development
                company, we cover every aspect of full-stack development -
                front-end and back-end, databases, servers, APIs, DevOps, and
                version controlling systems. Set a faster pace for the growth of
                your business with our full-stack development services.
              </p>

              <ReusableButton
                label="Contact Us"
                navigateTo={() => navigate("/contact-us")}
              />
            </div>
            <div className="col-md-4">
              <img
                alt="Detailed view of application service offerings"
                src="/images/overview-img.jpeg"
                width={300}
                height={300}
                className="overview-image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="container my-4 our-distenctive-div">
            <div className="row d-flex  justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <h3 className="our-section-heading mb-5">
                  Full Stack Development
                  <br /> Services We Provide
                </h3>
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
                          expertise enable us to deliver transformational
                          results. Our industrialized approach reduces costs,
                          boosts predictability and enhances agility.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h4 className="service-title ui-ux-heading mb-3">
                          Dedicated Full Stack Developers{" "}
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
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <h3 className="our-section-heading mb-4">
                Why Relevant for full-stack projects?
              </h3>
            </div>
            <div className="container my-3">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card full-stack-card">
                    <div className="image-card-container">
                      <Image
                        src="/images/agile-methodology.jpg"
                        className="card-img-top"
                        alt="application support and services Image"
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Agile methodology</h5>
                      <p className="card-text">
                        We follow an agile development methodology to bring your
                        idea to a fully functional product with a rich user
                        experience at its core.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card full-stack-card">
                    <Image
                      src="/images/strict-project-management.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Strict project management</h5>
                      <p className="card-text">
                        We assign a project manager to manage tasks, oversee
                        complex processes, and coordinate collaboration between
                        team members and clients.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card full-stack-card">
                    <Image
                      src="/images/employee-retention.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        80% employee retention rate{" "}
                      </h5>
                      <p className="card-text">
                        We pay special attention to employee retention because
                        clients are interested in hiring full-stack developers
                        for the long term.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card full-stack-card">
                    <Image
                      src="/images/services-card-img1.png"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title my-3">
                        High customer satisfaction rating{" "}
                      </h5>
                      <p className="card-text framework">
                        Our full-stack development services deliver a high
                        client retention rate with 100% customer satisfaction
                        for every project.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card full-stack-card">
                    <Image
                      src="/images/services-card-img2.jpeg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Experienced developers </h5>
                      <p className="card-text">
                        Our full-stack developers have proven expertise across
                        all industry verticals, so you can count on them to
                        perform numerous tasks.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card full-stack-card">
                    <Image
                      src="/images/our-services-img2.jpeg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title my-3">Risk handling </h5>
                      <p className="card-text framework">
                        We are constantly improving our practices of risk
                        management. It makes us not just a supplier of
                        top-quality full-stack development services but a
                        trustworthy partner.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-suite-of-full-stack-bg">
          <div className="container">
            <h3 className="full-stack-section-heading text-center">
              Our suite of full-stack development services include
            </h3>
            <div className="full-stack-ul">
              <div className="col-md-4">
                <li className="full-stack-list-item">
                  Full-Stack Web Development
                </li>
                <li className="full-stack-list-item">
                  Full-Stack Application Development
                </li>
                <li className="full-stack-list-item">
                  Full-Stack Mobile Development
                </li>
                <li className="full-stack-list-item">
                  Full-Stack Software Development
                </li>
                <li className="full-stack-list-item">
                  Server & Hosting Services
                </li>
                <li className="full-stack-list-item">
                  Enterprise Full Stack Solutions
                </li>
              </div>
              <div className="col-md-4">
                <li className="full-stack-list-item">
                  Business Process Workflow Automation
                </li>
                <li className="full-stack-list-item">
                  Overall Project Management
                </li>

                <li className="full-stack-list-item">UI/UX Development</li>
                <li className="full-stack-list-item">Cloud Integration</li>
                <li className="full-stack-list-item">
                  App and System Integration
                </li>
                <li className="full-stack-list-item">DevOps</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
