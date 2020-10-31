import React from "react"
import "./navbar.scss"
// import Logo from "../../assets/images/logo.svg";
import { Link } from "gatsby"
import logo from "../images/logo.svg"
// import { Nav, Navbar } from "react-bootstrap"

const TopNavbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <>
        <nav
          className={`navbar ${
            this.props.sticky ? "navbar-sticky" : "navbar"
          } is-transparent`}
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="CCL"
                style={{ width: "88px" }}
                className={
                  this.props.sticky
                    ? "navbar--logo navbar--logo--sticky"
                    : "navbar--logo"
                }
              />
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="presentation"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar--link navbar-start">
              <Link className="navbar--link-item navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar--link-item navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar--link-item navbar-item" to="/services">
                Our Services
              </Link>
              <Link className="navbar--link-item navbar-item" to="/gallery">
                Gallery
              </Link>
              <Link className="navbar--link-item navbar-item" to="/careers">
                Careers
              </Link>
              <Link className="navbar--link-item navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default TopNavbar
