import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import Image from "./image"

export default function CustomParaList({ title = "", items = [] }) {
  return (
    <div className="my-5">
      <h3 className="my-4 text-center">{title}</h3>
      <Card className="background-1">
        <Card.Body>
          <Row>
            <Col lg={6}>
              {items.map((item, i) => (
                <p key={i}>
                  <span>{item}</span>
                </p>
              ))}
            </Col>
            <Col lg={6}>
              <div
                data-sal={`slide-left`}
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <div style={{ margin: "0 auto" }}>
                  <Image
                    alt={"site-images/aboutus.jpg"}
                    filename={"site-images/aboutus.jpg"}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
