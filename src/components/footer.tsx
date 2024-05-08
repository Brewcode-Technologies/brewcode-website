import Link from "next/link";
import React from "react";
import ImageIcon from "./ImageIcon";

function Footer() {
  return (
    <footer
      className="footer-bg"
      style={{ position: "absolute", bottom: 0, width: "100%" }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-4 col-md-3 col-lg-2">
            <Link href="/" passHref>
              <ImageIcon
                src="/images/brewcode-logo.png"
                alt="Brewcode logo"
                className="footer-logo"
              />
            </Link>
          </div>

          {"BREW{CODE}".split("").map((letter, index) => (
            <div className={`col-2 col-sm-1 col-md-1 col-lg-1`} key={index}>
              <Link href="/" passHref className="brew-code-text">
                <h3 className="brew-code-letter">{letter}</h3>
              </Link>
            </div>
          ))}
        </div>

        <div className="row d-flex justify-content-center my-4 mt-5">
          {["instagram", "linkedin", "facebook", "twitter"].map(
            (icon, index) => (
              <div
                className="col-2 col-sm-2 col-md-2 col-lg-1 d-flex justify-content-center align-items-center"
                key={index}
              >
                <ImageIcon
                  src={`/images/icons/${icon}.png`}
                  alt={`${icon} icon`}
                  className="footer-icon"
                  loading="eager"
                />
              </div>
            )
          )}
        </div>

        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-around mb-3 ">
              <Link href="/" passHref className="footer-link footer-link-home">
                Home
              </Link>
              <Link href="/about" passHref className="footer-link">
                About
              </Link>
              <Link href="/services" passHref className="footer-link">
                Services
              </Link>
              <Link href="/contact" passHref className="footer-link">
                Contact
              </Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-between">
              <Link
                href="/privacy-policy"
                passHref
                className="footer-link-policy"
              >
                © 2023 Brewcode
              </Link>
              <Link
                href="/privacy-policy"
                passHref
                className="footer-link-policy"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" passHref className="footer-link-policy">
                Terms of Services
              </Link>
              <Link href="/terms" passHref className="footer-link-policy">
                All Rights Reserved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
