import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomePageCarousel from "../components/HomePageCarousel"
import FadingDiv from "../components/FadingDiv"
import SlideBox from "../components/SlideBox"
import { Col, Row } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageCarousel />
    <div
      style={{
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <div className="m-2 p-2">
        <hr />
      </div>
      <div className="m-2 p-2">
        <h1>Hi customers</h1>
        <p>Welcome to our new website.</p>
        <p>Now go explore something great.</p>
        {/* <div data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image alt="dsas" filename="gatsby-astronaut.png" />
        </div>
      </div> */}
      </div>
      <div className="m-4 p-2">
        <hr />
      </div>
      <Row className="justify-content-md-center align-items-center pb-5">
        <Col sm={6}>
          <FadingDiv />
        </Col>
        <Col sm={6}>
          <SlideBox />
        </Col>
      </Row>
      {/* <Link to="/gallery/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
)

export default IndexPage
