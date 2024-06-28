import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Index: React.FC = () => {
  const fullStackItemsColumn1 = [
    "Backup and recovery",
    "Business continuity",
    "Health Information Exchange (HIE)",
    "Protected Health Information (PHI)",
    "Records management",
    "Storage, replication, and archiving",
    "Telecommuters and eWorkers",
  ];

  return (
    <Layout>
      <Head>
        <title>Health care | Brewcode Technology Private Limited</title>
        <meta
          name="description"
          content="Harness the Power of IaaS for Seamless Scalability and Enhanced Performance in Communication & Media Services."
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
              <h1 className="industry-heading mb-3">Health care</h1>
              <img
                src="/images/svg/industry-healthcare-icon.svg"
                alt="cyber security image"
                className="mb-2 industry-icon"
                loading="lazy"
              />

              <p className=" services-description text-center">
                Home / Industries / Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="case-studies-black-container container-fluid text-white">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-md-7">
              <div>
                <h2 className="industry-healthcare-sub-heading">
                  IT Souation for Healthcare
                </h2>
                <p className="industries-text">
                  Federal, state, EU, HIPAA, and Joint Commission regulations
                  have conspired to create a complex IT environment for the
                  entire healthcare industry. Whether it is a small community
                  hospital or an entity that is part of a large healthcare
                  network, all organizations must continuously balance their
                  mission of quality patient care while meeting shifting
                  compliance requirements. WEI provides the technology and
                  expertise to help you create an adaptive infrastructure to
                  meet the goals of patients, caregivers, and administrators.
                </p>
              </div>
              <div>
                <h2 className="industry-healthcare-sub-heading">
                  IT Souation for Healthcare
                </h2>
                <p className="industries-text">
                  As healthcare providers continue to receive incentives for
                  implementing and upgrading their EMR systems, these
                  initiatives are increasing efficiency and productivity.
                  Meanwhile, risk with paper files is also being mitigated. WEI
                  will work with you to design, scale, and integrate the
                  technology you need to fully adopt efficient EMR strategies.
                </p>
              </div>
              <div>
                <h2 className="industry-healthcare-sub-heading">
                  IT Souation for Healthcare
                </h2>
                <p className="industries-text">
                  Government and private payer standards have created a daunting
                  task for IT professionals. How can you stay innovative and
                  efficient while remaining compliant with multiple regulations?
                </p>
              </div>
              <div className="my-5">
                <h2 className="industry-healthcare-sub-heading">
                  IT Souation for Healthcare
                </h2>
                <div className="">
                  {fullStackItemsColumn1.map((item, index) => (
                    <li key={index} className="industry-healthcare-list-items">
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <p>Industries</p>

              <p className="d-flex health-car-right-arrow-icon-text">
                {" "}
                <IoIosArrowForward className="mt-1 right-arrow-icon" />
                &nbsp;<span className="">Healthcare</span>
              </p>
              <p className="d-flex health-car-right-arrow-icon-text">
                {" "}
                <IoIosArrowForward className="mt-1 right-arrow-icon" />
                &nbsp;<span>Education</span>
              </p>
              <p className="d-flex health-car-right-arrow-icon-text">
                {" "}
                <IoIosArrowForward className="mt-1 right-arrow-icon" />
                &nbsp;<span>E-Commerce</span>
              </p>
              <p className="d-flex health-car-right-arrow-icon-text">
                {" "}
                <IoIosArrowForward className="mt-1 right-arrow-icon" />
                &nbsp;<span>Logistic</span>
              </p>
              <p className="d-flex health-car-right-arrow-icon-text">
                {" "}
                <IoIosArrowForward className="mt-1 right-arrow-icon" />
                &nbsp;<span>Hospital Industry</span>
              </p>
              <p className="d-flex health-car-right-arrow-icon-text">
                {" "}
                <IoIosArrowForward className="mt-1 right-arrow-icon" />
                &nbsp;<span>Automotive</span>
              </p>
              <p className="d-flex health-car-right-arrow-icon-text">
                {" "}
                <IoIosArrowForward className="mt-1 right-arrow-icon" />
                &nbsp;<span>Communication & Media</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div>
              <h2 className="industry-healthcare-sub-heading">
                IT Souation for Healthcare
              </h2>
              <p className="industries-text">
                The ability to pull archived records for authorized caregivers
                improves clinical workflow, medical knowledge, and collaboration
                between departments. Policy-based rules for retention and
                deletion of patient information, images, research data, and
                files can decrease assets used and save budgetary funds. WEI
                offers hardware and software-based storage solutions to scale
                precisely to your specific needs.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div>
              <h2 className="industry-healthcare-sub-heading">
                IT Souation for Healthcare
              </h2>
              <p className="industries-text">
                Shortening the time to implement a new initiative in the
                business world means extra profit. In the world of healthcare,
                it’s a matter of life and death. Converged Infrastructure and
                Adaptive Infrastructure solutions can lower time to market, or
                in this case time to treatment, from weeks to just minutes.
                Using virtualized scalable servers in conjunction with
                virtualized storage, virtualized I/O, and intuitive management
                software, templates can be created to provision for new
                initiatives and allocate the resources needed in a matter of
                minutes.
              </p>
            </div>
          </div>
          <div className="row">
            <div>
              <h2 className="industry-healthcare-sub-heading">
                IT Souation for Healthcare
              </h2>
              <p className="industries-text">
                As healthcare providers continue to receive incentives for
                implementing and upgrading their EMR systems, these initiatives
                are increasing efficiency and productivity. Meanwhile, risk with
                paper files is also being mitigated. WEI will work with you to
                design, scale, and integrate the technology you need to fully
                adopt efficient EMR strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
