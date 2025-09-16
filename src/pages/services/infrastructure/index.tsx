import { Metadata } from 'next';
import ReusableButton from '@component/components/customHooks/reusableContactButton';

import Layout from '@component/components/layouts/layout';

import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { pageMetadata } from '@component/lib/metadata';

export const metadata: Metadata = pageMetadata.services.infrastructure;

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
              <h1 className="cyber-security-services-heading mb-3">
                Transforming Your Infrastructure
              </h1>

              <p className="col-12 text-center">
                Harness the Power of IaaS for Seamless Scalability and Enhanced
                <br /> Performance
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
                Enhancing Brewcode's Operations
                <br /> with IaaS
              </p>
              <p className="overview-detail mb-3">
                Brewcode leverages IaaS to efficiently manage resources and scale operations,
                especially during peak demand, without significant upfront capital expenditures. By
                utilizing cloud services from providers like AWS, Google Cloud, and Microsoft Azure,
                Brewcode offloads the complexity of maintaining physical infrastructure while
                retaining control over software application management. This approach enables
                Brewcode to focus on its core business, optimize costs, and ensure robust, scalable,
                and secure operations, aligning with industry best practices.
              </p>
              <p className="overview-detail mb-3">
                Additionally, IaaS provides access to advanced tools and technologies, enhancing
                Brewcode's ability to innovate and adapt quickly to market changes, ultimately
                driving business growth and competitive advantage.
              </p>
              <div className="mb-4">
                <ReusableButton label="Contact Us" navigateTo="/contact-us" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-container">
                <img
                  alt="Detailed view of application service offerings"
                  src="/images/architecture-image.jpg"
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
                  Iaas architecture and <br /> related components
                </h3>
                <p className="our-section-subheading mb-5">
                  Redefining Application Success
                  <br /> through the Symphony of
                  <br /> Expertise, Innovation and
                  <br /> Results
                </p>
                <p className="our-section-text mb-4">
                  IaaS architecture comprises several core components that enable efficient and
                  scalable operations. The primary compute resources include Virtual Machines (VMs)
                  and containers, which provide the essential computing power needed for various
                  applications. Storage solutions in IaaS encompass block storage for raw volumes,
                  object storage for unstructured data like files and multimedia, and file storage
                  for shared access across multiple VMs.
                </p>
                <p className="our-section-text">
                  Networking is facilitated through Virtual Private Clouds (VPCs), load balancers to
                  ensure high availability, and firewalls or security groups for traffic control.
                </p>
              </div>

              <div className="col-lg-7 col-md-6 col-12">
                <div className="row mb-4 d-flex  justify-content-between">
                  <div className="col-6">
                    <div className="d-flex flex-column justify-content-between">
                      <div className="mb-5">
                        <div className="">
                          <div className=" infrasture-icon">
                            <Image
                              alt="Comprehensive application services icon"
                              width={50}
                              height={50}
                              src="/images/svg/comprehencive.svg"
                              className="mb-4"
                            />
                          </div>
                          <h4 className="service-title mb-3">Compute</h4>
                          <p className="service-description">
                            Compute resources include central processing units (CPU) for processing
                            web requests and running applications and 
                            <a
                              href="https://www.ibm.com/topics/gpu"
                              target="_blank"
                              className="url-link"
                            >
                              graphical processing units (GPU)
                            </a>
                             that handle workloads and internal memory (RAM).
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="">
                          <Image
                            alt="Harnessing technology icon"
                            width={50}
                            height={50}
                            src="/images/svg/Harnesing.svg"
                            className="mb-4"
                          />
                        </div>
                        <h4 className="service-title mb-3">Networking</h4>
                        <p className="service-description">
                          <a
                            href="https://www.ibm.com/topics/gpu"
                            target="_blank"
                            className="url-link"
                          >
                            Block storage
                          </a>{' '}
                          is a technology for storing data files on storage area networks (SANs) or
                          cloud-based storage environments. Developers favor block storage for
                          computing situations that require fast, efficient and reliable data
                          transportation
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
                          src="/images/svg/Harnesing.svg"
                          className="mb-4"
                        />
                      </div>
                      <h4 className="service-title mb-3">Networking</h4>
                      <p className="service-description">
                        IaaS relies on {' '}
                        <a
                          href="https://www.ibm.com/topics/sdn#:"
                          target="_blank"
                          className="url-link"
                        >
                          software-defined networking (SDN)
                        </a>
                         in which {' '}
                        <a
                          href="https://www.ibm.com/topics/networking"
                          target="_blank"
                          className="url-link"
                        >
                          networking
                        </a>
                         hardware (for example, routers, switches, firewalls and load balancers) is
                        made available through application programming interfaces (APIs). IaaS
                        models virtualize the networking functions of this hardware, and clients can
                        access IaaS services from anywhere over the public internet or by using a
                        virtual private network (VPN).
                      </p>
                      <p className="service-description">
                        <a
                          href="https://www.ibm.com/topics/file-storage"
                          target="_blank"
                          className="url-link"
                        >
                          File storage
                        </a>
                        also called file storage hosting, allows multiple users to share the same
                        file data. In IaaS instances, organizations store data files off-site in
                        cloud providers' data centers and access them via the internet (instead of
                        storing them locally on a NAS device).
                      </p>
                      <p className="service-description">
                        <a
                          href="https://www.ibm.com/topics/object-storage"
                          target="_blank"
                          className="url-link"
                        >
                          Object storage 
                        </a>
                        Object storage is a data storage architecture ideal for storing, archiving,
                        backing up and managing high volumes of static unstructured data—reliably,
                        efficiently and affordably. It is the most common type of cloud storage. 
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
                Empowering Your Infrastructure with IaaS
              </h5>
              <p className="our-section-text col-12">
                Unlock the potential of our comprehensive IaaS solutions designed to empower your
                infrastructure. Scale effortlessly, enhance security, and
                <br /> streamline management with our flexible and robust services.
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
                        IaaS Compute
                        <br /> Resources
                      </h5>
                      <p className="card-text">
                        Leverage our powerful Virtual Machines and containers to fuel your
                        applications and scale your operations effortlessly. With flexible computing
                        resources, you can meet the demands of your workload dynamically, ensuring
                        optimal performance and efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/flexible-storage-solutions.jpg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Flexible Storage
                        <br /> Solutions
                      </h5>
                      <p className="card-text">
                        Unlock the potential of our block, object, and file storage options tailored
                        to suit your data needs. Whether it's raw storage volumes, unstructured data
                        like files and multimedia, or shared file systems across multiple instances,
                        our storage solutions provide scalability and reliability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <div className="Services-card">
                    <Image
                      src="/images/our-services-img5.jpeg"
                      className="card-img-top"
                      alt="application support and services Image"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Secure Networking
                        <br /> Infrastructure
                      </h5>
                      <p className="card-text">
                        Ensure the safety of your data and applications with our Virtual Private
                        Clouds (VPCs), load balancers, and robust firewall protection. Our secure
                        networking infrastructure offers peace of mind, allowing you to focus on
                        your business without worrying about cyber threats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-4">
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
                        Comprehensive <br />
                        Management Tools
                      </h5>
                      <p className="card-text framework">
                        Simplify your operations and streamline your workflow with our comprehensive
                        management tools. From intuitive control panels and APIs to automation
                        capabilities with Infrastructure as Code (IaC), we provide the resources you
                        need to manage your infrastructure efficiently.
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
