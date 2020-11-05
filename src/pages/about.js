import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamDetails from "../components/TeamDetails"
import { Col, Row } from "react-bootstrap"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <TeamDetails />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
