import React from "react"
import "./navbar.scss"
import { Link } from "gatsby"
import logo from "../images/CCL logo.jpg"
import { Nav, Navbar } from "react-bootstrap"

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
    name: "Gallery",
    link: "/gallery",
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

const TopNavbar = ({ sticky }) => (
  <div
    className={`${sticky ? "bg-white navbar--container-sticky" : "bg-white"}`}
  >
    <Navbar
      expand="lg"
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
            style={
              sticky
                ? { width: "70px", height: "35px" }
                : { width: "140px", height: "70px" }
            }
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default TopNavbar
