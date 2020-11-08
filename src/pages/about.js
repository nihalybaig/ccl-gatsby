import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamDetails from "../components/TeamDetails"
import InfoSection from "../components/InfoSection"
import BreadcrumbComponent from "../components/Breadcrumb"
import { Divider } from "../components/CommonComponents"
const About = () => (
  <Layout>
    <SEO title="About Us" />
    <BreadcrumbComponent current="About Us" />
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
        <Divider />
        <Row>
          <Col lg={12} className="py-1">
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

        <div className="m-2"></div>
        <InfoSection
          title="Mission"
          text="
          <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam eleifend ex velit, non tincidunt ex suscipit non.</li>
          </ul>"
          img="site-images/aboutus.jpg"
        />
        <Divider />

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
        <Divider />
      </Container>
    </div>
  </Layout>
)

export default About
