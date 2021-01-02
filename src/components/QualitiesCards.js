import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { FaShippingFast } from "react-icons/fa"
import { RiEmotionHappyLine } from "react-icons/ri"
import { GiCutDiamond, GiAbacus } from "react-icons/gi"

const itemList = [
  {
    title: "QUALITY",
    description:
      "First no compromise value for money You Can be confident always",
    icon: <GiCutDiamond />,
  },
  {
    title: "WIDE RANGE OF PRODUCTS",
    description:
      "We deal with a great variety of different things We deliver food, groceries, packages",
    icon: <GiAbacus />,
  },
  {
    title: "SUPERFAST DELIVERY",
    description:
      "You can order online or call anytime to have something delivered to anywhere across KSA",
    icon: <FaShippingFast />,
  },
  {
    title: "CUSTOMER SATISFACTION",
    description:
      "Our teams have been trained to always behave in a courteous, professional manner",
    icon: <RiEmotionHappyLine />,
  },
]

export default function QualitiesCards() {
  return (
    <div className="my-4">
      <h2 className="text-center mb-5">Our Qualities</h2>
      <Row>
        {itemList.map((item, i) => (
          <Col md={6} xs={12} className="px-4 py-2 py-md-4" key={i}>
            <Card
              className="background-2"
              style={{ height: "100%" }}
              data-sal={i % 2 ? `slide-left` : `slide-right`}
              data-sal-delay={(i + 1) * 300 + ""}
              data-sal-easing="ease"
              data-sal-duration={(i + 1) * 300 + ""}
            >
              <Card.Body>
                <Row>
                  <Col
                    xs={2}
                    className="d-flex justify-content-center"
                    style={{ minWidth: 30, fontSize: 48 }}
                  >
                    {item.icon}
                  </Col>
                  <Col xs={10}>
                    <h4 className="font-weight-bold">{item.title}</h4>
                    <p>{item.description}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
