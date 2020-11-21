import { Link } from "gatsby"
import React from "react"
import { Breadcrumb } from "react-bootstrap"
import "./breadcrumb.scss"

export default function BreadcrumbComponent({ current = "", prev = "" }) {
  return (
    <div className="background-2 p-lg-2 mb-5">
      <div className="im-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {prev && (
            <Breadcrumb.Item>
              <Link to="/products">Our Products</Link>
            </Breadcrumb.Item>
          )}
          <Breadcrumb.Item active>{current}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  )
}
