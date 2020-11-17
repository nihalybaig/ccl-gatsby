import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomePageCarousel from "../components/HomePageCarousel"
// import FadingDiv from "../components/FadingDiv"
// import SlideBox from "../components/SlideBox"
import { Col, Row } from "react-bootstrap"
import IconTileRow from "../components/iconcard"
// import InfoSection from "../components/InfoSection"
import { Divider } from "../components/CommonComponents"
import BrandCarousel from "../components/BrandCarousel"
import CustomParaList from "../components/CustomParaList"
import ProductDetails from "../components/ProductDetails"
import QualitiesCards from "../components/QualitiesCards"

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
        </div>
        <CustomParaList
          title=""
          items={[
            "CONTINENTAL COMPANY LTD S.A. is dedicated in using its resources to gain market share aggressively in the years to come.  We strive to promote our quality brands with our knowledge of this market place.  CCL is proud of its accomplishments to this date and is ready to take advantage of new challenges to come, while expanding and strengthening to new horizons of our business.",
            "CCL market coverage is supplied with approximately NUMBER OF establishments directly and over 50 OTHER stores indirectly.",
          ]}
        />
        <ProductDetails />

        {/*         <InfoSection
          title="Food"
          text="<p>
            We are having 3000 or more food products and are still counting. We
            deal with all top brands and distributors. We always ensure the
            quality, quantity and the availability of products
          </p>
          <p>
            Canned &amp; Preserved, Grains &amp; Cereals, Specialty Products,
            Sweets, Snacks &amp; Bakery, Coffee, Infusions, Canned Foods,
            Mustards &amp; Relishes, Concentrates &amp; Marinades, Conserves,
            Honey &amp; Jams, Dressings, Sauces, Dips &amp; Pastes, Finished
            products, Oil &amp; Vinegar, Preserves &amp; Spreads, Spices,
            Seasonings &amp; Salts, Breakfast Cereals, Corn, Flour &amp; Starch,
            Pasta &amp; Noodles, Seeds, Beans &amp; Pulses, Rice &amp; Rice
            Products, Diet Products, Biscuits &amp; Cookies, Cakes, Puddings
            &amp; Mixes, Candy, Gum, Lollipops &amp; Mints, Chocolate, Cocoa,
            Toffee, Crisps &amp; Crackers, Healthy Snacks, Nuts, Dried Fruits,
            Popcorn, Olives &amp; Pickled Snacks
          </p>"
          img="site-images/2 (2).jpg"
        /> */}
        {/* <div data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
          <div style={{ marginBottom: `1.45rem` }}>
            <Image
              alt="dsas"
              filename="optimizing-images/gatsby-astronaut.png"
            />
          </div>
        </div> */}
      </div>
      {/* <Row className="d-flex justify-content-md-center align-items-center my-5"> */}
      <Divider />
      <Row>
        <Col lg={12} className="py-1">
          <QualitiesCards />
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col lg={12} className="py-1">
          <h2 className="text-center mb-4">Best in Class</h2>
          <IconTileRow />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col lg={12} className="py-1">
          <h2 className="text-center mb-5">Our Suppliers</h2>
          <BrandCarousel />
        </Col>
      </Row>

      {/* </Row> */}
      {/* <Link to="/gallery/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
)

export default IndexPage
