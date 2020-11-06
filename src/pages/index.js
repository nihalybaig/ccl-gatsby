import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomePageCarousel from "../components/HomePageCarousel"
import FadingDiv from "../components/FadingDiv"
import SlideBox from "../components/SlideBox"
import { Col, Row } from "react-bootstrap"
import IconTileRow from "../components/iconcard"
import InfoSection from "../components/InfoSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageCarousel />
    <div
      style={{
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <div className="m-2 p-2">
        <hr />
      </div>
      <div className="m-2 p-2">
        <h1>Continental Logistics Services</h1>
        <p>Established in 2016</p>
        <p>Now go explore something great.</p>
        <InfoSection
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
          img="optimizing-images/gatsby-astronaut.png"
        />
        <div data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image
              alt="dsas"
              filename="optimizing-images/gatsby-astronaut.png"
            />
          </div>
        </div>
      </div>
      <div className="m-4 p-2">
        <hr />
      </div>
      <Row className="justify-content-md-center align-items-center pb-5">
        <Col sm={6}>
          <FadingDiv />
        </Col>
        <Col sm={6}>
          <SlideBox />
        </Col>
      </Row>
      <IconTileRow />
      {/* <Link to="/gallery/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
)

export default IndexPage
