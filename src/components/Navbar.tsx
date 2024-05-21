import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  scroll?: boolean;
};

const Header: React.FC<HeaderProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownRef.current) {
      const timeout = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 300);
      setDropdownTimeout(timeout);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownRef.current) {
      const timeout = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 1000);
      setDropdownTimeout(timeout);
    }
  };

  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToServices = () => {
    router.push("/services");
  };
  const navigateToECommerce = () => {
    router.push("/e-commerce");
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    // setTimeout(() => {
    //   router.push("/whatwedo");
    // }, 3000);
  };

  const navigateToCould = () => {
    router.push("/couldServices");
  };
  const navigateToCyberSecurity = () => {
    router.push("/cyberSecurity");
  };

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
      } sticky-top navbar`}
    >
      <div className="container">
        <Navbar.Brand>
          <Link href="/" passHref>
            <div className="logo-wrapper">
              <Image
                src="/images/brewcode-logo.png"
                alt="Brewcode logo"
                className="logo"
                width={40}
                height={40}
                layout="responsive"
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
              <Link className="nav-link" aria-current="page" href="/" passHref>
                Home
              </Link>
            </li>
            <li
              className="nav-item dropdown dropdown-mega position-static"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <Link
                className="nav-link dropdown-toggle active"
                href="/whatwedo"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                passHref
              >
                What We Do
                <i
                  className={`bi ${
                    isDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
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
                  isDropdownOpen ? "show" : ""
                }`}
                style={{ width: "100%" }}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div
                  className={`${
                    scroll ? "navbarActive" : "navbar-custom"
                  } mega-content px-md-4 margin-top`}
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <h5 className="mb-3 dropdown-heading">Capabilities</h5>
                        <div className="">
                          <p>
                            <a
                              className="list-group-item"
                              onClick={navigateToServices}
                            >
                              Services
                            </a>
                          </p>
                          <p>
                            <a
                              className="list-group-item"
                              onClick={navigateToCould}
                            >
                              Colud
                            </a>
                          </p>
                          <p>
                            <a
                              className="list-group-item"
                              onClick={navigateToCyberSecurity}
                            >
                              Cyber Security
                            </a>
                          </p>
                          <p>
                            <a
                              className="list-group-item"
                              onClick={navigateToECommerce}
                            >
                              E-Commerce
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Enterprise Application Development
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Resourse Planning
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Infrastrucure
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4 ">
                        <p className="mt-5 padding-top">
                          <a className="list-group-item" href="#">
                            Robotic Proccess Automation
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            Full Stack Developement
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            Digital Assurance
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            Web Development
                          </a>
                        </p>
                        <p>
                          <a className="list-group-item" href="#">
                            UX/UI designing
                          </a>
                        </p>
                      </div>

                      <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                        <h5 className="mb-3 dropdown-heading">Industries</h5>
                        <div className="">
                          <p>
                            <a className="list-group-item" href="#">
                              Automotive
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Banking
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Capital Markets
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Communication & Modie
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              Health
                            </a>
                          </p>
                          <p>
                            <a className="list-group-item" href="#">
                              High Tech
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/whoweare"
                passHref
              >
                Who We Are
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/insights"
                passHref
              >
                Insights
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/career"
                passHref
              >
                Career
              </Link>
            </li>
          </Nav>
          <button className="contact-us-btn" onClick={navigateToLogin}>
            Contact Us
          </button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
