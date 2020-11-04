import React from "react"
import { Link } from "gatsby"
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import Layout from "../components/layout"
import SEO from "../components/seo"
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
        <section id="contactUs" >
         
            
            <ContactForm></ContactForm>
         
    </section>
    <Map  location={location} zoomLevel={17} /> 
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
