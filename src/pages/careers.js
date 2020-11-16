import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadcrumbComponent from "../components/Breadcrumb"
import {
  Button,
  Col,
  Form,
  // InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap"
import jobsData from "../components/jobsList.json"

const Careers = () => {
  const [id, setId] = useState(null)

  const handleClose = () => setId(null)

  const startApplication = id => {
    setId(id)
  }
  const submitApplication = id => {
    handleClose()
  }

  return (
    <Layout>
      <SEO title="Careers" />
      <BreadcrumbComponent current="Careers" />
      <div className="im-container">
        <div className="my-5">
          <h3 className="my-4 text-center">JOIN OUR TEAM</h3>
          <h5 className="my-4 text-center">
            Welcome to our employment section and apply for positions online.
            Here are our current job openings. Please click on the apply button
            if you are interested:
          </h5>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Job Tittle</th>
              <th>Experience</th>
              <th>Job Description</th>
              <th>Posted Date</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {jobsData.map(job => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.exp}</td>
                <td>{job.desc}</td>
                <td>{job.date}</td>
                <td className="text-center">
                  <Button
                    variant="success"
                    onClick={() => startApplication(job.id)}
                  >
                    Apply
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {id && (
          <Modal
            show={id !== null}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Application for {jobsData.filter(j => j.id === id)[0].title} (#
                {id})
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Row className="justify-content-md-center align-items-center p-2 m-2">
                  <Form.Label column sm={2}>
                    Full Name
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </Col>
                </Row>
                <Row className="justify-content-md-center align-items-center p-2 m-2">
                  <Form.Label column sm={2}>
                    Phone No
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" placeholder="Phone No" required />
                  </Col>
                </Row>
                <Row className="justify-content-md-center align-items-center p-2 m-2">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="email"
                      placeholder="E-mail address"
                      required
                    />
                  </Col>
                </Row>
                <Row className="justify-content-md-center align-items-center p-2 m-2">
                  <Form.Label column sm={2}>
                    Updated CV
                  </Form.Label>
                  <Col sm={9}>
                    {/* <InputGroup> */}
                    <Form.Control type="file" required />
                    {/* <InputGroup.Append>
                        <Button>Upload CV</Button>
                      </InputGroup.Append>
                    </InputGroup> */}
                  </Col>
                </Row>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={submitApplication}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </Layout>
  )
}

export default Careers
