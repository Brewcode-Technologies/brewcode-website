import Link from "next/link";
import React from "react";
import ImageIcon from "./ImageIcon";
import Image from "next/image";
import { trackFooterClick } from "@component/lib/gtm";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex justify-content-between mb-5 align-items-center">
          <Link href="/" passHref onClick={() => trackFooterClick("Home Logo")}>
            <img
              src="/images/svg/Brewcode-footer-logo.svg"
              alt="Brewcode logo"
              className="footer-logo"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="flex-footer-icons d-flex justify-content-center">
            <Link
              href="https://x.com/ibrewcode"
              target="_blank"
              onClick={() => trackFooterClick("Twitter")}
            >
              <ImageIcon
                src="/images/svg/x_svg.svg"
                alt="twitter icon"
                className="footer-icon"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/brewcode/"
              target="_blank"
              onClick={() => trackFooterClick("LinkedIn")}
            >
              <ImageIcon
                src="/images/svg/LinkedIn_svg.svg"
                alt="LinkedIn icon"
                className="footer-icon"
              />
            </Link>
            <Link
              href="https://brewcode.medium.com/"
              target="_blank"
              onClick={() => trackFooterClick("Medium Blog")}
            >
              <ImageIcon
                src="/images/svg/logo-blog.svg"
                alt="blogger-icon"
                className="footer-icon"
              />
            </Link>
          </div>
        </div>

        <div className="row d-flex justify-content-center mb-3">
          <div className="col-12 col-md-8 col-lg-6 d-flex flex-wrap justify-content-around">
            <Link
              href="/"
              passHref
              onClick={() => trackFooterClick("/")}
              className="footer-link footer-link-home"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => trackFooterClick("about-us")}
              passHref
              className="footer-link"
            >
              About
            </Link>
            <Link
              href="/cookie-policy"
              onClick={() => trackFooterClick("cookie-policy")}
              passHref
              className="footer-link"
            >
              Cookie Policy
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => trackFooterClick("Privacy Policy")}
              passHref
              className="footer-link"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              onClick={() => trackFooterClick("terms-conditions")}
              passHref
              className="footer-link"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="row d-flex justify-content-center mb-4">
          <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center px-4">
            <p className="footer-link-policy text-center">
              © 2024 Brewcode Technologies Private Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
