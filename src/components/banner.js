import { Link } from "gatsby"
import React from "react"

const Banner = () => (
  <header
    style={{
      background: `lightgrey`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem 1.0875rem`,
      }}
    >
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          abc
        </Link>
      </span>
    </div>
  </header>
)

export default Banner
