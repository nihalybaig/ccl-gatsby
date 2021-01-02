import { useMediaQuery } from "beautiful-react-hooks"
import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { FaCheckSquare } from "react-icons/fa"

export default function CustomList({ title = "", items = [] }) {
  const isSmall = useMediaQuery("(max-width:768px)")
  const isMedium = useMediaQuery("(max-width:992px)")

  const maxHeightValue = isSmall ? "unset" : isMedium ? 800 : 610

  return (
    <div className="px-2 mx-1">
      <h3 className="my-4 text-center">{title}</h3>
      <Card className="background-2">
        <Card.Body>
          <Row
            style={{
              maxHeight: maxHeightValue,
              flexDirection: isSmall ? "row" : "column",
              fontSize: 20,
            }}
          >
            {items.map((item, i) => (
              <Col
                lg={4}
                md={6}
                xs={item.indexOf("<HEAD>") >= 0 ? 12 : 6}
                key={i}
              >
                {item ? (
                  <p className="mb-1">
                    {item.indexOf("<HEAD>") >= 0 ? (
                      <h4
                        className={
                          isSmall ? "my-1 text-center border-1" : "my-2"
                        }
                      >
                        {item.split("<HEAD>")[1]}
                      </h4>
                    ) : (
                      <Row>
                        <Col xs={1} style={{ verticalAlign: "text-bottom" }}>
                          <FaCheckSquare />
                        </Col>
                        <Col xs={10}>{item}</Col>
                      </Row>
                    )}
                  </p>
                ) : (
                  <div className={isSmall ? "" : "my-3"} />
                )}
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
