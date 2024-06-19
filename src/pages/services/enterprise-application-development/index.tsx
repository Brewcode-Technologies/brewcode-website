import ReusableButton from "@component/components/customHooks/reusableContactButton";
import useNavigation from "@component/components/customHooks/useNavigation";
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
        <title> Enterprise Application Development | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Project Timeline using Next.js and Bootstrap"
        />
       
      </Head>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
        }}
      >
        <div className="cloud-image">
          <Image
            alt="Comprehensive application services icon"
            src="/images/img.jpg"
            fill
            className="mb-3 hero-cloud"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="row">

            <div className="hero-section-content">
              <h1 className="services-header">
                Enterprise Application Development
              </h1>
              <p className="services-description text-center">
                Enhancing business resilience by addressing the complexity{" "}
                <br /> of the application landscape
              </p>
              <ul className="services-menu">
                <li>Overview</li>
                <li>Capabilities</li>
                <li>Services</li>
                <li>Success Stories</li>
                <li>Partner</li>
                <li>Recognitions</li>
              </ul>
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
                As enterprises grapple with the rising complexity of the digital
                landscape, Brewcode is here to assist. The emergence of
                cloud-based applications, the proliferation of mobility
                solutions, and the convergence of AI are driving businesses from
                all sectors to seek quicker and scalable application development
                solutions that cater to their unique needs.
              </p>
              <p className="overview-detail mb-3">
                At Brewcode, we specialize in helping organizations effectively
                manage their application portfolios with flexible and customized
                solutions. We empower our clients by delivering transformative
                value through a combination of our proven deployment techniques
                and industry best practices.
              </p>
              <p className="overview-detail mb-3">
                Our Application Development and Maintenance Services extend
                beyond cost optimization, focusing on building true value,
                enhancing customer experiences, and fostering innovation.
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
            <div className="row d-flex justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <h3 className="our-section-heading mb-5">
                  Iaas architecture and <br /> related components
                </h3>
                <p className="our-section-subheading mb-5">
                  Redefining Application Success
                  <br /> through the Symphony of
                  <br /> Expertise, Innovation and
                  <br /> Results
                </p>
                <p className="our-section-text mb-4">
                  IaaS architecture comprises several core components that
                  enable efficient and scalable operations. The primary compute
                  resources include Virtual Machines (VMs) and containers, which
                  provide the essential computing power needed for various
                  applications. Storage solutions in IaaS encompass block
                  storage for raw volumes, object storage for unstructured data
                  like files and multimedia, and file storage for shared access
                  across multiple VMs.
                </p>
                <p className="our-section-text">
                  Networking is facilitated through Virtual Private Clouds
                  (VPCs), load balancers to ensure high availability, and
                  firewalls or security groups for traffic control.
                </p>
              </div>

              <div className="col-lg-7 col-md-6 col-12 ">
                <div className=" row mb-5 d-flex justify-content-between p-0">
                  <div className="col-6">
                    <div className="mb-3">
                      <Image
                        alt="Comprehensive application services icon"
                        width={50}
                        height={50}
                        src="/images/svg/comprehencive.svg"
                        className="mb-4"
                        priority
                      />
                      <h4 className="service-title mb-3">
                        Comprehensive application
                        <br />
                        services
                      </h4>
                      <p className="service-description">
                        We deliver a full range of change- the-business,
                        run-the-business and cross-functional IT application
                        services that are scalable, robust, secure and
                        maintainable.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <Image
                        alt="Harnessing technology icon"
                        width={50}
                        height={50}
                        src="/images/svg/Harnesing.svg"
                        className="mb-4"
                        priority
                      />
                      <h4 className="service-title mb-3">
                        Harnessing industry expertise
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
                <div className=" row mb-4 d-flex justify-content-between p-0">
                  <div className="col-6">
                    <div className="mb-3">
                      <Image
                        alt="Comprehensive application services icon"
                        width={50}
                        height={50}
                        src="/images/svg/Innovative_.svg"
                        className="mb-4"
                        priority
                      />
                      <h4 className="service-title mb-3">
                        Innovative accelerators
                      </h4>
                      <p className="service-description">
                        Our investments in innovative solutions ensure you
                        benefit from the latest accelerators, methodologies and
                        engagement models tailored to meet your evolving needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <Image
                        alt="Harnessing technology icon"
                        width={50}
                        height={50}
                        src="/images/svg/Innovative_.svg"
                        className="mb-4"
                        priority
                      />
                      <h4 className="service-title mb-3">
                        Innovative accelerators
                      </h4>
                      <p className="service-description">
                        Our investments in innovative solutions ensure you
                        benefit from the latest accelerators, methodologies and
                        engagement models tailored to meet your evolving needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <h3 className="our-section-heading mb-4">Our Services</h3>
              <h5 className="our-section-subheading mb-4">
                Your Path to Application Brilliance
              </h5>
              <p className="our-section-text col-12">
                Unlock the potential of your applications and ensure they
                continue to drive your business forward with exceptional user
                experiences and unrivaled
                <br /> performance. Experience the future of application
                excellence with our innovative services.
              </p>
            </div>
            <div className="row my-4">
              <div className="col-3">
                <div className="Services-card">
                  <Image
                    src="/images/services-card-img2.jpeg"
                    className="card-img-top"
                    alt="application support and services Image"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title my-3">
                      Application support and maintenance
                    </h5>
                    <p className="card-text ">
                      Redefine application support and maintenance with our
                      innovative solutions that propel your organization forward
                      with experience-centric and business- aligned outcomes.
                      Leveraging intelligent automation and contextualized
                      application support operations, we deliver the results you
                      need to build your future today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="Services-card">
                  <Image
                    src="/images/our-services-img2.jpeg"
                    className="card-img-top"
                    alt="application support and services Image"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title my-4">
                      Application Modernization{" "}
                    </h5>
                    <p className="card-text">
                      Transform your application ecosystems by harnessing the
                      power of our Fenix-driven cloud adoption strategy,
                      strategic consultancy, profound knowledge of legacy
                      systems and agile development methodologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="Services-card">
                  <Image
                    src="/images/our-services-img5.jpeg"
                    className="card-img-top"
                    alt="application support and services Image"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                  <div className="card-body ">
                    <h5 className="card-title my-3">
                      Modern Application Development
                    </h5>
                    <p className="card-text">
                      Leveraging Gen Al, we enable quicker development cycles,
                      fewer human errors and faster time-to- market for your
                      applications by automating routine and time- consuming
                      aspects of development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="Services-card">
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
                      Digital Equality Engineering
                    </h5>
                    <p className="card-text framework">
                      Framework and methodology that enables quality across the
                      software development lifecycle (SDLC) with test
                      automation, AI/ML-based testing and shift-left practices,
                      enabling all stakeholders to contribute to quality.
                    </p>
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
