import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoSection from "../components/InfoSection"
import BreadcrumbComponent from "../components/Breadcrumb"
import FadingDiv from "../components/FadingDiv"
import { Divider } from "../components/CommonComponents"
import CoreValues from "../components/CoreValues"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <BreadcrumbComponent current="About Us" />
    <div className="im-container">
      <Container>
        <Row>
          <Col lg={12} className="py-1">
            <h2>About the Company</h2>
            <p>
              CCL consists of 18 employees.  Our staff is composed of
              knowledgeable professionals with ample experience in the sales,
              marketing and distribution business.  We provide constant training
              and support to our sales force providing them with the backup
              required to penetrate this market place while increasing our
              client base daily and keeping the old clients always satisfied of
              our quality service.
            </p>
            <p>
              CCL office and 10,000 sq. Feet warehouse is located in a central
              location great for dispatching our daily deliveries and is located
              only 5 minutes from the CITY.  CCL plans to expand its business to
              its own point of sale stores, where they will only sell GOOD
              CONSUMABLE   In these wholesale points of sale, we will provide
              them with affordable products for that specialty market place and
              do big volumes with less profit.
            </p>
            <p>
              CCL transportation fleet consists of 5 trucks, which includes 1
              frozen truck, 1 refrigerated truck, and 3 vans, which provide us
              with our diverse distribution system.  Our fleets are WELL
              equipped drivers are provided with daily routes and we provide
              follow up by a supervisor at the end of day sales.  Supervisors
              evaluate the sales and see the latest trends to better improve our
              daily sales while constantly updating our data analysis.
            </p>
            <p>
              CCL marketing philosophy and strategy is totally focused on
              innovation and service. Market penetration at all levels has and
              will continue to be at the core of its activities.  CCL
              positioned with an assortment of SKU is dominating the
              competition.  Our marketing campaign is continuously monitored to
              ensure that each brand is uniquely positioned and targeting its
              intended audience.
            </p>
            <p>
              CCL facilities are equipped with refrigerated and frozen equipment
              to keep our dairy, produce and frozen products fresh at all
              times.  In addition, we have air-conditioned rooms for
              confectionery items thus ensuring the freshness and quality of our
              products. CCLprovides our clients with the backup they need in
              terms of promotional material, displays and much more to sell our
              brands with the help of our suppliers of course.
            </p>
            <p>
              CCL plans to invest in a route computer program to improve
              efficiency, reduce costs, monitor our sales force better, and
              provide quicker and better customer service.  This system would
              provide accurate sales figures and forecasts, and would provide
              sales promotions more promptly to customers.  This system is
              specifically designed for the distribution industry and provides
              top quality support to our sales force.
            </p>
          </Col>
        </Row>

        <CoreValues
          title="Our Core Values"
          items={[
            "Compassion",
            "Empathy",
            "Respect",
            "Collaboration",
            "Transparency",
            "Accountability",
          ]}
        />
        <Row className="d-flex justify-content-md-center align-items-center my-2">
          <Col>
            <FadingDiv />
          </Col>
        </Row>
        <Divider />
        <div className="m-2"></div>
        <InfoSection
          title="Mission"
          text="
          <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam eleifend ex velit, non tincidunt ex suscipit non.</li>
          </ul>"
          img="site-images/aboutus.jpg"
        />
        <Divider />

        <InfoSection
          title="Vision"
          text=" <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam eleifend ex velit, non tincidunt ex suscipit non.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Nullam eleifend ex velit, non tincidunt ex suscipit non.</li>
          </ul>"
          img="site-images/aboutus.jpg"
          reverse={true}
        />
        <Divider />
      </Container>
    </div>
  </Layout>
)

export default About
