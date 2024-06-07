import Link from "next/link";
import React from "react";
import ImageIcon from "./ImageIcon";
import Image from "next/image";
import { routeMap } from "./customHooks/useNavigation";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-between mb-5">
          <div className="col-4 col-md-3 col-lg-1 align-self-center">
            <Link href="/" passHref>
              <Image
                src="/images/svg/brewcode_logo_svg.svg"
                alt="Brewcode logo"
                className="footer-logo"
                width={40}
                height={40}
               
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
          <div className="flex-footer-icons">
            <Link href={routeMap["/"]} passHref>
              <ImageIcon
                src="/images/svg/facebook_svg.svg"
                alt=" facebook icon"
                className="footer-icon"
              />
            </Link>
            <Link href="/">
              <ImageIcon
                src="/images/svg/x_svg.svg"
                alt="twitter icon"
                className="footer-icon"
              />
            </Link>

            <Link href="/">
              <ImageIcon
                src="/images/svg/instagram_svg.svg"
                alt="icon"
                className="footer-icon"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/brewcode/" target="_blank">
              <ImageIcon
                src="/images/svg/LinkedIn_svg.svg"
                alt="LinkedIn icon"
                className="footer-icon"
                
              />
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-around mb-3 ">
              <Link href="/" passHref className="footer-link footer-link-home">
                Home
              </Link>
              <Link href="/about-us"  passHref className="footer-link">
                About
              </Link>

              <Link href="/cookie-policy" passHref  className="footer-link">
              Cookie Policy
              </Link>
              <Link href="/privacy-policy" passHref  className="footer-link">
              Privacy Policy
              </Link>
              <Link href="/terms-of-services" passHref  className="footer-link">
              Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center mb-4">
            <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center px-4">
              <Link
                href="/privacy-policy"
                passHref
                className="footer-link-policy text-center"
              >
            
                © 2024 Brewcode Technologies Private Limited. All Rights Reserved.
              </Link>
           
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
