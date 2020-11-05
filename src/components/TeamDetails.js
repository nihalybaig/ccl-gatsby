import { Card, Col, Row } from "react-bootstrap"
import React from "react"
import teamList from "./teamList.json"

export default function TeamDetails() {
  return (
    <Row>
      {teamList.map(te => (
        <Col sm={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img variant="top" src={teamList[0].image} alt={te.name} />
              <Card.Title className="text-center py-4">{te.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
