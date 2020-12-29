import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BreadcrumbComponent from "../../components/Breadcrumb"
// import GalleryPhotos from "../components/GalleryPhotos"
import { Col, Row } from "react-bootstrap"
// import ProductItemDetails from "../../components/ProductItemDetails"
import CustomListWithImage from "../../components/CustomListWithImage"

const GalleryPage = () => {
  const title = "Rice"
  return (
    <Layout>
      <SEO title={title} />
      <BreadcrumbComponent prev="Our Products" current={title} />

      <div className="im-container-1">
        <Row>
          <Col lg={12} className="py-1">
            <h2 className="text-center">{title}</h2>
            <CustomListWithImage
              title="Basmati Rice(1121 White Sella)"
              items={[
                "Grain Length (mm) 8.20mm+",
                "Nature (Raw/Parboiled/Steam) Parboiled",
                "Moisture (%) 14% maximum",
                "Broken (%) 2% maximum",
                "Purity (%) 100% minimum",
                "Crop (Year) Latest Crop (This Year)",
                "Damage (%) 1% maximum",
                "Color White",
                "Sortex (%) 100% Sortex Cleaned",
                "Milling Degree Well Milled Rice",
                "Pack Type (Manual, Semi, Automatic) 100% Automated",
                "Pack Type (Type of Bag)",
                "PP Bags",
                "Jute Bags",
                "Woven Sacks",
                "HDPE - High Density Polyethylene Bags",
                "LDPE - Low Density Polyethylene Bags",
                "BOPP - Biaxially Oriented Polypropylene Bags",
                "Pack Size (kg) 5kg, 10kg, 15kg, 25 kg, 50 kg, 100 kg",
                "Foreign Matter (%) Nil",
                "Whiteness (%) As per Customer Demand",
                "Country of Origin India",
                "Export Certifications Available",
                "Mode of Transport (Logistics) Air, Road, Rail, Sea",
                "Product Sample Available",
                "Black Matter Nil",
                "Insects/Weevils Nil",
                "Port of Loading Sellers Port",
                "Port of Destination CIF ",
                "Payment Terms",
                "50% Advance. 50% Irrevocable & Verifiable Letter of Credit (LC)",
              ]}
              img="prod-item-images/Rice (1).jpg"
            />
            <CustomListWithImage
              title="Non Basmati Rice(IR64)"
              items={[
                "Grain Length (mm) 6mm+",
                "Nature (Raw/Parboiled/Steam) Parboiled",
                "Moisture (%) 14% maximum",
                "Broken (%) 5% maximum",
                "Purity (%) 95% minimum",
                "Crop (Year) Latest Crop (This Year)",
                "Damage (%) 1% maximum",
                "Color Yellow",
                "Sortex (%) 100% Sortex Cleaned",
                "Milling Degree Well Milled Rice",
                "Pack Type (Manual, Semi,",
                "Automatic)",
                "100% Automated",
                "Pack Type (Type of Bag)",
                "PP Bags",
                "Jute Bags",
                "Woven Sacks",
                "HDPE - High Density Polyethylene Bags",
                "LDPE - Low Density Polyethylene Bags",
                "BOPP - Biaxially Oriented Polypropylene Bags",
                "Pack Size (kg) 5kg, 10kg, 15kg, 25 kg, 50 kg, 100 kg",
                "Foreign Matter (%) Nil",
                "Whiteness (%) Silky Polished",
                "Country of Origin India",
                "Export Certifications Available",
                "Mode of Transport (Logistics) Air, Road, Rail, Sea",
                "Product Sample Available",
                "Brand Name SADR fresh ®",
                "Black Matter Nil",
                "Insects/Weevils Nil",
                "Port of Loading Sellers Port",
                "Port of Destination CIF - ",
                "Payment Terms",
                "50% Advance. 50% Irrevocable & Verifiable Letter of Credit (LC)",
              ]}
              img="prod-item-images/Rice (2).jpg"
            />
            {/* <ProductItemDetails productType={title} /> */}
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
