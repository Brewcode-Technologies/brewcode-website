import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import useNavigation, { routeMap } from "./customHooks/useNavigation";
import ReusableButton from "./customHooks/reusableContactButton";

type HeaderProps = {
  scroll?: boolean;
  isLoading: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLoading }) => {


  const navigate = (url: string) => {
    router.push(url);
  };

  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState<boolean>(false);
  const [isOurWorkOpen, setIsOurWorkOpen] = useState<boolean>(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const whatWeDoRef = useRef<HTMLLIElement>(null);
  const ourWorkRef = useRef<HTMLLIElement>(null);

  const handleMouseEnterWhatWeDo = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsWhatWeDoOpen(true);
  };

  const handleMouseLeaveWhatWeDo = () => {
    if (whatWeDoRef.current) {
      const timeout = setTimeout(() => {
        setIsWhatWeDoOpen(false);
      }, 300);
      setDropdownTimeout(timeout);
    }
  };

  const handleDropdownMouseEnterWhatWeDo = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeaveWhatWeDo = () => {
    if (whatWeDoRef.current) {
      const timeout = setTimeout(() => {
        setIsWhatWeDoOpen(false);
      }, 1000);
      setDropdownTimeout(timeout);
    }
  };

  const handleMouseEnterOurWork = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsOurWorkOpen(true);
  };

  const handleMouseLeaveOurWork = () => {
    if (ourWorkRef.current) {
      const timeout = setTimeout(() => {
        setIsOurWorkOpen(false);
      }, 300);
      setDropdownTimeout(timeout);
    }
  };

  const handleDropdownMouseEnterOurWork = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeaveOurWork = () => {
    if (ourWorkRef.current) {
      const timeout = setTimeout(() => {
        setIsOurWorkOpen(false);
      }, 1000);
      setDropdownTimeout(timeout);
    }
  };
  const router = useRouter();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // Client-side check
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY >= 80) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`${
        scroll ? "navbarActive" : "navbar-custom"
      } fixed-top navbar`}
    >
      <div className="container">
        <Navbar.Brand>
          <Link href="/" passHref>
            <div className="logo-wrapper">
              <Image
                src="/images/svg/brewcode_logo_svg.svg"
                alt="Brewcode logo"
                className="logo"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          className="custom-toggler"
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto">
            <li className="nav-item" id="nav-text">
              <Link
                className="nav-link"
                aria-current="page"
                href={routeMap["/"]}
                passHref
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/about-us"
                passHref
              >
                About Us
              </Link>
            </li>
            <li
              className="nav-item dropdown dropdown-mega position-static"
              onMouseEnter={handleMouseEnterWhatWeDo}
              onMouseLeave={handleMouseLeaveWhatWeDo}
              ref={whatWeDoRef}
            >
              <Link
                className="nav-link dropdown-toggle active"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                passHref
              >
                Solutions
                <i
                  className={`bi ${
                    isWhatWeDoOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                  style={{
                    fontSize: "14px",
                    marginLeft: "4px",
                    fontWeight: "bold",
                  }}
                ></i>
              </Link>
              <div
                className={`dropdown-menu shadow ${
                  isWhatWeDoOpen ? "show" : ""
                }`}
                style={{ width: "100%" }}
                onMouseEnter={handleDropdownMouseEnterWhatWeDo}
                onMouseLeave={handleDropdownMouseLeaveWhatWeDo}
              >
                <div
                  className={`${
                    scroll ? "navbar-custom" : "navbarActive"
                  } mega-content px-md-4 margin-top`}
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <h5 className="mb-3 dropdown-heading"> Services</h5>
                        <div className="">
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["cloud-services"]}
                              passHref
                            >
                              Cloud Services
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["cyber-security"]}
                              passHref
                            >
                              Cyber Security
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["e-commerce"]}
                              passHref
                            >
                              E-Commerce
                            </Link>{" "}
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={
                                routeMap["enterprise-application-development"]
                              }
                              passHref
                            >
                              Enterprise Application Development
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["resource-planning"]}
                              passHref
                            >
                              Resource Planning
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["infrastructure"]}
                              passHref
                            >
                              Infrastructure
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["ar-vr-development"]}
                              passHref
                            >
                              AR/VR Development
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4 mt-1">
                        <p className="mt-5 pb-1">
                          <Link
                            className="list-group-item"
                            href={routeMap["robotic-process-automation"]}
                            passHref
                          >
                            Robotic Process Automation
                          </Link>
                        </p>
                        <p className="pb-1">
                          <Link
                            className="list-group-item"
                            href={routeMap["full-stack-development"]}
                            passHref
                          >
                            Full Stack Development
                          </Link>
                        </p>
                        <p className="pb-1">
                          <Link
                            className="list-group-item"
                            href={routeMap["digital-assurance"]}
                            passHref
                          >
                            Digital Assurance
                          </Link>
                        </p>
                        <p className="pb-1">
                          <Link
                            className="list-group-item"
                            href={routeMap["web-development"]}
                            passHref
                          >
                            Web Development
                          </Link>
                        </p>
                        <p className="pb-1">
                          <Link
                            className="list-group-item"
                            href={routeMap["ux-ui-designing"]}
                            passHref
                          >
                            UX/UI Designing
                          </Link>
                        </p>
                      </div>

                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <h5 className="mb-3 dropdown-heading">Industries</h5>
                        <div className="">
                        <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap.healthcare}
                              passHref
                            >
                             Health care
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap.education}
                              passHref
                            >
                              Education
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap.logistic}
                              passHref
                            >
                             
                              Logistic
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["hospitality-industry"]}
                              passHref
                            >
                            Hospitality Industry

                            </Link>
                          </p>
                        
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["e-commerce-industry"]}
                              passHref
                            >
                            E-Commerce Industry
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["tourism-industry"]}
                              passHref
                            >
                              Tourism Industry
                            </Link>
                          </p>
                          <p className="pb-1">
                            <Link
                              className="list-group-item"
                              href={routeMap["communication-media"]}
                              passHref
                            >
                            Communication Media
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-item dropdown  position-static "
              onMouseEnter={handleMouseEnterOurWork}
              onMouseLeave={handleMouseLeaveOurWork}
              ref={ourWorkRef}
            >
              <Link
                className="nav-link dropdown-toggle active"
                href={routeMap["case-studies"]}
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                passHref
              >
                Case Studies
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href={routeMap.insights}
                passHref
              >
                Insights
              </Link>
            </li>
          </Nav>
          <ReusableButton
            label="Contact Us"
            navigateTo={() => navigate("/contact-us")}
          />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
