import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { GiCutDiamond, Gi3DHammer, Gi3DStairs, GiAbacus } from "react-icons/gi"

const itemList = [
  {
    title: "WIDE RANGE OF PRODUCTS",
    description: "dsfdafbgb sakd laks dlaks dlk asld k",
    icon: <GiCutDiamond />,
  },
  {
    title: "SUPERFAST DELIVERY",
    description: "dsfdadsfsdff sadkj sadasld ald asd lak dalks dbgb",
    icon: <GiAbacus />,
  },
  {
    title: "QUALITY FIRST",
    description: "bgdjaskld aslk dalks dkla slkd alsd al sdlkb",
    icon: <Gi3DHammer />,
  },
  {
    title: "CUSTOMER SATISFACTION",
    description:
      "dsfdfsdf afbgbsa kd salkd asld lkas dklas dlk aslkd als dlkas d",
    icon: <Gi3DStairs />,
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
              className="background-1"
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
