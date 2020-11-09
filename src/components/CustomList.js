import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { GiCutDiamond } from "react-icons/gi"

export default function CustomList({ title = "", items = [] }) {
  return (
    <div className="px-2 mx-1">
      <h3 className="my-4 text-center">{title}</h3>
      <Card className="text-white background-1">
        <Card.Body>
          <Row
            style={{ maxHeight: 380, flexDirection: "column", fontSize: 20 }}
          >
            {items.map((item, i) => (
              <Col lg={4} key={i}>
                {item && (
                  <p className="mb-1">
                    {item.indexOf("<HEAD>") >= 0 ? (
                      <h4 className="mt-2">{item.split("<HEAD>")[1]}</h4>
                    ) : (
                      <>
                        <span className="mr-2">
                          <GiCutDiamond />
                        </span>
                        <span>{item}</span>
                      </>
                    )}
                  </p>
                )}
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
