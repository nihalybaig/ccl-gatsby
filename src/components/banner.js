// import { Link } from "gatsby"
import React from "react"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

const Banner = () => (
  <header
    style={{
      background: `lightgrey`,
    }}
  >
    <div
      style={{
        padding: `.2rem 1.0875rem`,
        color: `rgb(101 101 101)`,
        textDecoration: `none`,
      }}
      className="im-container"
    >
      <span className="mx-3">
        <AiOutlinePhone style={{ marginBottom: `2` }} />
        <a href="#">abc</a>
      </span>
      <span className="mx-3">
        <AiOutlineMail style={{ marginBottom: `2` }} />
        <a href="#">abc@gmail.com</a>
      </span>
    </div>
  </header>
)

export default Banner
