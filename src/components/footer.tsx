import Link from "next/link";
import React from "react";
import ImageIcon from "./ImageIcon";
import Image from "next/image";

function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row d-flex justify-content-between  mb-5">
          <div className="col-4 col-md-3 col-lg-1 align-self-center">
            <Link href="/" passHref>
              <Image
                src="/images/brewcode-logo.png"
                alt="Brewcode logo"
                className="footer-logo"
                width={40}
                height={40}
                layout="responsive"
                priority
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

        <div className="d-flex justify-content-center align-items-center">
          <div className="flex-footer-icons d-flex justify-content-between align-items-center my-4">
            <Link href="/">
              <ImageIcon
                src="/images/icons/facebook.png"
                alt="icon"
                className="footer-icon"
              />
            </Link>
            <Link href="/">
              <ImageIcon
                src="/images/icons/twitter.png"
                alt="icon"
                className="footer-icon"
              />
            </Link>

            <Link href="/">
              <ImageIcon
                src="/images/icons/instagram.png"
                alt="icon"
                className="footer-icon"
              />
            </Link>
            <Link href="/">
              <ImageIcon
                src="/images/icons/Linkedin.png"
                alt="icon"
                className="footer-icon"
              />
            </Link>
          </div>
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
