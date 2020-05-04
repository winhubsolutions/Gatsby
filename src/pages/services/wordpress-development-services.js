import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import dashboard from "../../img/wordpress/dashboard.svg"
import Responsive from "../../img/wordpress/smartphone.svg"
import Migrate from "../../img/wordpress/update-alt.svg"
import Plugin from "../../img/wordpress/plug-solid.svg" 
import Ecomm from "../../img/wordpress/Ecomm.svg"  

import setup from "../../img/home2/installation-symbol-svgrepo-com.svg"
import Custom  from "../../img/home2/idea-svgrepo-com.svg"
import Customization from "../../img/home2/desktop-computer-screen-svgrepo-com.svg"
import html from "../../img/home2/html-svgrepo-com.svg"
import optimization from "../../img/home2/optimization-svgrepo-com.svg"
import Deployment from "../../img/home2/circular-right-arrow-with-half-broken-line-svgrepo-com.svg"
import integration from "../../img/new-home/tree.png"

import banner from "../../img/home4/banner_img.png"
import bannerbg from "../../img/home4/banner_bg.png"
import dash from   "../../img/erp-home/dash1.png"

import support from "../../img/pos/chat.png"
import Wordpress from "../../img/Tech/wordpress-brands.svg"
import Clientlogo from "../../components/clientlogo"

const wordpress = () => (
    <Layout>
      <SEO title="Page two" />

      <div>


      <section className="agency_banner_area bg_color">
  <img className="banner_shap" src="" alt="best web development company in hyderabad" />
  <div className="container custom_container">
    <div className="row">
      <div className="col-lg-5 d-flex align-items-center">
        <div className="agency_content">
          <h2
            className="f_700 t_color3 mb_40 wow fadeInLeft"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInLeft"
            }}
          >
            Industry leading Wordpress Development Services
          </h2>
          <p
            className="f_400 l_height28 wow fadeInLeft"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInLeft"
            }}
                            >
          While custom-designed websites are the pinnacle of website creation, with each granular feature being personalized and developed specifically for the Customer, custom development may not be required or justified in certain cases. Join WordPress-a highly capable and internationally recognized authoring website.
     While it initially gained prominence as a blogging site, over the years, its ease of use has made WordPress the world's most successful open source CMS & Publishing program.  

           </p>
       
        </div>
      </div>
      <div className="col-lg-7 text-right">
        <img
          className="protype_img wow fadeInRight"
          data-wow-delay="0.3s"
          src={dash}
          alt="best web development company in hyderabad"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInRight"
          }}
        />
      </div>
    </div>
    
  </div>
