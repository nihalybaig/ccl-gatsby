import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoSection from "../components/InfoSection"
import BreadcrumbComponent from "../components/Breadcrumb"
import { Divider } from "../components/CommonComponents"
import CustomList from "../components/CustomList"
// import { Col, Row } from "react-bootstrap"
// import ProductItemDetails from "../components/ProductItemDetails"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <BreadcrumbComponent current="Services" />
    <div className="im-container">
      <CustomList
        title="WHAT WE SELL"
        items={[
          "<HEAD>Food",
          "dksjn",
          "cheese",
          "dksjn",
          "cheese",
          "dksjn",
          "cheese",
          "dksjn",
          "cheese",
          "dksjn",
          "<HEAD>Frozen",
          "dksjn",
          "dksjn",
          "pepsi",
          "pepsi",
          "<HEAD>",
          "<HEAD>",
          "<HEAD>Drinks",
          "dksjn",
          "cheese",
          "cheese",
          "<HEAD>",
          "<HEAD>Food",
          "dksjne",
          "dksjne",
          "dksjne",
          "cheese",
          "dksjn",
          "cheese",
          "dksjn",
          "cheese",
          "dksjn",
        ]}
      />
      <div className="m-2 p-2">
        <br />
      </div>
      <InfoSection
        title="Food and Beverages"
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
        img="site-images/1 (2).jpg"
      />
      <Divider />
      <InfoSection
        title="Frozen Meat"
        text="<p>
            We are having 3000 or more food products and are still counting. We
            deal with all top brands and distributors. We always ensure the
            quality, quantity and the availability of products
          </p>
          <p>
            Canned &amp; Preserved, Grains &amp; Cereals, Specialty Products,
            Products, Diet Products, Biscuits &amp; Cookies, Cakes, Puddings
            &amp; Mixes, Candy, Gum, Lollipops &amp; Mints, Chocolate, Cocoa,
            Toffee, Crisps &amp; Crackers, Healthy Snacks, Nuts, Dried Fruits,
            Popcorn, Olives &amp; Pickled Snacks
          </p>"
        img="site-images/2 (2).jpg"
        reverse={true}
      />
    </div>
  </Layout>
)

export default Services
