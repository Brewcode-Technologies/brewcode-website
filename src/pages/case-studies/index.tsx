import Layout from "@component/components/layouts/layout";
import React from "react";
import Image from "next/image";
const Index: React.FC = () => {
  return (
    <Layout>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="cloud-image p-4">
          <Image
            src="/images/Hero-sec-cyber.png"
            alt="cyber security image"
            fill
            className="mb-3 hero-cloud"
          />
        </div>
        <div className="container flex-center">
          <div className="case-study-content">
            <h1 className="case-study-heading mb-3">Case Study</h1>
            <p className="case-study-paragraph">
              Case studies are a great way to exhibit real-case scenarios and
              assist your customers in accomplishing their goals. These are not
              just case studies but tips on how to use technology as a powerful
              asset in strengthening your business.
            </p>
          </div>
        </div>
      </div>

      <div className="parent-container" style={{ backgroundColor: "black" }}>
        <div className="column-container">
          <div className="row-container">
            <div className="child-div left">
              {/* <!-- Content for the first div --> */}
            </div>
            <div className="child-div right">
              {/* <!-- Content for the second div --> */}
            </div>
          </div>

          <div className="row-container">
            <div className="child-div left">
              {/* <!-- Content for the first div --> */}
            </div>
            <div className="child-div right">
              {/* <!-- Content for the second div --> */}
            </div>
          </div>

          <div className="row-container">
            <div className="child-div left">
              {/* <!-- Content for the first div --> */}
            </div>
            <div className="child-div right">
              {/* <!-- Content for the second div --> */}
            </div>
          </div>

          <div className="row-container">
            <div className="child-div left">
              {/* <!-- Content for the first div --> */}
            </div>
            <div className="child-div right">
              <Image
                src="/images/laptop.jpeg"
                alt="image"
                objectFit="cover"
                className="child-img"
                width={460.61} // specify the width
                height={400}
              />
            </div>
          </div>

          <div className="row-container">
            <div className="child-div left">
              {/* <!-- Content for the first div --> */}
            </div>
            <div className="child-div right">
              {/* <!-- Content for the second div --> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
