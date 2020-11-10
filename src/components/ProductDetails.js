import { Card, Col, Container, Row } from "react-bootstrap"
import React from "react"
import productList from "./productList.json"
import "./product-details.scss"
import { Link } from "gatsby"

export default function ProductDetails() {
  return (
    <div className="product-details">
      <Container>
        <Row>
          {productList.map((te, i) => (
            <Col lg={4} md={6} xs={12} className="p-2" key={i}>
              <Card className="border-o">
                <Link to="/gallery">
                  <Card.Body className="p-0">
                    <div style={{ overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={productList[0].image}
                        alt={te.name}
                      />
                    </div>
                    <Card.Title className="text-center">{te.name}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
