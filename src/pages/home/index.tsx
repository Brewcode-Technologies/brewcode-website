import HerosectionComponent from "@component/components/HomepageComponent/HerosectionComponent ";
import IndustriesWeComponent from "@component/components/HomepageComponent/IndustriesWeComponent ";
import InsightsComponent from "@component/components/HomepageComponent/InsightsComponent ";
import OurClients from "@component/components/HomepageComponent/OurClientsComponent ";
import OurSolutionsComponent from "@component/components/HomepageComponent/OurSolutionsComponent ";
import ScaleInnovativelyComponent from "@component/components/HomepageComponent/ScaleInnovativelyComponent ";
import WhoWeAreComponent from "@component/components/HomepageComponent/WhoWeAreComponent ";
import ImageIcon from "@component/components/ImageIcon ";
import Header from "@component/components/Navbar ";
import SliderMain from "@component/components/Slider ";
import {
  decrement,
  increment,
  reset,
  selectCount,
} from "@component/reducers/counterSlice ";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: React.FC = () => {
  return (
    // <div
    //   style={{
    //     textAlign: "center",
    //     marginTop: "50px",
    //     fontFamily: "Arial, sans-serif",
    //   }}
    // >
    //   <h1>Counter App</h1>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <p style={{ fontSize: "24px", color: count === 0 ? "black" : "green" }}>
    //       Count: {count}
    //     </p>
    //     <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    //       <button
    //         onClick={handleIncrement}
    //         style={{
    //           backgroundColor: "green",
    //           color: "white",
    //           padding: "10px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         Increment
    //       </button>
    //       <button
    //         onClick={handleDecrement}
    //         style={{
    //           backgroundColor: "red",
    //           color: "white",
    //           padding: "10px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         Decrement
    //       </button>
    //       <button
    //         onClick={handleReset}
    //         style={{
    //           backgroundColor: "black",
    //           color: "white",
    //           padding: "10px",
    //           fontSize: "16px",
    //         }}
    //       >
    //         Reset
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
      {/* <div className="hero-image">
        <div className="container">
          <div className="row hero-section-column">
            <div className="col-12 hero-heading">
              <h1 className="hero-section-heading mt-5">
                <span className="hero-stroke">We're</span> Here To Solve Your
                <br />
                Critical Challenges
              </h1>
            </div>
            <p className="description text-center">
              In today’s{" "}
              <strong className="description-strong">fast-paced</strong>{" "}
              climate, companies are required to
              <br />
              <strong className="description-strong"> adapt </strong> more
              <strong className="description-strong"> quickly </strong> than
              ever before.
            </p>
          </div>

          <div className="row">
            <div className="col-12 social-media-icons-main d-flex flex-column justify-content-between">
              <Link href="https://www.instagram.com" passHref>
                <ImageIcon
                  src="/images/icons/instagram.png"
                  alt="instagram-icon"
                  className="instagram-icon mb-2"
                />
              </Link>
              <Link href="https://www.linkedin.com" passHref>
                <ImageIcon
                  src="/images/icons/Linkedin.png"
                  alt="Linkedin-icon"
                  className="instagram-icon mb-2"
                />
              </Link>
              <Link href="https://www.facebook.com" passHref>
                <ImageIcon
                  src="/images/icons/facebook.png"
                  alt="facebook-icon"
                  className="instagram-icon"
                />
              </Link>
            </div>
          </div>
          <div className="row col-12 mb-5">
            <div className="down-arrow-icon-main d-flex justify-content-center mb-4">
              <i
                className="bi bi-arrow-down-short"
                onClick={handleClickButtom}
              ></i>
            </div>
          </div>
        </div>
      </div> */}

      <HerosectionComponent />

      {/* who we are section */}
      <WhoWeAreComponent />
      {/* Our Solutions --- section */}

      <OurSolutionsComponent />
      {/* Industries We Serve */}
      <IndustriesWeComponent />
      {/* Scale Innovatively */}

      <ScaleInnovativelyComponent />
      {/* Insights styles ------------------start */}

      <InsightsComponent />
      {/* Our Clients styles------------------start */}

      <OurClients />
    </>
  );
};

export default Home;
