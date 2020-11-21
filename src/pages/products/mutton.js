import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BreadcrumbComponent from "../../components/Breadcrumb"
// import GalleryPhotos from "../components/GalleryPhotos"
import { Col, Row } from "react-bootstrap"
import ProductItemDetails from "../../components/ProductItemDetails"

const GalleryPage = () => {
  const title = "Mutton"
  return (
    <Layout>
      <SEO title={title} />
      <BreadcrumbComponent prev="Our Products" current={title} />

      <div className="im-container-1">
        <Row>
          <Col lg={12} className="py-1">
            <h2 className="text-center">{title}</h2>
            <ProductItemDetails productType={title} />
          </Col>
        </Row>
        <div className="m-2 p-2">
          <br />
        </div>
      </div>
    </Layout>
  )
}
export default GalleryPage
