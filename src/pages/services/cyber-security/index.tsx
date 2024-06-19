import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Index: React.FC = () => {
  return (
    <Layout>
          <Head>
     
     <title> Cyber Security | Brewcode Technology Private Limited</title>
     <meta name="description" content="Immersive AR/VR Solutions to Elevate Your Business" />
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
                Cyber Security Services
              </h1>
             
              <p className="col-12 text-center">
                Recover from a breach with speed and precision and get
                <br /> back to business faster with Brewcode Endpoint
                <br />
                Recovery Services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dark-container py-5">
      <div className="container">
        <div className="col-12">
          <h2 className="chart-of-heading mb-4">The Challenge</h2>
          <p className="chart-of-detail mb-4">
            When a breach occurs, speed to remediation and recovery is critical to minimize the impact on business operations. Advanced persistent
            <br /> threats can quickly break out across your network, infecting your endpoints, moving laterally across your systems and disrupting your <br />
            business.
          </p>
        </div>
        <div className="row">
          <div className="cyber-security-the-challenge-card col-12 col-md-4 py-5 card-margin-right my-5">
            <h3 className="cyber-security-the-challenge-card-title text-center mb-5 pt-4">
              Persistent attacks
            </h3>
            <p className="cyber-security-the-challenge-card-description">
              Sophisticated cyberattacks often establish multiple points of undetected persistence in your network in order to infect your systems with malware or steal sensitive data over a prolonged period of time.
            </p>
          </div>
          <div className="cyber-security-the-challenge-card col-12 col-md-4 py-5 card-margin-right my-5">
            <h3 className="cyber-security-the-challenge-card-title text-center mb-5 pt-4">
              Advanced threats
            </h3>
            <p className="cyber-security-the-challenge-card-description">
              The threat landscape continues to evolve, with stealthy, sophisticated attacks regularly evading the security technology and expertise of many organizations.
            </p>
          </div>
          <div className="cyber-security-the-challenge-card col-12 col-md-4 py-5 my-5">
            <h3 className="cyber-security-the-challenge-card-title text-center mb-5 pt-4">
              Business interruption
            </h3>
            <p className="cyber-security-the-challenge-card-description">
              Traditional recovery methods from advanced persistent threats rely on reimaging and rebooting endpoints from backup images, which can disrupt the end users and cause business downtime.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 p-4 what-brewcode-delivers">
            <h2 className="chart-of-heading mb-5 d-flex align-items-start what-brewcode">
              What Brewcode Delivers
            </h2>
            <p className="chart-of-detail mb-4">
              Guard your digital assets against evolving cyber threats
              <br />
              with our comprehensive cybersecurity services. Our
              <br />
              proactive approach ensures that your business remains
              <br />
              resilient in the face of increasing cyber challenges. Our
              <br />
              cybersecurity services encompass
            </p>
          </div>
          <div className="d-flex flex-column col-12 col-md-6">
            <div className="my-1">
              <div className="d-flex">
                <i className="bi bi-arrow-right-short"></i>
                <h3 className="mt-3 prevention-title">Prevention</h3>
              </div>
              <p>
                Within the first 24 hours of an engagement, the rapid deployment and configuration of the platform begin, with powerful prevention policies to immediately stop the execution and <span className="lateral-movement-underline">lateral movement</span> of active attacks
              </p>
            </div>

            <div className="my-1">
              <div className="d-flex">
                <i className="bi bi-arrow-right-short"></i>
                <h3 className="mt-3 prevention-title">Recovery</h3>
              </div>
              <p>
                Over the next 72 to 96 hours, the Brewcode Services team leverages the Falcon platform to analyze attacks and actively remediate and remove any memory-resident <span className="lateral-movement-underline">malware</span> persistence and other active attack components.
              </p>
            </div>
            <div className="my-1">
              <div className="d-flex">
                <i className="bi bi-arrow-right-short"></i>
                <h3 className="mt-3 prevention-title">Monitoring</h3>
              </div>
              <p>
                The OverWatch threat hunting team monitors for attack techniques designed to bypass even the best security technology and communicates directly with the recovery team when attacker behavior is observed and remediation is required
              </p>
            </div>
          </div>
        </div>
        <div className="row py-5 d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-6 col-md-4 card-black d-flex">
            <Image
              src="/images/svg/etwork_svg1.svg"
              alt="Network Security image"
              width={50}
              height={50}
              className="icon"
            />
            <h2 className="icon-title">Network Security</h2>
          </div>
          <div className="col-12 col-sm-6 col-md-4 card-black d-flex">
            <Image
              src="/images/svg/endpoint_svg2.svg"
              alt="Endpoint Security image"
              width={50}
              height={50}
              className="icon"
            />
            <h2 className="icon-title">Endpoint Security</h2>
          </div>
          <div className="col-12 col-sm-6 col-md-4 card-black d-flex">
            <Image
              src="/images/svg/Incident_svg3.svg"
              alt="Incident Response image"
              width={50}
              height={50}
              className="icon"
            />
            <h2 className="icon-title">
              Incident Response
              <br /> and Management
            </h2>
          </div>
          <div className="col-12 col-sm-6 col-md-4 card-black d-flex">
            <Image
              src="/images/svg/security_svg4.svg"
              alt=" Security Compliance image"
              width={50}
              height={50}
              className="icon"
            />
            <h2 className="icon-title">
              Security Compliance
              <br /> and Auditing
            </h2>
          </div>
          <div className="col-12 col-sm-6 col-md-4 card-black d-flex">
            <Image
              src="/images/svg/awareness_svg6.svg"
              alt="Security Awareness image"
              width={50}
              height={50}
              className="icon"
            />
            <h2 className="icon-title">
              Security Awareness
              <br /> Training
            </h2>
          </div>
          <div className="col-12 col-sm-6 col-md-4 card-black d-flex">
            <Image
              src="/images/svg/vulnerability_svg5.svg"
              alt="Vulnerability Assessment image"
              width={50}
              height={50}
              className="icon"
            />
            <h2 className="icon-title">
              Vulnerability Assessment
              <br /> and Penetration Testing
            </h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="experienced-breach-image">
            <h2 className="experienced-breach-title mb-5">Experienced Breach?</h2>
            <button className="get-assistance">GET ASSISTANCE</button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Index;
