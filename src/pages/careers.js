import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadcrumbComponent from "../components/Breadcrumb"

const SecondPage = () => (
  <Layout>
    <SEO title="Careers" />
    <BreadcrumbComponent current="Careers" />
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default SecondPage
