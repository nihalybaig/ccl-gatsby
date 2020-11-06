import React from "react"
import { Link } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import TeamDetails from "../components/TeamDetails"
import BreadcrumbComponent from "../components/Breadcrumb"
const vision = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nullam eleifend ex velit, non tincidunt ex suscipit non.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nullam eleifend ex velit, non tincidunt ex suscipit non.",
]
const mission = [
  "Lorem ipsum dolor sdsda sit amet, consectetur adipiscing elit.",
  "Nullam eleifend qewe3r2rex velit, non tincidunt ex suscipit non.",
  "Lorem ipsum dolor siewreerrt amet, consectetur adipiscing elit.",
  "Nullam eleifend ex velierr2errt, non tincidunt ex suscipit non.",
]

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <BreadcrumbComponent current="About Us" />
    <TeamDetails />
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="text-center">About the Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eleifend ex velit, non tincidunt ex suscipit non. Nunc placerat enim
            in est venenatis suscipit. Nullam id sapien consectetur, laoreet
            velit non, ornare tellus. Nullam blandit vehicula ex, ut ullamcorper
            metus venenatis sed.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Image alt="dsas" filename="site-images/aboutus.jpg" />
        </Col>
        <Col lg={6}>
          <h2>About the Company</h2>
          <ul>
            {vision.map(function (item) {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xs={{ span: 12, order: 2 }}>
          <h2>About the Company</h2>
          <ul>
            {mission.map(function (items) {
              return <li key={items}>{items}</li>
            })}
          </ul>
        </Col>
        <Col lg={6} xs={{ span: 12, order: 1 }}>
          <Image alt="dsas" filename="site-images/aboutus.jpg" />
        </Col>
      </Row>
    </Container>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
