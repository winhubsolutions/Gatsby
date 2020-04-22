import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import banner from "../../img/home4/Ecom_banner.svg"
import bannerbg from "../../img/home4/banner_bg.png"
import EcomTechnology from "../../components/ecomtech"
const Ecom = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="agency_banner_area bg_color">
  <img className="banner_shap" src={bannerbg} alt="ecommerce development company in hyderabad" />
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
          E-Commerce Website Development Company In Telanagana
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
          
          Are You Looking For E-Commerce Website Development Company in Telangana, India. We offer the best e-Commerce Website Design and Development Services. We build fully Responsive Mobile Ready E-Commerce Stores with Good Looking Front-end and Secure Back-end with all Latest e-Commerce features, which you can control very easily.          </p>
          <div className="action_btn d-flex align-items-center mt_60">
            <Link
              to="/contact"
              className="btn_hover agency_banner_btn wow fadeInLeft"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInLeft"
              }}
            >
             Conatct us
            </Link>
            
          </div>
        </div>
      </div>
      <div className="col-lg-7 text-right">
        <img
          className="protype_img wow fadeInRight"
          data-wow-delay="0.3s"
          src={banner}         
           alt="ecommerce development company in hyderabad"
           width={800}height={800}
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
<section className="process_area bg_color sec_pad">
<div className="container custom_container">
<div className="elementor-column-wrap  elementor-element-populated">
  <div className="elementor-widget-wrap">
    <div
      className="elementor-element elementor-element-5a6750c elementor-widget elementor-widget-spacer"
      data-id="5a6750c"
      data-element_type="widget"
      data-widget_type="spacer.default"
    >
      <div className="elementor-widget-container">
        <div className="elementor-spacer">
          <div className="elementor-spacer-inner" />
        </div>
      </div>
    </div>
    <div
      className="elementor-element elementor-element-f447bec elementor-widget elementor-widget-text-editor"
      data-id="f447bec"
      data-element_type="widget"
      data-widget_type="text-editor.default"
    >
      <div className="elementor-widget-container">
        <div className="elementor-text-editor elementor-clearfix">
          <p>
            Winhub Solutions offers a most robust, customer oriented, well
            arranged, secured and fast loading e-commerce website to convert
            your site into one of the best online retail stores in the market
            today. Winhub Solutions focuses exclusively on tasks intended at
            selling your products online, increasing your online returns, high
            conversion rate and improving your business strategy. Being a
            premium ecommerce web development company in Kolkata we are
            committed to deliver fully functional ecommerce website with all the
            modern features on time.
          </p>
          <p>
            Our ecommerce specialist team designs and develops an ecommerce
            website in such a way so that it can stand out from other available
            portals in today’s competitive market. Normally we use two most
            popular open source platform Opencart and Magento to build an
            standard ecommerce website. If it doesn’t meet your requirement
            because of to the limitation of Open source platform features, don’t
            worry!! We have also great customized ecommerce solutions to meet
            your all needs.
          </p>
          <h2>Winhub Solutions eCommerce Development Services:</h2>
          <ul>
            <li>Custom eCommerce Web Development</li>
            <li>eCommerce Shopping Cart Development</li>
            <li>Payment Gateway Integration</li>
            <li>eCommerce Website Design &amp; Customization</li>
            <li>Plug-in &amp; Module Development</li>
            <li>Responsive eCommerce Websites</li>
            <li>Maintenance and Support</li>
          </ul>
          <p>
            Our team of PHP developers is well-versed in delivering complete
            eCommerce solutions across all major platforms like Magento,
            Shopify, Bigcommerce, Zencart, Virtuemart etc. We can even provide
            you with custom eCommerce development over Java and .NET. Our
            experience over years helps us develop well-designed user-friendly
            eCommerce websites that can be integrated with various proprietary
            analytics tools.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
<EcomTechnology/>
  </Layout>
)

export default Ecom
