import React, { useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

import ImageIcon from "./ImageIcon";

function Header() {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToServices = () => {
    router.push("/services");
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

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        // bg="dark"
        // variant="dark"
        className="navbar navbar-expand-lg fixed-top navbar-custom"
      >
        <Container>
          <Navbar.Brand className="logo-container">
            <Link href="/" passHref>
              <ImageIcon
                src="/images/brewcode-logo.png"
                alt="Brewcode logo"
                className="logo"
                width={40}
                height={40}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            className="custom-toggler"
          />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <li className="nav-item" id="nav-text">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  passHref
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item dropdown dropdown-mega position-static"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="nav-link dropdown-toggle active"
                  href="/whatwedo"
                  // onClick={handleDropdownToggle}
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  passHref
                >
                  What We Do
                  {isDropdownOpen ? (
                    <BiChevronDown fontSize={"20px"} />
                  ) : (
                    <BiChevronUp fontSize={"20px"} />
                  )}
                </Link>
                <div className="dropdown-menu shadow">
                  <div className="mega-content px-md-4">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                          <h5 className="mb-3 dropdown-heading">
                            Capabilities
                          </h5>
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
                              <a className="list-group-item" href="#">
                                Cyber Security
                              </a>
                            </p>
                            <p>
                              <a className="list-group-item" href="#">
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
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
