import React from "react"
import { Link } from "gatsby"
import banner from "../img/breadcrumb/banner_bg.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

import AllTechnology from "../components/alltechnology"

const Aboutus = () => (
  <Layout>
    <SEO title="About Us" />
    <div>


    <section className="breadcrumb_area_two">
  <ul className="list-unstyled bubble">
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
  </ul>
  <img className="breadcrumb_shap" src={banner} alt />
  <div className="container">
    <div className="breadcrumb_content_two text-center">
      <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
      Welcome To Winhub Solutions
      </h1>
      
      <p className="f_400 w_color f_size_16 l_height26">
        We have solutions to all your needs such as website design, website development, website maintenance, SEO, digital marketing etc. No matter what’s your demands as our highly scalable service is always available to serve you the best results.
        </p>
    </div>
  </div>
</section>

  <section className="agency_service_area bg_color">
    <div className="container">
    <div className="breadcrumb_content text-center">
    <h2 className="f_p f_700 f_size_50 w_color l_height50 mb_20">Who We Are</h2>
  </div>
  <br />
                <br />
  <p>
  Winhub Solutions is a professional software company with Good experienced and processional software engineers in various industries and It is a custom software development,web design & web development and mobile application Development Company. We strive to translate information technologies into value for our customers through our professional, innovative and cost-effective solutions and services.Rapidly growing custom development company in Hyderabad,Telangana’.We specialize in the development of custom software applications. Specifically, our company carries out custom programming, database design, client-server and internet/intranet software application development.application development.At every stage of the development process, from conceptual design to product release, the highest quality standards are maintained. Our extensive communication facilities allow us to keep in touch with our customers 24 hours a day.
  </p>

  <br />
                <br /> <br />
                <br />
  <div className="elementor-container elementor-column-gap-default">
  <div className="elementor-row">
    <div
      className="elementor-element elementor-element-1ab1b84 elementor-column elementor-col-100 elementor-top-column"
      data-id="1ab1b84"
      data-element_type="column"
    >
      <div className="elementor-column-wrap  elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div
            className="elementor-element elementor-element-ba70bea elementor-widget elementor-widget-heading"
            data-id="ba70bea"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
                Why Us?
                <br />
                <br />
              </h2>{" "}
            </div>
          </div>
          <div
            className="elementor-element elementor-element-8783467 elementor-widget elementor-widget-text-editor"
            data-id={8783467}
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-text-editor elementor-clearfix">
                <div className="FM_m42 FM_ds5 FM_lh ">
                  <div className="FM_ds16 fasC FM_pr FM_wrd">
                    <ul>
                      <li>
                        <p>
                          We have an excellent talented creative and technically
                          sound team.
                        </p>
                      </li>
                      <li>
                        <p>
                          We are open to adapt latest technologies and upcoming
                          trends in the market.
                        </p>
                      </li>
                      <li>
                        <p>High quality output to meet client desire.</p>
                      </li>
                      <li>
                        <p>
                          Project is delivered on time with supreme quality.
                        </p>
                      </li>
                      <li>
                        <p>Innovative designs and advanced tools Aim.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>

  



    </section>
    <AllTechnology/>
   
</div>

  </Layout>
)

export default Aboutus