</section>
   
         
 
  
<Clientlogo />
 
  <section className="hosting_service_area sec_pad">
    <div data-parallax='{"x": 0, "y": 100}'>
      <div
        className="pattern_shap"
        style={{ background: "url(img/pos/pattern_02.png)" }}
      />
    </div>
    <div className="container">
      <div className="hosting_title text-center">
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">
        We're offering a 
          <br />
          custom WordPress production service
        </h2>
      </div>
      <div className="row pos_service_info">
        <div className="col-lg-4 col-sm-6">
          <div className="hosting_service_item">
            <img src={dashboard} 
            alt 
            width={30}
            height={30}
            />
            <a href="#">
              <h4 className="h_head">WordPress Installation & Configuration</h4>
            </a>
            <p>
            Due to our rich industrial experience we make installation and configuration a stress-free process. Our development team uses its skills and experience to simplify the process
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="hosting_service_item">
          <img src={Responsive}  alt 
            width={30}
            height={30}
            />
            <a href="#">
              <h4 className="h_head">WordPress Responsive Design</h4>
            </a>
            <p>
            As a trusted WordPress web design company, we develop web solutions that offer a pleasurable look and feel to a variety of devices. We ensure the best quality and design of the website across various browsers and devices.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="hosting_service_item">
            <img src={Migrate}  alt 
            width={30}
            height={30}
            />
            <a href="#">
              <h4 className="h_head">WordPress Migration</h4>
            </a>
            <p>
            WordPress Migration is a complicated process, but we will make it simple for you to do so. We can easily transform your website into a new host without losing any info. Our experience helps us to automate the whole migration cycle.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="hosting_service_item">
            <img src={Plugin} alt 
            width={30}
            height={30}
            />
            <a href="#">
              <h4 className="h_head">WordPress Plugin Development</h4>
            </a>
            <p>
            We address different business needs and provide them with customized plugins and extensions on the WordPress platform. With the help of plugins, we expand the functionality of your website to suit your business needs.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="hosting_service_item">
            <div className="icon">
              <img src={Ecomm} alt 
                  width={30}
                  height={30}/>
            </div>
            <a href="#">
              <h4 className="h_head">WordPress eCommerce Solutions</h4>
            </a>
            <p>
            We specialize in integrating WooCommerce and creating the right ecommerce website for your business. We've also integrated the plugins and features needed to create a fully functional ecommerce website that provides a strong online presence.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="hosting_service_item">
            <div className="icon">
              <img src={Wordpress} alt width={30}
                  height={30}/>
            </div>
            <a href="#">
              <h4 className="h_head">WordPress CMS Development</h4>
            </a>
            <p>
            We specialize in making the content creation process simple and fast to update your site from time to time. By enhancing the features of WP CMS, we have built a website that maintains and meets standards
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="support_integration_area">
  <div className="container">
    <div
      className="sec_title text-center wow fadeInUp"
      data-wow-delay="0.3s"
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "fadeInUp"
      }}
    >
      <h2 className="f_p f_size_30 l_height50 f_600 t_color">
      Wordpress Website Development solutions
      </h2>

      <p className="f_400 f_size_18 l_height34">
      WordPress may be used to represent a variety of business cases, including Blogs & Magazines, Product Demos, Industry & Corporate Websites, News Websites, Marketing & Landing pages, to name a few.
               
      </p>
      <p className="f_400 f_size_18 l_height34">
      We work closely with Customers to deliver the following services: 
   
           </p>

      </div>

    <div className="row flex-row-reverse ">
      <div className="col-lg-9 col-md-10 col-sm-12">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <a href="#" className="s_integration_item">
              <img src={setup} alt="" width={30} height={30} />
              <h5>Wordpress Setup, Installation & Migration</h5>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <a href="#" className="s_integration_item">
              <img src={Custom} alt="" width={30} height={30} />
              <h5>Custom Wordpress themes from scratch</h5>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <a href="#" className="s_integration_item">
              <img src={Customization}width={30} height={30} alt="" />
              <h5>Customization of Wordpress themes</h5>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <a href="#" className="s_integration_item">
              <img src={html} width={30} height={30} alt="" />
              <h5>Plugin development & advanced customizations
</h5>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <a href="#" className="s_integration_item">
              <img src={optimization} width={30} height={30} alt=""  />
              <h5>Code optimization & W3C Validation</h5>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <a href="#" className="s_integration_item">
              <img src={Deployment} width={30} height={30} alt=""  />
              <h5>Deployment to Live environments</h5>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-2 col-sm-12">
        <img className="integration_img" src={integration} alt="" width={500}height={300}/>
      </div>
    </div>
  </div>
</section>

  
    <section className="chat_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="chat_content">
            <h2>
              Have any questions? <br />
              Talk to us
            </h2>
            <Link to="/contact" className="pos_btn">
              Book a Callback
            </Link>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="media chat_info">
            <img src={support} alt />
            <div className="media-body">
              <div className="date">
                24<span>/</span>7<span>/</span>365
              </div>
              <h3>Toast Customer Support</h3>
              <Link to="/contact" className="pos_service_btn">
                Services and Support
                <i className="arrow_right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pos_action_area">
    <div className="container">
      <div className="pos_action_content text-center">
        <h2>Ready to start selling your digital goods?</h2>
        <p>Create your own e-commerce store with SaasLand today.</p>
        <Link to="/contact" className="pos_btn">
          Get Started Free
        </Link>
      </div>
    </div>
  </section>
 
  <form className="search_boxs" role="search">
    <div className="search_box_inner">
      <div className="close_icon">
        <i className="icon_close" />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="search"
          className="form_control search-input"
          placeholder="Recipient's username"
          autofocus
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="icon_search" />
          </button>
        </div>
      </div>
    </div>
  </form>
</div>

      </Layout>
    
    
        )
        
        export default wordpress
        