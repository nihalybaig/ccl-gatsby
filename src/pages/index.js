import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomePageCarousel from "../components/HomePageCarousel"
// import FadingDiv from "../components/FadingDiv"
// import SlideBox from "../components/SlideBox"
import { Col, Row } from "react-bootstrap"
// import IconTileRow from "../components/iconcard"
// import InfoSection from "../components/InfoSection"
import { Divider } from "../components/CommonComponents"
import BrandCarousel from "../components/BrandCarousel"
import CustomParaList from "../components/CustomParaList"
import QualitiesCards from "../components/QualitiesCards"
// import InfoSection from "../components/InfoSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageCarousel />
    <div className="im-container">
      <div className="mx-2 my-3 px-1">
        <div className="my-2 py-2">
          <h1>Continental Company Limited</h1>
          <p>Established in 2016</p>
          <p>
            CONTINENTAL COMPANY LTD S.A. is one of the major distributors of
            imported foods and beverages, and other consumer goods.  Our company
            has more than 16 years of experience in the distribution business as
            well as supermarket chains.  We dominate the supermarket,
            convenience and horeca markets.
          </p>
          <p>
            The name “CONTINENTAL company ltd” reflects Business Centricity
            Focus (i.e. Continental) with a Kingdom Wide product reach, hence
            “Continental has Product Development and Trade Experience of more
            than 12 years. The company strongly Believes that (1) Quality
            Leadership via Deep Technical Product Knowledge (2) Operational
            Efficiency via Execution Excellence (3Technology and Digital
            Infrastructure are the three pillars of Growth, Sustainability and
            above all “Customer Satisfaction”.
          </p>
          <p>
            Continental is a company in KSA and a strong background of Product
            Quality Compliance of International Standards. Highest Quality of
            Rice distributor Processed under our leadership (Milling & Packing)
            and Transported ensuring Standardized Class “Quality Assurance”.
          </p>
          <p>
            The company staff takes pride in closely working with paddy farmers
            in South Asia and ensuring that the continental Trade Benefits flow
            fairly amongst the complete value chain. The company is also
            dedicated towards environmental upgradation and natural agricultural
            practices.
          </p>
        </div>
        <CustomParaList
          img="site-images/aboutus.jpg"
          title=""
          items={[
            "CONTINENTAL COMPANY LTD S.A. is dedicated in using its resources to gain market share aggressively in the years to come.  We strive to promote our quality brands with our knowledge of this market place.  CCL is proud of its accomplishments to this date and is ready to take advantage of new challenges to come, while expanding and strengthening to new horizons of our business.",
            "CCL market coverage is supplied with approximately NUMBER OF establishments directly and over 50 OTHER stores indirectly.",
          ]}
        />
        <h5>Responsibilty</h5>
        <p>
          Continental along with its Companies matches commercial ambition with
          a sense of responsibility towards environment, people and law of land.
          The company is committed to protect its own business interests along
          with interests of associated communities and the environment. Our
          planning and actions “makes a big difference”.
        </p>
        <h5>Approach</h5>
        <p>
          Continental maintains the highest Industry Standards for Business
          Operations. In order to manage commercial activities and growth
          endeavors, Continental maintains a working platform, diversified
          experience and specialized performance.
        </p>
        {/* <Row>
          <Col lg={12} className="py-1">
            <InfoSection
              title="Responsibility"
              text="<p>
          Continental along with its Companies matches commercial ambition with a sense of responsibility towards environment, people and law of land. The company is committed to protect its own business interests along with interests of associated communities and the environment. Our planning and actions “makes a big difference”.
          </p>"
              img="carousel-images/6.jpg"
              reverse={true}
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col lg={12} className="py-1">
            <InfoSection
              title="Approach"
              text="<p>
          Continental maintains the highest Industry Standards for Business Operations. In order to manage commercial activities and growth endeavors, Continental maintains a working platform, diversified experience and specialized performance.
          </p>"
              img="carousel-images/0.jpg"
            />
          </Col>
        </Row>
        <Divider /> */}
      </div>
      <Row>
        <Col lg={12} className="py-1">
          <QualitiesCards />
        </Col>
      </Row>
      <Divider />

      {/* <Row>
        <Col lg={12} className="py-1">
          <h2 className="text-center mb-4">Best in Class</h2>
          <IconTileRow />
        </Col>
      </Row>
      <Divider /> */}
      <Row>
        <Col lg={12} className="py-1">
          <h2 className="text-center mb-5">Our Suppliers</h2>
          <BrandCarousel />
        </Col>
      </Row>

      {/* </Row> */}
      {/* <Link to="/products/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
)

export default IndexPage
