import { Card, Col, Container, Row } from "react-bootstrap"
import React from "react"
import productList from "./productList.json"
import "./product-details.scss"
import { Link } from "gatsby"
import Image from "./image"

export default function ProductDetails() {
  return (
    <div className="product-details">
      <Container>
        <Row>
          {productList.map((prod, i) => (
            <Col lg={4} md={6} xs={12} className="p-2" key={i}>
              <Card className="border-o">
                <Link to={`/products${prod.link || ""}`}>
                  <Card.Body className="p-0">
                    <div style={{ overflow: "hidden" }}>
                      {/* <Card.Img variant="top"> */}
                      <Image
                        // variant="top"
                        filename={prod.image}
                        alt={prod.name}
                      />
                      {/* </Card.Img> */}
                    </div>
                    <Card.Title className="text-center">{prod.name}</Card.Title>
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
