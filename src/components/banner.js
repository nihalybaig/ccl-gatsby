// import { Link } from "gatsby"
import React from "react"
import { Button } from "react-bootstrap"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"
import { useMediaQuery } from "beautiful-react-hooks"
import { Link } from "gatsby"

const email = "abc@gmail.com"
const phone = "9876543210"

const Banner = () => {
  const isLarge = useMediaQuery("(min-width:650px)")
  return (
    <header
      style={{
        background: `lightgrey`,
      }}
    >
      <div
        style={{
          padding: `.2rem 1.0875rem`,
          color: `rgb(101 101 101)`,
          textDecoration: `none`,
        }}
        className="im-container"
      >
        <span>
          <AiOutlinePhone style={{ margin: `0 5px 2px 1px` }} />
          <span
            style={{
              fontSize: `14px`,
            }}
          >
            {phone}
          </span>
        </span>
        <span className="ml-3">
          <AiOutlineMail style={{ margin: `0 5px 2px 1px` }} />
          <a
            href={`mailto:${email}`}
            style={{
              fontSize: `14px`,
            }}
          >
            {email}
          </a>
        </span>
        {isLarge && (
          <span className="float-right">
            <Link
              to="/contact"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <Button
                variant="secondary"
                size="sm"
                style={{
                  height: "24px",
                  lineHeight: "10px",
                  marginTop: "-5px",
                }}
              >
                Suppliers
              </Button>
            </Link>
          </span>
        )}
      </div>
    </header>
  )
}

export default Banner
