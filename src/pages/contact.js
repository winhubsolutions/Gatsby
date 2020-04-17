import React, { Component } from 'react'
import { Link } from "gatsby"
import Clock from 'react-clock'


import Layout from "../components/layout"
import SEO from "../components/seo"
import banner from  "../img/breadcrumb/banner_bg.png"

class Contact extends Component {

  state = {
    date: new Date(),
  }
  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
  render() {
    return (
  <Layout>
    <SEO title="About Us" />
  
  <section className="breadcrumb_area">
    <img className="breadcrumb_shap" src={banner} alt=''/>
    <div className="container">
      <div className="breadcrumb_content text-center">
        <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
          Contact Us
        </h1>
        <p className="f_400 w_color f_size_16 l_height26">
          Why I say old chap that is spiffing off his nut arse pear shaped
          plastered
          <br /> Jeffrey bodge barney some dodgy.!!
        </p>
      </div>
    </div>
  </section>
  <section className="contact_info_area sec_pad bg_color">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 pr-0">
          <div className="contact_info_item">
          <div className="f_p f_size_20 t_color3 f_500 mb_20 text-center">
          <h1>INDIA</h1>
            
        <Clock 
          value={this.state.date}  />
          </div>
     
            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
              Office Address
            </h6>
            <p className="f_400 f_size_15">
            2nd Floor of ABK Mall, Near Old Bus Depot, Ramnagar, Hanamkonda, Telangana 506001
            </p>
          </div>
          <div className="contact_info_item">
            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
            <p className="f_400 f_size_15">
              <span className="f_400 t_color3">Phone:</span>{" "}
              <a href="tel:3024437488">+917386566445</a>
            </p>
            <p className="f_400 f_size_15">
              <span className="f_400 t_color3">Land Line:</span>{" "}
              <a href="tel:3024437488">08703550426</a>
            </p>
            <p className="f_400 f_size_15">
              <span className="f_400 t_color3">Email:</span>{" "}
              <a href="mailto:saasland@gmail.com">contact@winhubsolutions.in</a>
            </p>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-1">
          <div className="contact_form">
            <form
              action="contact_process.php"
              className="contact_form_box"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group text_box">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group text_box">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group text_box">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group text_box">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      placeholder="Enter Your Message . . ."
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn_three">
                Send Message
              </button>
            </form>
            <div id="success">Your message succesfully sent!</div>
            <div id="error">
              Opps! There is something wrong. Please try again
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mapbox2">
    
  <div className="container-fulid">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15177.654200799623!2d79.5542047!3d18.0060014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe835400639546e36!2sWINHUB%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1585772133313!5m2!1sen!2sin"
  width={1900}
  height={450}
  frameBorder={0}
  style={{ border: 0 }}
  allowFullScreen
  aria-hidden="false"
  tabIndex={0}  
/>
   </div>
  </section>


  </Layout>
);
}
}

export default Contact
