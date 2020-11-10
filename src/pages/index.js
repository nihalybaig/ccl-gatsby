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
            On several decades of solid experience the group had obtained in the
            importation, storage and distribution of dry, chilled and frozen
            products throughout Saudi Arabia to various clients in KSA
          </p>
        </div>
        <CustomParaList
          title=""
          items={[
            "Welcome to our employment section and apply for positions online. Here are our current job openings. Please click on the job title for more information, and apply from that page if you are interested",
            "Welcome to our employment section and apply for positions on job openings. Please click on the job title for more information, and apply from that page if you are interested",
            "Welcome to our employment section and apply for positions onre information, and apply from that page if you are interested",
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
