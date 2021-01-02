// import { Link } from "gatsby"
import React from "react"
import { FaInstagram } from "react-icons/fa"
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share"

const twitter = "twitter.com"
const facebook = "facebook.com"
const instagram = "instagram.com"
const whatsapp =
  "https://wa.me/966549323798?text=CCL%20Website%20Message%20:%20"

const SocialMediaBar = () => (
  <div className="row py-3 d-flex align-items-center im-container">
    <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
      <h6 className="mb-0">Get connected with us on social networks!</h6>
    </div>
    <div className="col-md-6 col-lg-7 text-center text-md-right">
      <a href={facebook} className="mx-3">
        <FacebookIcon size={36} round={true} />
      </a>
      <a href={twitter} className="mx-3">
        <TwitterIcon size={36} round={true} />
      </a>
      <a href={instagram} className="text-dark mx-3">
        <FaInstagram size={36} />
      </a>
      <a href={whatsapp} className="text-dark mx-3">
        <WhatsappIcon size={36} round={true} />
      </a>
    </div>
  </div>
)

export default SocialMediaBar
