import React from "react"
import "./navbar.scss"
import { Link } from "gatsby"
import logo from "../images/CCL logo.jpg"
import { Nav, Navbar } from "react-bootstrap"
import { useMediaQuery } from "@material-ui/core"

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Our Services",
    link: "/services",
  },
  {
    name: "Our Products",
    link: "/products",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
]

const TopNavbar = ({ sticky }) => {
  const isSmall = useMediaQuery("(max-width:650px)")
  return (
    <div
      className={
        sticky ? "background-1 navbar--container-sticky" : "background-1"
      }
    >
      <Navbar
        expand="lg"
        variant="light"
        collapseOnSelect
        className={`navbar im-container ${
          sticky ? "navbar-sticky" : "navbar"
        } is-transparent`}
        role="navigation"
        aria-label="main-navigation"
        style={{
          padding: `0rem 1.0875rem`,
        }}
        sticky="top"
      >
        <Navbar.Brand>
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={logo}
              alt="CCL"
              className={
                sticky ? "navbar--logo navbar--logo--sticky" : "navbar--logo"
              }
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {pages.map(p => (
              <Link className="nav--link-item" to={p.link}>
                {p.name}
              </Link>
            ))}
            {isSmall && (
              <Link className="nav--link-item" to="/contact">
                Suppliers
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default TopNavbar
