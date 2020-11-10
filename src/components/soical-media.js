// import { Link } from "gatsby"
import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const facebook = "facebook.com"
const instagram = "instagram.com"

const SocialMediaBar = () => (
  <div className="row py-3 d-flex align-items-center im-container">
    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
      <h6 className="mb-0">Get connected with us on social networks!</h6>
    </div>
    <div className="col-md-6 col-lg-7 text-center text-md-right">
      <a href={facebook} className="text-dark mx-3">
        <FaFacebook />
      </a>
      <a href={instagram} className="text-dark mx-3">
        <FaInstagram />
      </a>
    </div>
  </div>
)

export default SocialMediaBar
