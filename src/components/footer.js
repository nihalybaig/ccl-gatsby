import { Link } from "gatsby"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FaGlobe } from "react-icons/fa"
import SocialMediaBar from "./soical-media"
import Subscribe from "./subscribe"

const Footer = () => (
  <div className="mt-5">
    <Subscribe />
    <SocialMediaBar />
    <footer
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
      className="text-center background-1"
    >
      <Row className="im-container text-left mb-4">
        <Col lg={6}>
          <h5>Best in class</h5>
          <p>
            Provide Highest Quality and Reliable products to KSA Markets via
            Custom Manufacturing & Trading.
          </p>
        </Col>
        <Col lg={2}></Col>
        <Col lg={4}>
          <h5>Address</h5>
          <address>
            <FaGlobe style={{ margin: `0 5px 2px 1px` }} />
            <strong>Continental Company Ltd.</strong>
            <br />
            Continental FOODS Division
            <br />
            P O Box 1973, Dammam 34271
            <br />
            KSA
            <br />
          </address>
        </Col>
        <Col className="justify-center text-center">
          <h5>Useful Links</h5>
          <Link to="/">
            <span className="py-1 px-3 text-dark">Home</span>
          </Link>
          <span className="text-dark">|</span>
          <Link to="/about">
            <span className="py-1 px-3 text-dark">About Us</span>
          </Link>
          <span className="text-dark">|</span>
          <Link to="/services">
            <span className="py-1 px-3 text-dark">Our Services</span>
          </Link>
          <span className="text-dark">|</span>
          <Link to="/products">
            <span className="py-1 px-3 text-dark">Our Products</span>
          </Link>
        </Col>
      </Row>
      <div style={{ fontSize: 14, marginTop: 10 }}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a
          href="mailto:nihal.y.baig@gmail.com"
          className="text-center background-1 font-weight-bold"
        >
          Baigs
        </a>
      </div>
    </footer>
  </div>
)

export default Footer
