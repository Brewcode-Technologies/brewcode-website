import Link from "next/link";
import React from "react";
import ImageIcon from "../ImageIcon";

const HerosectionComponent = () => {
  const handleClickButtom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero-image">
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
            <strong className="description-strong">fast-paced</strong> climate,
            companies are required to
            <br />
            <strong className="description-strong"> adapt </strong> more
            <strong className="description-strong"> quickly </strong> than ever
            before.
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
    </div>
  );
};

export default HerosectionComponent;
