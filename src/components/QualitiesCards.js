import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { GiCutDiamond } from "react-icons/gi"

const itemList = [
  {
    title: "WIDE RANGE OF PRODUCTS",
    description: "dsfdafbgb",
  },
  {
    title: "WIDE RANGEfsdf OF PRODUCTS",
    description: "dsfdadsfsdffbgb",
  },
  {
    title: "WIfsdDE RANGE OF PRODUCTS",
    description: "sfd  bgb",
  },
  {
    title: "WIsdfsDE RA  NGE OF PRODUCTS",
    description: "dsfdfsdf afbgb",
  },
]

export default function QualitiesCards() {
  return (
    <div className="my-5">
      <Row>
        {itemList.map(item => (
          <Col md={6} xs={12} className="px-4 py-2 py-md-4">
            <Card className="background-1" style={{ height: "100%" }}>
              <Card.Body>
                <Row>
                  <Col
                    xs={2}
                    className="text-center p-2"
                    style={{ minWidth: 30 }}
                  >
                    <GiCutDiamond size={48} />
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
