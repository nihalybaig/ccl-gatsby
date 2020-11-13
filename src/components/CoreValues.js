import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { GiCutDiamond } from "react-icons/gi"
import Image from "./image"

export default function CoreValues({ title = "", items = [] }) {
  return (
    <div className="my-5">
      <h3 className="my-4 text-center">{title}</h3>
      <Card className="background-1">
        <Card.Body>
          <Row>
            {items.map((item, i) => (
              <Col lg={4} md={6} className="pl-5">
                <p key={i}>
                  <span className="mr-2">
                    <GiCutDiamond />
                  </span>
                  <span>{item}</span>
                </p>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
