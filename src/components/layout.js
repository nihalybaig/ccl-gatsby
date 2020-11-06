/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import useSticky from "../hooks/useSticky"

import TopNavbar from "./navbar"
// import Header from "./header"
import Banner from "./banner"
import "./layout.scss"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { isSticky } = useSticky()

  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Banner />
      <TopNavbar sticky={isSticky} />
      <PageTransition transitionTime={1000}>
        <div
          style={{
            minHeight: "100vh",
            /* margin: `.2rem auto`,
            maxWidth: 1400,
            padding: `0 0.0875rem 1.45rem`, */
          }}
        >
          <main>{children}</main>
        </div>
      </PageTransition>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
