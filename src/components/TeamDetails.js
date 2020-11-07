import { Card, Col, Container, Row } from "react-bootstrap"
import React from "react"
import teamList from "./teamList.json"

export default function TeamDetails() {
  return (
    <>
      <Container>
        <Row>
          {teamList.map(te => (
            <Col lg={3} md={6} className="pt-2 pb-4">
              <Card className="border-0">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={teamList[0].image}
                    alt={te.name}
                  />
                  <Card.Title className="text-center py-4">
                    {te.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
