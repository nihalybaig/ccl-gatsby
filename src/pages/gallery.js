import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadcrumbComponent from "../components/Breadcrumb"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <BreadcrumbComponent current="Gallery" />
    <div style={{ maxWidth: 960, margin: "0 auto" }}>{`<Gallery />`}</div>
  </Layout>
)

export default GalleryPage
