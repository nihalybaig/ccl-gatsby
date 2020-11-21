import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadcrumbComponent from "../components/Breadcrumb"
// import GalleryPhotos from "../components/GalleryPhotos"
import { Col, Row } from "react-bootstrap"
import ProductDetails from "../components/ProductDetails"

const GalleryPage = () => (
  <Layout>
    <SEO title="Products" />
    <BreadcrumbComponent current="Our Products" />

    <div className="im-container-1">
      <Row>
        <Col lg={12} className="py-1">
          <h2 className="text-center">Our Range of Products</h2>
          <ProductDetails />
        </Col>
      </Row>
      <div className="m-2 p-2">
        <br />
      </div>
    </div>
  </Layout>
)

export default GalleryPage
