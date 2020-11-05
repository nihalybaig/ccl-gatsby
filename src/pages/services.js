import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoSection from "../components/InfoSection"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <InfoSection />
    <InfoSection reverse={true} />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
