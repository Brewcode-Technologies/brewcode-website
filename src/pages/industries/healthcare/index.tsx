import IndustriesList from "@component/components/IndustriesList";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Healthcare {
  id: number;
  heading: string;
  description: string;
  category: string;
  img: string;
  imgAlt: string;
  link: string;
}

const Index: React.FC = () => {
  const fullStackItemsColumn1: string[] = [
    "Backup and recovery",
    "Business continuity",
    "Health Information Exchange (HIE)",
    "Protected Health Information (PHI)",
    "Records management",
    "Storage, replication, and archiving",
    "Telecommuters and eWorkers",
  ];

  const healthcare: Healthcare[] = [
    {
      id: 1,
      heading: "Health insurance",
      description:
        "In a competitive, highly regulated sector, the focus on digital health, cybersecurity, patient data transparency, and more, is growing. We help you build solutions that address the healthcare sector’s core issues, and help you stay ahead of the competitive curve.",
      category: "Healthcare",
      img: "/images/health-insurance-image.jpeg",
      imgAlt: "Health insurance Image",
      link: "/blog/1",
    },
    {
      id: 2,
      heading: "Health and social care",
      description:
        "Groundbreaking new technology is positioning the health and social care sector to improve person-centered services along the care pathway. We partner across the industry with community care providers, hospitals, university clinics, and health ministries to help develop personalized care plans, both at home and in medical institutions.",
      category: "Healthcare",
      img: "/images/health-and-social-care-image.jpeg",
      imgAlt: "Health and social care Image",
      link: "/blog/2",
    },
    {
      id: 3,
      heading: "Life sciences",
      description:
        "Life sciences companies give life to innovation: developing and making accessible new medicines and therapies with the power to save lives, as well as enhance the quality of life itself. Today a rare opportunity faces life sciences organizations, one that transforms their ability to deliver on their missions – exponentially and at scale. With our global breath and expertise, we’re well positioned to help.",
      category: "Healthcare",
      img: "/images/life-sciences-image.jpeg",
      imgAlt: "Life sciences Image",
      link: "/blog/3",
    },
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
                  IT Solutions for Healthcare
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
                  Electronic Medical Records (EMR)
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
                  Regulation and Compliance
                </h2>
                <p className="industries-text">
                  Government and private payer standards have created a daunting
                  task for IT professionals. How can you stay innovative and
                  efficient while remaining compliant with multiple regulations?
                </p>
              </div>
              <div className="my-5">
                <h2 className="industry-healthcare-sub-heading">
                  Brewcode offers technology solutions to assist with
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

            <IndustriesList />
          </div>
          <div className="row">
            {healthcare.map((blogItem) => (
              <div
                key={blogItem.id}
                className="col-12 col-sm-6 col-md-4 gap-5 mb-4"
              >
                <div className="mt-5">
                  <Link
                    href={blogItem.link}
                    passHref
                    target="_blank"
                    className="blog-link"
                  >
                    <div className="insight-card-link">
                      <div className=" mb-3">
                        {/* <p className="insight-card-category">{blogItem.category}</p> */}
                        {blogItem.img && (
                          <div className="insight-card-image-wrapper">
                            <div className="insight-card-image-container">
                              <img
                                src={blogItem.img}
                                className="insight-card-img"
                                alt={blogItem.imgAlt}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        )}
                        <h3 className="health-insurence-card-heading px-1">
                          {blogItem.heading}
                        </h3>
                        <p className="health-insurence-card-description health-insurence-card-heading px-1">
                          {blogItem.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div>
              <div className="d-flex">
                <img
                  src="/images/svg/security-icon.svg"
                  alt="security icon image"
                  className="security-icon"
                  loading="lazy"
                />
                <h2 className="industry-healthcare-sub-heading mt-2">
                  Security
                </h2>
              </div>
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
              <div className="d-flex">
                <img
                  src="/images/svg/storage-icon.svg"
                  alt="security icon image"
                  className="security-icon"
                  loading="lazy"
                />
                <h2 className="industry-healthcare-sub-heading mt-2">
                  Storage, Replication, Archiving, and Backup
                </h2>
              </div>

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
              <div className="d-flex">
                <img
                  src="/images/svg/mingcute-time-line-icon.svg"
                  alt="security icon image"
                  className="security-icon"
                  loading="lazy"
                />
                <h2 className="industry-healthcare-sub-heading mt-2">
                  Time to Treatment
                </h2>
              </div>

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
