import React from "react"
import { Col, Row } from "react-bootstrap"
import { Divider } from "./CommonComponents"
import SocialMediaBar from "./soical-media"
import Subscribe from "./subscribe"

const Footer = () => (
  <>
    <Subscribe />
    <SocialMediaBar />
    <footer
      style={{
        background: `#000288`,
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
      className="text-center text-white"
    >
      <Row style={{ margin: "0 auto", maxWidth: 960 }}>
        <Col lg={4}>
          <p className="text-left">
            kdlsam dka daslk dals lkas dlka sdlkas dl laks dlak sld asld aklsd
            alks dalkd sa
          </p>
        </Col>
        <Col lg={4}>
          <p>link 1</p>
          <p>link 2</p>
          <p>link 3</p>
          <p>link 4</p>
        </Col>
        <Col lg={4}>
          <p>link 1</p>
          <p>link 2</p>
          <p>link 3</p>
          <p>link 4</p>
        </Col>
      </Row>
      <Divider />
      <div>
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
  </>
)

export default Footer
