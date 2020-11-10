import React from "react"
import { Col, Row } from "react-bootstrap"
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
      className="text-center text-white background-1"
    >
      <Row className="im-container text-left">
        <Col lg={6}>
          <h5>Best in class</h5>
          <p>
            kdlsam dka daslk dals lkas dlka sdlkas dl laks dlak sld asld aklsd
            alks dalkd sa
          </p>
        </Col>
        <Col lg={3}>
          <h5>Useful Links</h5>
          <p>link 1</p>
          <p>link 2</p>
          <p>link 3</p>
          <p>link 4</p>
        </Col>
        <Col lg={3}>
          <h5>External Links</h5>
          <p>link 1</p>
          <p>link 2</p>
          <p>link 3</p>
          <p>link 4</p>
        </Col>
      </Row>
      <div style={{ fontSize: 14, marginTop: 10 }}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a
          href="mailto:nihal.y.baig@gmail.com"
          className="text-center text-white font-weight-bold"
        >
          Baigs
        </a>
      </div>
    </footer>
  </div>
)

export default Footer
