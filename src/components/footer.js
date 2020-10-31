import React from "react"
import SocialMediaBar from "./soical-media"
import Subscribe from "./subscribe"

const Footer = () => (
  <>
    <Subscribe />
    <SocialMediaBar />
    <footer
      style={{
        background: `#000288`,
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
      className="text-center text-white"
    >
      © {new Date().getFullYear()}, Built by
      {` `}
      <a
        href="mailto:nihal.y.baig@gmail.com"
        className="text-center text-white font-weight-bold"
      >
        Baigs
      </a>
    </footer>
  </>
)

export default Footer
