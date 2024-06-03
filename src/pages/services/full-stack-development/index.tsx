import Layout from "@component/components/layouts/layout";
import React from "react";

const Career: React.FC = () => {
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
              <h1 className="services-header">
              Full Stack Development
              </h1>
              <p className=" services-description text-center">
                Harness the Power of IaaS for Seamless Scalability and
                <br /> Enhanced Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
