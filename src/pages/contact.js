import React from "react"
import ContactForm from "../components/ContactForm"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreadcrumbComponent from "../components/Breadcrumb"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <BreadcrumbComponent current="Contact Us" />
    <div className="im-container">
      <section id="contactUs">
        <div className="container my-5">
          <ContactForm />
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-12 py-3">
              <iframe
                title="contact map"
                src="https://maps.app.goo.gl/5am1Zd3uhjukhXX76"
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
    </div>
  </Layout>
)

export default Contact
