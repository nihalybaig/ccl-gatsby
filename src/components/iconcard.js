import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import CountUp from "react-countup"
import { AiFillFacebook } from "react-icons/ai"
import VisibilitySensor from "react-visibility-sensor"

const VisibleCounter = ({ count }) => (
  <CountUp end={count} duration={1}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} delayedCall>
        <span ref={countUpRef} />
      </VisibilitySensor>
    )}
  </CountUp>
)
/* const IconTile = ({ icon, title, desc }) => {
  return (
    <Card
      style={{
        textAlign: "center",
      }}
      className="mb-2"
    >
      <Card.Header
        style={{ fontSize: "4rem" }}
        className="bg-white border-0 py-1"
      >
        {icon}
      </Card.Header>
      <Card.Body className="pt-1">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  )
} */

const StatTile = ({ icon, stat, desc }) => {
  return (
    <Card
      style={{
        textAlign: "center",
      }}
      className="mb-2"
    >
      <Card.Header
        style={{ fontSize: "4rem" }}
        className="bg-white border-0 py-1"
      >
        {icon}
      </Card.Header>
      <Card.Body className="pt-1">
        <Card.Title>
          <VisibleCounter count={stat} /> +
        </Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  )
}

const IconTileRow = () => {
  return (
    <Row className="justify-content-md-center align-items-center">
      <Col sm={3}>
        <StatTile
          icon={<AiFillFacebook />}
          stat="3423"
          desc="dsada ajskd k das"
        />
      </Col>
      <Col sm={3}>
        <StatTile
          icon={<AiFillFacebook />}
          stat="32332"
          desc="dsada ajskd k das"
        />
      </Col>
      <Col sm={3}>
        <StatTile
          icon={<AiFillFacebook />}
          stat="342"
          desc="dsada ajskd k das"
        />
      </Col>
      <Col sm={3}>
        <StatTile
          icon={<AiFillFacebook />}
          stat="2323"
          desc="dsada ajskd k das"
        />
      </Col>
    </Row>
  )
}

export default IconTileRow
