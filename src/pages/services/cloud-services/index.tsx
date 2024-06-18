import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
        <Head>
     
     <title>Could Services | Brewcode Technology Private Limited</title>
     <meta name="description" content="Immersive AR/VR Solutions to Elevate Your Business" />
   </Head>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
        }}
      >
        <div className="cloud-image cloud-services-image">
          <Image
            src="/images/img.jpg"
            alt="cloud image"
            fill
            className="mb-3 hero-cloud"
            style={{ objectFit: "cover" }}
          />
        </div>
      
          <div className="container">
            <div className="row">
              <div className="hero-section-content">
                <h1 className="services-header">Could Services Platform</h1>
                <p className="text-center">
                  Increase agility, modernize SAP and enterprise applications,
                  <br /> and simplify operations with automation, expertise
                  <br /> and cloud-native services.
                </p>
              </div>
            </div>
          </div>
    
      </div>
      <div className="dark-container pt-5">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-12 col-md-6">
            <Image
              src="/images/cloud.jpeg"
              alt="cloud image"
              width={300}
              height={300}
              className="img-fluid cloud-card-image"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="chart-of-heading mb-4">
              Chart a safe path to your future state
            </h2>
            <p className="chart-of-detail">
              Unlock the full potential of cloud computing with our comprehensive range of services. We specialize in leveraging cloud platforms to enhance scalability, agility, and cost-effectiveness for businesses of all sizes.
            </p>
            <p className="chart-of-detail">
              Technology evolves at a rapid pace. You may be able to envision the target state for your IT environment, but not necessarily how to get there.
            </p>
            <p className="chart-of-detail">
              Brewcode understands how to prioritize the IT environment to meet your business goals. We have the track record, skills, and experience to help you avoid costly mistakes, which can make the difference between realizing a return on your investments and accumulating more technology debt.
            </p>
            <p className="chart-of-detail">
              With deep experience and expertise in IT transformation and modernization across multiple industries, Cloud Strategy & Migration services provide a business case for IT investments and a tailored plan for migration, and optimization to enable successful transformation and modernization for an IT foundation that fuels business growth.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-md-6">
            <h2 className="chart-of-heading mb-4">
              Boost application efficiency
            </h2>
            <p className="chart-of-detail">
              As a premier cloud platform provider, DXC offers a complete ecosystem for agile application development, deployment, and operation, with specialized capabilities for SAP. DXC platform and container capabilities help IT teams quickly deliver business-specific applications.
            </p>
            <p className="chart-of-detail">
              Our container management services deliver fast and secure deployment across multiple clouds. We keep applications running consistently across variable environments, boosting efficiency for implementing, scaling, and managing applications.
            </p>
            <p className="chart-of-detail">
              DXC empowers development teams to quickly deliver applications as new business requirements emerge, regardless of the underlying infrastructure.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <Image
                src="/images/svg/ep_odometer.svg"
                alt="icon"
                width={50}
                height={50}
                className="img-fluid"
                priority={true}
              />
              <hr />
              <p className="chart-of-detail">
                Reduced total cost of ownership by 25%, on average, with cloud-based deployment and consumption-based pricing
              </p>
            </div>
            <div>
              <Image
                alt=""
                width={50}
                height={50}
                className="img-fluid"
                src="/images/svg/mission_svg8.svg"
                priority={true}
              />
              <hr />
              <p className="chart-of-detail">
                Mission-critical support for 5 million+ SAP users and 4,700 SAP HANA systems
              </p>
            </div>
            <div>
              <Image
                src="/images/svg/setting-arrow.svg"
                alt=""
                width={50}
                height={50}
                className="img-fluid"
                priority={true}
              />
              <hr />
              <p className="chart-of-detail">
                Brewcode managed container services used by leading automakers to underpin Innovative autonomous driving programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="section-capabilities py-5">
        <div className="container">
          <div className="row">
            <div className="section-heading-with-button-flex mb-3">
              <h2 className="capabilities-heading">Capabilities</h2>
              <button className="btn-explore-capabilities">
                Explore All Capabilities
              </button>
            </div>
            <div className="row d-flex justify-content-between my-5">
              <div className="col-6 d-flex capability-card-img">
                <Image
                  src="/images/Cloud-Migration-image.jpeg"
                  alt="Cloud Migration and Strategy image"
                  width={20}
                  height={200}
                  priority={true}
                  className="small-colud-img"
                />
                <div className="d-flex flex-column">
                  <h2 className="could-migration-heading">
                    Cloud Migration and Strategy
                  </h2>
                  <p className="could-migration-description">
                    Seamlessly transition your applications, data, and
                    processes to the cloud with  our expertise in planning
                    and executing  migration strategies tailored to your 
                    business needs
                  </p>
                  <div>
                    <button className="explore-btn">Explore</button>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex capability-card-img">
                <Image
                  src="/images/Infrastructure-image.jpeg"
                  alt="capabilities image"
                  width={100}
                  height={100}
                  priority={true}
                  className="small-colud-img"
                />
                <div className="d-flex flex-column">
                  <h2 className="could-migration-heading">
                    Infrastructure as a Service (IaaS)
                  </h2>
                  <p className="could-migration-description">
                    Leverage our IaaS solutions to offload the 
                    burden of infrastructure management, allowing 
                    your team to focus on innovation and core 
                    business functions.​ ​
                  </p>
                  <button className="explore-btn">Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="related-Service-background py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className="related-Service-heading">Related Service</h2>
              <h2 className="related-Service-sub-heading">
                Software as Service (SaaS)
              </h2>
              <p className="related-Service-description">
                Access industry-leading software applications without the hassle of 
                <br />
                installation and maintenance. Our SaaS solutions enhance collaboration 
                <br />
                and productivity
              </p>
              <div>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
            <div className="col-6">
              <Image
                src="/images/Software-as-Service.jpeg"
                alt="related service image"
                width={300}
                height={300}
                className="related-service-image"
                priority
              />
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default Index;
