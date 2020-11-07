import React from "react"
import { Link } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamDetails from "../components/TeamDetails"
import InfoSection from "../components/InfoSection"
const About = () => (
  <Layout>
    <SEO title="About Us" />

    <div
      style={{
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <Container>
        <Row>
          <Col lg={12} className="py-1">
            <h2 className="text-center">Our Workforce</h2>
            <TeamDetails />
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="py-2">
            <h2>About the Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eleifend ex velit, non tincidunt ex suscipit non. Nunc placerat
              enim in est venenatis suscipit. Nullam id sapien consectetur,
              laoreet velit non, ornare tellus. Nullam blandit vehicula ex, ut
              ullamcorper metus venenatis sed.
            </p>
          </Col>
        </Row>
      </Container>
      <InfoSection
        title="Mission"
        text="
          <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam eleifend ex velit, non tincidunt ex suscipit non.</li>
          </ul>"
        img="site-images/aboutus.jpg"
      />
      <InfoSection
        title="Vision"
        text=" <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam eleifend ex velit, non tincidunt ex suscipit non.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam eleifend ex velit, non tincidunt ex suscipit non.</li>
          </ul>"
        img="site-images/aboutus.jpg"
        reverse={true}
      />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
