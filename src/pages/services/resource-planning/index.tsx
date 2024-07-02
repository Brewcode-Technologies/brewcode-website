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
        <title>Resource Planning | Brewcode Technology</title>
        <meta
          name="description"
          content="Harness the Power of IaaS for Seamless Scalability and Enhanced Performance. Learn how Brewcode leverages IaaS to optimize costs, ensure robust operations, and drive business growth."
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
              Transforming Your Infrastructure
              </h1>
             
              <p className="col-12 text-center">
              Harness the Power of IaaS for Seamless Scalability and Enhanced<br/> Performance
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
                Robotic Process Automation: Streamlining
                <br /> Efficiency Across Enterprises
              </p>
              <p className="overview-detail mb-5">
                Brewcode Technology propels your enterprise forward with
                cutting-edge RPA solutions. Our streamlined automation
                strategies boost productivity and innovation. Experience the
                synergy of human creativity and robotic precision with us. Trust
                in our scalable, secure RPA services to transform your business
                processes. Let’s redefine efficiency together—your success is
                our mission. Embrace Brewcode’s RPA; embrace the future of smart
                enterprise.
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
                  alt="robotic process automation"
                  src="/images/robotic-process-automation.jpg"
                  className="overview-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="container our-distenctive-div">
            <div className="row d-flex  justify-content-between">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <h3 className="our-section-heading mb-5">
                  The benefits of RPA
                </h3>
                <p className="our-section-subheading mb-5">
                  Unleashing Efficiency and
                  <br /> Precision”
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
                          Frontend and Backend Development
                        </h4>
                        <p className="service-description">
                          RPA does not necessarily require a developer to
                          configure; drag-and-drop features in user
                          interfaces make it easier to onboard non-technical
                          staff.
                        </p>
                      </div>
                      <div className="mb-5">
                        <h4 className="service-title mb-3">
                          API Development & Integration Services
                        </h4>
                        <p className="service-description">
                          Since bots and chatbots can work around the clock,
                          they can reduce wait times for customers, leading to
                          higher rates of customer satisfaction.
                        </p>
                      </div>
                      <div>
                        <h4 className="service-title mb-3">
                          API Development & Integration Services
                        </h4>
                        <p className="service-description">
                          Since you can program RPA robots to follow specific
                          workflows and rules, you can reduce human error,
                          particularly around work which requires accuracy and
                          compliance, like regulatory standards. RPA can also
                          provide an audit trail, making it easy to monitor
                          progress and resolve issues more quickly. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        <h4 className="service-title mb-3">
                          Database Management
                        </h4>
                        <p className="service-description">
                          Since RPA reduces the workload of teams, staff can be
                          reallocated towards other priority work that does
                          require human input, leading to increases in
                          productivity and ROI. 
                        </p>
                      </div>
                      <div className="mb-5">
                        <h4 className="service-title mb-3">
                          Database Management
                        </h4>
                        <p className="service-description">
                          Since RPA reduces the workload of teams, staff can be
                          reallocated towards other priority work that does
                          require human input, leading to increases in
                          productivity and ROI. 
                        </p>
                      </div>
                      <div className="mb-5">
                        <h4 className="service-title mb-3">
                          Database Management
                        </h4>
                        <p className="service-description">
                          Since RPA reduces the workload of teams, staff can be
                          reallocated towards other priority work that does
                          require human input, leading to increases in
                          productivity and ROI. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h3 className="our-section-heading mb-4">Our Services</h3>
              <h5 className="our-section-subheading mb-4">
                Empowering Your Infrastructure with IaaS
              </h5>
              <p className="our-section-text col-12">
                Unlock the potential of our comprehensive IaaS solutions
                designed to empower your infrastructure. Scale effortlessly,
                enhance security, and
                <br /> streamline management with our flexible and robust
                services.
              </p>
            </div>
            <div className="container my-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <div className="image-card-container">
                      <Image
                        src="/images/Iaas-compute-esources-image.jpg"
                        className="card-img-top"
                        alt="application support and services Image"
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Banking and financial services
                      </h5>
                      <p className="card-text">
                        In the Forrester report on “The RPA Services Market Will
                        Grow To Reach USD 12 Billion By 2023”, 36% of all use
                        cases were in the finance and accounting space. More
                        than 1 in 3 bots today are in the financial industry,
                        which is of little surprise given banking's early
                        adoption of automation. 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/insurance-image.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Insurance</h5>
                      <p className="card-text">
                        Insurance is full of repetitive processes well suited
                        for automation. For example, you can apply RPA to claims
                        processing operations, regulatory compliance, policy
                        management and underwriting tasks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/retail-image.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Retail</h5>
                      <p className="card-text">
                        The rise of ecommerce has made RPA an integral component
                        of the modern retail industry that has improved back
                        office operations and the customer experience. Popular
                        applications include customer relationship management,
                        warehouse and order management, customer feedback
                        processing and fraud detection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/healthcare-image.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title my-3">Healthcare</h5>
                      <p className="card-text framework">
                        Accuracy and compliance are paramount in the health care
                        industry. Some of the world's largest hospitals use
                        robotic process automation software to optimize
                        information management, prescription management,
                        insurance claim processing and payment cycles, among
                        other processes.
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
