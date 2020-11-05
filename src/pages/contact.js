import React from "react"
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <section id="contactUs">
      <ContactForm />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-3">
            <iframe
              title="contact map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913159.3337189268!2d48.974442104861154!3d26.61552849103558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361d32276b3403%3A0xefd901ec7a5e5676!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1604508732448!5m2!1sen!2sin"
              width="100%"
              height="500px"
              style={{ border: `0` }}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
