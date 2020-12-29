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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14289.097692307105!2d50.06727213122498!3d26.446881783285043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fc3f3af64ecf%3A0xc43aec8081f68cb6!2sDammam%2032426%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1609258942142!5m2!1sen!2sin"
                width="100%"
                height="500px"
                frameborder="0"
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
