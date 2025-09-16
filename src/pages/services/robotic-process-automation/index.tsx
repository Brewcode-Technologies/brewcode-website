import { Metadata } from 'next';
import ReusableButton from '@component/components/customHooks/reusableContactButton';
import Layout from '@component/components/layouts/layout';

import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { pageMetadata } from '@component/lib/metadata';

export const metadata: Metadata = pageMetadata.services.roboticProcessAutomation;

const Index: React.FC = () => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };
  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
        }}
      >
        <div className="cloud-image p-4">
          <Image
            src="/images/img.jpg"
            alt="cyber security image"
            fill
            className="mb-3 hero-cloud"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="hero-section-content">
              <h1 className="cyber-security-services-heading mb-3 text-center">
                Accelerate delivery with end-to-end
                <br /> automation for every team.
              </h1>

              <p className=" services-description text-center">
                Eliminate manual tasks and processes at scale with simple and
                <br /> advanced robotic process automations.
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
              <p className="overview-short-description mb-5">Connect and automate your business.</p>
              <p className="overview-detail mb-3">
                Purpose-built for every team, Brewcode RPA eliminates manual tasks and processes –
                from simple to advanced
                <br /> automations.
              </p>
              <p className="overview-detail mb-3">
                Seamlessly integrated with Anypoint Platform and Composer, Brewcode RPA delivers
                intelligent automation anywhere and achieves end-to-end automation at scale.
              </p>
              <div className="mt-5 mb-5">
                <ReusableButton label="Contact Us" navigateTo="/contact-us" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-container">
                <img
                  alt="Detailed view of application service offerings"
                  src="/images/robotic-process-automation-image.jpg"
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
                  End-to-end lifecycle and project management with brewcode RPA.
                </h3>
              </div>

              <div className="col-lg-7 col-md-6 col-12">
                <div className="row mb-4 d-flex  justify-content-between">
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        <h4 className="service-title mb-3">Evaluate processes</h4>
                        <p className="service-description">
                          Brewcode RPA Manager empowers you to identify the most impactful process
                          to automate based on measurable outcomes.
                        </p>
                      </div>
                      <div className="mt-4">
                        <h4 className="service-title mb-3">Build with confidence</h4>
                        <p className="service-description">
                          Brewcode RPA Builder enables developers to configure and implement RPA
                          processes with diverse, easy to-use tool box and templates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        <h4 className="service-title mb-3">Design with ease</h4>
                        <p className="service-description">
                          Brewcode RPA Recorder accelerates process design and automatically
                          transforms your workflows to process maps in the RPA Manager.
                        </p>
                      </div>
                      <div className="">
                        <h4 className="service-title mb-3 mt-4">Test, run, and scale</h4>
                        <p className="service-description">
                          Brewcode RPA Bots keep your automated process running robustly and
                          reliably, while allowing you to scale with speed.
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
              {/* <h3 className="our-section-heading mb-4">Our Services</h3> */}
              <h5 className="our-section-subheading mb-4 text-center">
                Automation for every industry
              </h5>
            </div>
            <div className="container my-4">
              <div className="row d-flex justify-content-center gap-4">
                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <div className="image-card-container">
                      <Image
                        src="/images/financial-services-image.jpg"
                        className="card-img-top"
                        alt="application support and services Image"
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Financial Services</h5>
                      <p className="card-text">
                        Streamline your compliance, customer service, and reporting processes while
                        reducing risk exposure and making it easier to access and update data across
                        systems, documents, databases, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/healthcare-life-sciences-image.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Healthcare & Life Sciences</h5>
                      <p className="card-text">
                        Simplify the process for both insurers and providers with streamlined claim
                        processing and chart management, and improve the patient experience with
                        automated reminders.{' '}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/manufacturing-image.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Manufacturing</h5>
                      <p className="card-text">
                        Increase the efficiency of your ERP processes and the management of your
                        bill of materials through automatic charge alerts, real-time analytics, and
                        audit-ready reports.{' '}
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
