import Link from "next/link";
import React from "react";
import ImageIcon from "./ImageIcon";

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-2">
            <Link href="/" passHref>
              <ImageIcon
                src="/images/brewcode-logo.png"
                alt="Brewcode logo"
                className="footer-logo"
              />
            </Link>
          </div>
          <div className="col-lg-10">
            <div className="row">
              {"BREWCODE{}".split("").map((letter, index) => (
                <div className="col-lg-1" key={index}>
                  <Link href="/" passHref className="brew-code-text">
                    <h3 className="brew-code-letter">{letter}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center my-4">
        {["instagram", "linkedin", "facebook"].map((icon, index) => (
          <div className="col-auto" key={index}>
            <ImageIcon
              src={`/images/icons/${icon}.png`}
              alt={`${icon} icon`}
              className="footer-icon"
            />
          </div>
        ))}
      </div>
      <div className="row justify-content-center footer-links my-3">
        <Link href="/" passHref className="nav-link active">
          Home
        </Link>
        <Link href="/about" passHref className="nav-link">
          About
        </Link>
        <Link href="/services" passHref className="nav-link">
          Services
        </Link>
        <Link href="/contact" passHref className="nav-link">
          Contact
        </Link>
      </div>
      <div className="row justify-content-center">
        <ul className="footer-links-list mt-2">
          <li>
            <Link href="/privacy-policy" passHref className="footer-link">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" passHref className="footer-link">
              Terms of Services
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
