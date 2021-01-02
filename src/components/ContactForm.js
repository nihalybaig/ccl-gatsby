// import { Link } from "gatsby"
import React from "react"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"
import { FaGlobe } from "react-icons/fa"
import SlideBox from "./SlideBox"
export default function ContactForm() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-2 px-3">
            <h5>Connect with us to know more about the services we offer</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="well px-2 py-2 ">
              <form>
                <fieldset className="p-2">
                  {/* <legend className="w-auto">Contact Form</legend> */}

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="phone">Phone</label> */}
                        <div className="input-group">
                          <input
                            type="phone"
                            className="form-control"
                            id="phone"
                            placeholder="Enter Phone Number"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="email">Email Address</label> */}
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email Address"
                            required="required"
                          />
                        </div>
                      </div>
                      {/* </div>
                    <div className="col-md-8"> */}
                      <div className="form-group">
                        {/* <label htmlFor="name">Message</label> */}
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="5"
                          cols="5"
                          required="required"
                          placeholder="Message"
                        ></textarea>
                        <button
                          type="submit"
                          className="btn btn-primary btn-rounded pull-right my-3"
                          id="btnContactUs"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <SlideBox>
              <form>
                <h2>Address</h2>
                <address>
                  <FaGlobe style={{ margin: `0 5px 2px 1px` }} />
                  <strong>Continental Company Ltd.</strong>
                  <br />
                  C.R. : 2050133248
                  <br />
                  P O Box 1973, Dammam 34271
                  <br />
                  KSA
                  <br />
                </address>
                <AiOutlinePhone style={{ margin: `0 5px 2px 1px` }} />
                <strong>Phone Nos</strong>
                <br />
                (123) 456-7890 <br />
                (123) 456-7890 <br />
                <br />
                <a href="https://wa.me/966549323798?text=CCL%20Website%20Message%20:%20">
                  <strong>Whatsapp</strong>
                </a>{" "}
                <br />
                <br />
                <AiOutlineMail style={{ margin: `0 5px 2px 1px` }} />
                <strong>Email ID</strong>
                <br />
                <a href="mailto:#">info@cclarabia.com</a>
                <br />
              </form>
            </SlideBox>
          </div>
        </div>
      </div>
    </>
  )
}
