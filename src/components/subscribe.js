// import { Link } from "gatsby"
import React from "react"
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"

const Subscribe = () => {
  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    console.log(event)
  }
  return (
    <div className="background-1 text-white">
      <div
        className="row py-4 d-flex align-items-center"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <div className="col-12">
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-md-center align-items-center">
              <Form.Label column sm={3}>
                Subscribe to updates
              </Form.Label>
              <Col sm={6}>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="E-mail address"
                    required
                  />
                  <InputGroup.Append>
                    <Button type="submit">Join Us</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
