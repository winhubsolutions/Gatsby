import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Ux from "../../img/erp-home/UI.svg"
import Webdesign from "../../img/erp-home/webdesign.svg"
import image1 from "../../img/home7/app.png"

import image2 from "../../img/home7/02.png"
import image3 from "../../img/home7/03.png"
import image4 from "../../img/home7/01.png"

import Technology from "../../components/tech"

const webdesign=() => (
    <Layout>
      <SEO title="Page two" />

   
   
  <section className="app_banner_area">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="app_banner_contentmt mt_40">
          <h2
            className="f_p f_700 f_size_50 w_color mb_20 wow fadeInLeft"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInLeft"
            }}
          >
           Web Design Company<br />
          
          </h2>
          <p
            className="f_400 f_size_18 l_height30 w_color wow fadeInLeft"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInLeft"
            }}
          >
         Winhub Solutions is a team of passionate designers, developers and ux&ui and
digital. We collaborate with clients to establish bold, effective identities.
          </p>
          <a
            href="#"
            className="btn_hover mt_30 app_btn wow fadeInLeft"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInLeft"
            }}
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="app_img">
          <img
            className="app_screen one wow fadeInDown animated"
            src={image4}
            alt
            style={{ visibility: "visible", animationName: "animateUpDown" }}
          />
          <img
            className="app_screen two wow fadeInDown animated"
            src={image3}
            alt
            style={{ visibility: "visible", animationName: "animateUpDown" }}
          />
          <img
            className="app_screen three wow fadeInDown animated"
            src={image2}
            alt
            style={{ visibility: "visible", animationName: "animateUpDown" }}
          />
          <img className="mobile" src={image1} alt />
        </div>
      </div>
    </div>
  </div>
</section>



<section className="erp_features_area_two sec_pad">
  <div className="container">
    <div className="row erp_item_features align-items-center flex-row-reverse">
      <div className="col-lg-6">
        <div className="erp_features_img_two">
          <div className="img_icon">
            <span className="pluse_1" />
            <span className="pluse_2" />
            <i className="icon_lightbulb_alt" />
          </div>
          <img src={Webdesign} alt 
          width={600}
          height={400} />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="erp_content_two">
          <div className="hosting_title erp_title">
            <h2>Web Designing Services</h2>
            <p>
            Winhub Solutions is one of The Innovative Website Designing Company in Hyderabad-India, with an experienced and professional team of web designers with the latest web technologies that can provide you with highly personalised web designs, fresh and creative web designs for any project, our web designs are productive and cost-effective.
            Our dedicated team provides innovative designs and user-friendly full-featured web interfaces that are easy to access, helping to attract new customers and lock existing customers and increase sales.</p>
            
          </div>
          
         
        </div>
      </div>
    </div>
    <div className="row erp_item_features align-items-center">
      <div className="col-lg-6">
        <div className="erp_features_img_two">
          <div className="img_icon red">
            <span className="pluse_1" />
            <span className="pluse_2" />
            <i className="icon_lightbulb_alt" />
          </div>
          <img src={Ux} alt
            width={600}
            height={400} />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="erp_content_two">
          <div className="hosting_title erp_title">
            <h2>Why we are the Best?</h2>
            <p>
            We are completely dedicated not only to making your website feel friendly, but also to taking you and your potential customers together. Our compact templates are user-friendly and easy to navigate by providing your customers with a 24/7 website with the latest pricing and updates on your goods.
            </p>
          </div>
          <div className="media erp_item">
            <div className="icon blue">
              <i className="icon_menu-square_alt2" />
            </div>
            <div className="media-body">
              <h5>We have more than 8 years of Web Development Experience</h5>
            </div>
          </div>
          <div className="media erp_item">
            <div className="icon yellow">
              <i className="icon_ribbon_alt" />
            </div>
            <div className="media-body">
              <h5> We are Experienced UI & UX designers team</h5>
            </div>
          </div>
          <div className="media erp_item">
            <div className="icon green">
              <i className="icon_ribbon_alt" />
            </div>
            <div className="media-body">
              <h5>100% custom web design based on client views</h5>
            </div>
          </div>
          <div className="media erp_item">
            <div className="icon green">
              <i className="icon_ribbon_alt" />
            </div>
            <div className="media-body">
              <h5>We make beautiful responsive websites</h5>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>
</section>



<Technology/> 

</Layout>
    

)


export default webdesign