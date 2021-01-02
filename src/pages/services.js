import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoSection from "../components/InfoSection"
import BreadcrumbComponent from "../components/Breadcrumb"
// import { Divider } from "../components/CommonComponents"
import CustomListColumns from "../components/CustomListColumns"
// import { Col, Row } from "react-bootstrap"
// import ProductItemDetails from "../components/ProductItemDetails"

const whatWeSellData = [
  "<HEAD>Seafood",
  "Sardines",
  "Salmon",
  "Tilapia",
  "Fish fillet",
  "Lobster",
  "Prawns",
  "Shrimp",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>Chicken",
  "Chicken leg",
  "Whole chicken",
  "Chicken drumstick",
  "Chicken thigh (bone in)",
  "Chicken whole leg (back attached)",
  "Chicken breast fillets (or tenders)",
  "<HEAD>",
  "<HEAD>Mutton",
  "Shoulder",
  "Chop/Rack",
  "Loin Chop",
  "Rump",
  "Leg",
  "Shank",
  "Neck",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>Beef",
  "Chuck",
  "Rib",
  "Loin",
  "Eye Round",
  "Flank",
  "Brisket ",
  "Shank",
  "<HEAD>Rice",
  "Basmati Rice",
  "Basmati Rice 1121",
  "Basmati Rice 1401",
  "Basmati Rice 1509",
  "Sharbati Basmati Rice",
  "Sugandha Basmati Rice",
  "Non-Basmati Rice IR64",
  "Long Grain Non-Basmati",
  "Parmal Rice PR : PR11, PR 14, PR 16",
  "Sona Masuri Rice (Sona Masoori Rice)",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
  "<HEAD>",
]

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <BreadcrumbComponent current="Services" />
    <div className="im-container">
      <CustomListColumns title="WHAT WE SELL" items={whatWeSellData} />
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
      {/* <Divider />
      <InfoSection
        title="Beverages"
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
      /> */}
    </div>
  </Layout>
)

export default Services
