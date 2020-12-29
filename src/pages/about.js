import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoSection from "../components/InfoSection"
import BreadcrumbComponent from "../components/Breadcrumb"
import FadingDiv from "../components/FadingDiv"
import { Divider } from "../components/CommonComponents"
// import CoreValues from "../components/CoreValues"

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
              CONTINENTAL COMPANY LTD has a comprehensive pool of talent
              dedicated to both domestic and international trading advice.
              Wherever we are based, our experts offer supply chain management
              and commodity trading advice founded on principles of
              responsibility, transparency, and dedication. CONTINENTAL FOOD is
              an Agricultural commodity trading company trader. We bring food to
              facilitate profitable and sustainable trading of agricultural food
              products. In addition, as traders we are bringing a comprehensive
              list of food and beverage ingredients to market
            </p>
            <h5>AGRICULTURE COMMODITIES</h5>
            <p>
              We handle a wide range of commodity trading and supply chain
              demands, offering trading opportunities in agricultural
              commodities such as grain, feed ingredients, hay, oilseeds and
              almost every other product related to food industry CONTINENTAL
              COMPANY LTD FOOD is a wide network of knowledge and talent in KSA
              within all agricultural niches, providing a profitable and
              exciting way to trade, promote, and bring agricultural ingredients
              to market.
            </p>
            <h5>TRADING CONSULTING</h5>
            <p>
              Each CONTINENTAL trade consultant has trained for years in
              commodities and supply chain management. We offer insightful
              trading consultations, formulating
            </p>
          </Col>
        </Row>

        {/* <CoreValues
          title="Our Core Values"
          items={[
            "Compassion",
            "Empathy",
            "Respect",
            "Collaboration",
            "Transparency",
            "Accountability",
          ]}
        /> */}
        <Row className="d-flex justify-content-md-center align-items-center my-2 py-5">
          <Col>
            <FadingDiv
              data={[
                {
                  title: "ABOUT US",
                  desc: "BRINGING YOU THE FOODS OF THE WORLD, SINCE 2008",
                  color: "green",
                },
                {
                  title: "CAPABILITIES",
                  desc: "IMAGINE THE ENDLESS POSSIBILITIES WITH US",
                  color: "green",
                },
                {
                  title: "SERVICES",
                  desc: "SEE HOW WE CAN HELP GROW YOUR BUSINESS",
                  color: "green",
                },
                {
                  title: "RECIPES",
                  desc: "HEALTHY LIVING STARTS HERE",
                  color: "green",
                },
              ]}
            />
          </Col>
        </Row>
        <Divider />
        <div className="m-2"></div>
        <InfoSection
          title="Mission"
          text="
          <ul>
          <li>Provide Highest Quality and Reliable products to KSA Markets via Custom Manufacturing & Trading.</li>
          <li>To be the premiere food company in Saudi Arabia providing the best quality ingredients by leveraging our long years of experience, in-depth knowledge of the market, strict food safety adherence, and valued long-term relationships across the KSA.</li>
          </ul>"
          img="carousel-images/0.jpg"
        />
        <Divider />

        <InfoSection
          title="Vision"
          text=" <ul>
          <li>Empower continental Trade for Product Quality.</li>
          </ul>"
          img="carousel-images/6.jpg"
          reverse={true}
        />
        <Divider />
      </Container>
    </div>
  </Layout>
)

export default About
