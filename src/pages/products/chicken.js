import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BreadcrumbComponent from "../../components/Breadcrumb"
// import GalleryPhotos from "../components/GalleryPhotos"
import { Col, Row } from "react-bootstrap"
import TeamDetails from "../../components/TeamDetails"

const GalleryPage = () => (
  <Layout>
    <SEO title="Chicken" />
    <BreadcrumbComponent prev="Our Products" current="Chicken" />

    <div className="im-container-1">
      <Row>
        <Col lg={12} className="py-1">
          <h2 className="text-center">Chicken</h2>
          <TeamDetails />
        </Col>
      </Row>
      <div className="m-2 p-2">
        <br />
      </div>
    </div>
  </Layout>
)

export default GalleryPage
