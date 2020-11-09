import { Card, Col, Container, Row } from "react-bootstrap"
import React from "react"
import teamList from "./teamList.json"
import "./team-details.scss"

export default function TeamDetails() {
  return (
    <div className="team-details">
      <Container>
        <Row>
          {teamList.map(te => (
            <Col lg={3} md={6} className="p-1">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <div style={{ overflow: "hidden" }}>
                    <Card.Img
                      variant="top"
                      src={teamList[0].image}
                      alt={te.name}
                    />
                  </div>
                  <Card.Title className="text-center p-0">{te.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
