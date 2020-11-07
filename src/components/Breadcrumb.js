import { Link } from "gatsby"
import React from "react"
import { Breadcrumb } from "react-bootstrap"
import "./breadcrumb.scss"

export default function BreadcrumbComponent({ current = "" }) {
  return (
    <div className="background-1 p-lg-2 mb-5">
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{current}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )
}
