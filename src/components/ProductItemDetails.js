import { Card, Col, Container, Row } from "react-bootstrap"
import React from "react"
import productItemList from "./productItemList.json"
import "./product-item-details.scss"
import Image from "./image"

export default function ProductItemDetails({ productType = "" }) {
  return (
    <div className="product-item-details">
      <Container>
        <Row>
          {productItemList[productType].map(te => (
            <Col lg={3} md={6} xs={12} className="p-2">
              <Card>
                <Card.Body className="p-0">
                  <div style={{ overflow: "hidden" }}>
                    <Image
                      // variant="top"
                      filename={te.image}
                      alt={te.name}
                    />
                  </div>
                  <Card.Title className="text-center p-0 my-3">
                    {te.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
