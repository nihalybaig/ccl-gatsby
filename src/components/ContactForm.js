// import { Link } from "gatsby"
import React from "react"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"
import {FaGlobe} from "react-icons/fa"
export default function ConatactForm() {
    return (
       <>

        <div className="container">
            <div className="row">
                <div className="col-lg-12 py-2 px-3">
                    <h5>
                        Connect with us to know more about the services we offer
                    </h5>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="well bg-light px-2 py-2 ">
                   
                        <form>
                        <fieldset class="border p-2">
   <legend  class="w-auto">Contact Form</legend>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name"> Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <div className="input-group">
                                        
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                </div>
                            
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">  Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="5" cols="5" required="required"
                                        placeholder="Message"></textarea>
                                        <button type="submit" className="btn btn-primary btn-rounded pull-right my-3" id="btnContactUs">
                                    Send Message</button>
                                </div>
                            </div>
                           
                        </div>
                        </fieldset>
                        </form>
                    </div>
                </div>
                    <div className="col-md-4">
                <form>
              
                  
                <address>
                 <FaGlobe style={{ margin: `0 5px 2px 1px` }} />
                    <strong>Trading Co, Inc.</strong><br/>
                    Ad Dammam<br/>
                    KSA<br/>                  
                </address>
                 <AiOutlinePhone style={{ margin: `0 5px 2px 1px` }} />
                    <strong> Phone Nos</strong><br/>
                    (123) 456-7890 <br/>
                    <AiOutlineMail style={{ margin: `0 5px 2px 1px` }} />                 
                    <strong> Email ID</strong><br/>                   
                    <a href="mailto:#">first.last@example.com</a>                
                </form>
            </div>
            </div>
        </div>
            
        </>
        )
    }
    