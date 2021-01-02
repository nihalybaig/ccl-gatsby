import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import Image from "./image"

export default function CustomListWith3Image({
  title = "",
  items = [],
  images = [],
}) {
  return (
    <div className="my-5">
      <h3 className="my-4 text-center">{title}</h3>
      <Card className="background-1">
        <Card.Body>
          <Row>
            <Col lg={6} className="pl-5">
              {items.map((item, i) => (
                <>
                  <span key={i}>{item}</span>
                  <br />
                </>
              ))}
            </Col>
            <Col lg={6}>
              <div
                data-sal={`slide-left`}
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <div style={{ margin: "0 auto" }}>
                  {images.length > 0 &&
                    images.map(img => <Image alt={img} filename={img} />)}
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
