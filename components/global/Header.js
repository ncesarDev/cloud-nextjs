import Link from "next/link";

import { MdOutlineMailOutline, MdCall } from "react-icons/md";
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';


const Header = () => {
  return (
    <header >
      <div className="container-hero-one text-light py-1 ">
        <Container>
          <Row className="align-items-center justify-content-center justify-content-md-between">
            <Col md={6} className="mb-3 mb-md-0 text-center container-info">
              <div className="d-inline-block me-3">
                <FaEnvelope className="me-2" />
                <span>inmobiliaria@newlands.com.mx</span>
              </div>
              <div className="d-inline-block ">
                <FaMapMarkerAlt className="me-2" />
                <span>Blvd. Villas de Irapuato #1443 Local 08</span>
              </div>
            </Col>
            <Col md={6} className="d-flex justify-content-md-end justify-content-center">
              <Nav.Link href="tel:4621717984" className="text-white red_social mt-3">
                <FaWhatsapp />
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/newlandsinmobiliaria" className="text-white  red_social mt-3">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/InmobiliariaNe1" className="text-white  red_social mt-3">
                <FaXTwitter />
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/channel/UCEkrZzXagFMlyeJrewHJTOw?view_as=subscriber" className="text-white  red_social mt-3">
                <FaYoutube />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/newlandsinmobiliaria/" className="text-white  red_social mt-3">
                <FaInstagram />
              </Nav.Link>


              <Link className="nav-link ms-3 boton-contact " href="/contact">
                Contáctanos
              </Link>

            </Col>
          </Row>
        </Container>
      </div>
      <div className="header">
        <div className="container">

          <Navbar className="p-0" bg="none" expand="lg">
          
            <Link href="/">
            <img className="m-1 logo" src="../images/logo.png" alt="hero" />
            </Link>
            <Navbar.Toggle
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="togler-icon-inner">
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse
              className="collapse navbar-collapse main-menu pg-scroll justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/all-property">
                    Propiedades
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/rent_or_seller">
                  Vender o Rentar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blogs">
                    Blog
                  </Link>
                </li>

              </ul>
              <ul className="navbar-nav navbar__right d-block d-lg-none">
                <li className="nav-item">
                  <Link className="nav-link" href="mailto:admin@gmail.com">
                    <MdOutlineMailOutline /> inmobiliaria@newlands.com.mx
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="tel:4621717984">
                    <FaWhatsapp /> 4621717984
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>

            <ul className="navbar-nav navbar__right d-none d-lg-flex gap-2">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex gap-2 align-items-center"
                  href="tel:4621717984"
                >
                  <FaWhatsapp /> 4621717984
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="mailto:ana@newlands.com.mx">
                  <MdOutlineMailOutline /> ana@newlands.com.mx
                </Link>
              </li>
            </ul>
          </Navbar>
        </div>

      </div>

    </header>
  );
};

export default Header;
