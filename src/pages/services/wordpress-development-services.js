import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const wordpress = () => (
    <Layout>
      <SEO title="Page two" />

      <div>
  <section className="pos_banner_area">
    <div className="pos_slider owl-carousel">
      <div
        className="pos_banner_item"
        style={{ background: "url(img/pos/pos_slideshow1.jpg)" }}
      />
      <div
        className="pos_banner_item"
        style={{ background: "url(img/pos/pos_slideshow2.jpg)" }}
      />
      <div
        className="pos_banner_item"
        style={{ background: "url(img/pos/pos_slideshow3.jpg)" }}
      />
    </div>
    <div className="container">
      <div className="pos_banner_text text-center">
        <h6>Welcome To Winhub solutions</h6>
        <h2>
        Industry leading Wordpress Development Services{" "}
          <span>in india.</span>
        </h2>
        <div
          className="action_btn d-flex align-items-center justify-content-center wow fadeInLeft"
          data-wow-delay="0.6s"
        >
          <Link to="/contact" className="software_banner_btn">
          Contact Us
          </Link>
          <a
            href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
            className="video_btn popup-youtube"
          >
            <div className="icon">
              <i className="fas fa-play" />
            </div>
            <span>Watch Video</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="ticket_area">
    <div
      className="ticket_shap"
      style={{ background: "url(img/pos/shape.png)" }}
    />
    <div
      className="pattern"
      style={{ background: "url(img/pos/pattern_01.png)" }}
    />
    <div className="container">
      <div className="ticket_item">
        <div className="icon">
          <img src="img/pos/icon1.png" alt />
        </div>
        <h2>
          44 POS <span>Already Set up</span>
        </h2>
        <p>More Than</p>
      </div>
      <div className="ticket_item">
        <div className="icon pink">
          <img src="img/pos/icon2.png" alt />
        </div>
        <h2>
          $420.00 <span>Ultimate Plan</span>
        </h2>
        <p>Price</p>
      </div>
      <div className="ticket_item">
        <div className="icon yellow">
          <img src="img/pos/icon3.png" alt />
        </div>
        <h2>
          in 7 days<span>In your Store</span>
        </h2>
        <p>Set Up</p>
      </div>
    </div>
  </section>
  <section className="partner_logo_area">
    <div className="container">
      <h4 className="f_size_18 f_400 f_p text-center l_height28 mb_70">
        Market leaders use app to nrich their brand &amp; business.
      </h4>
      <div className="row partner_info">
        <div className="logo_item">
          <a href="#">
            <img src="img/home3/logo_01.png" alt />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="img/home3/logo_02.png" alt />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="img/home3/logo_03.png" alt />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="img/home3/logo_04.png" alt />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="img/home3/logo_05.png" alt />
          </a>
        </div>
      </div>
    </div>
  </section>
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
            <img src="img/pos/laptop.png" alt />
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
            <img src="img/pos/statistics.png" alt />
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
            <img src="img/pos/delivery-truck.png" alt />
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
            <img src="img/pos/cash-register.png" alt />
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
              <img src="img/pos/credit-card.png" alt />
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
              <img src="img/pos/mailbox.png" alt />
            </div>
            <a href="#">
              <h4 className="h_head">WordPress CMS Developmentr</h4>
            </a>
            <p>
            We specialize in making the content creation process simple and fast to update your site from time to time. By enhancing the features of WP CMS, we have built a website that maintains and meets standards
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pos_developer_product_area sec_pad">
    <div className="container">
      <div className="hosting_title text-center">
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">
         Benefits of our WordPress Development Services
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="tab_img_info">
            <div className="tab_img active" id="tab_one">
              <img
                className="img-fluid wow fadeInRight"
                data-wow-delay="0.4s"
                src="img/pos/High-end-all-in-one-dual-screen.png"
                alt
              />
              <div className="square" />
              <div className="bg_circle" />
              <div data-parallax='{"x": 0, "y": 100}' className="tab_round" />
              <div data-parallax='{"x": 50, "y": 5}' className="tab_triangle" />
              <div data-parallax='{"x": 0, "y": 100}'>
                <div
                  className="pattern_shap"
                  style={{ background: "url(img/pos/tab_pattern.png)" }}
                />
              </div>
            </div>
            <div className="tab_img" id="tab_two">
              <img
                className="img-fluid wow fadeInRight"
                data-wow-delay="0.4s"
                src="img/pos/ezgif-1-997e5035cba4.png"
                alt
              />
              <div className="square" />
              <div className="bg_circle green" />
              <div data-parallax='{"x": 0, "y": 100}' className="tab_round" />
              <div data-parallax='{"x": 50, "y": 5}' className="tab_triangle" />
              <div data-parallax='{"x": 0, "y": 100}'>
                <div
                  className="pattern_shap"
                  style={{ background: "url(img/pos/tab_pattern.png)" }}
                />
              </div>
            </div>
            <div className="tab_img" id="tab_three">
              <img
                className="img-fluid wow fadeInRight"
                data-wow-delay="0.4s"
                src="img/pos/pos.png"
                alt
              />
              <div className="square" />
              <div className="bg_circle pink" />
              <div data-parallax='{"x": 0, "y": 100}' className="tab_round" />
              <div data-parallax='{"x": 50, "y": 5}' className="tab_triangle" />
              <div data-parallax='{"x": 0, "y": 100}'>
                <div
                  className="pattern_shap"
                  style={{ background: "url(img/pos/tab_pattern.png)" }}
                />
              </div>
            </div>
            <div className="tab_img" id="tab_four">
              <img
                className="img-fluid wow fadeInRight"
                data-wow-delay="0.4s"
                src="img/pos/b_dashboard.png"
                alt
              />
              <div className="square" />
              <div className="bg_circle yellow" />
              <div data-parallax='{"x": 0, "y": 100}' className="tab_round" />
              <div data-parallax='{"x": 50, "y": 5}' className="tab_triangle" />
              <div data-parallax='{"x": 0, "y": 100}'>
                <div
                  className="pattern_shap"
                  style={{ background: "url(img/pos/tab_pattern.png)" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="developer_product_content">
            <ul
              className="nav nav-tabs develor_tab mb-30"
              id="myTab2"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-tab="tab_one"
                  id="ruby-tab"
                  data-toggle="tab"
                  href="#ruby"
                  role="tab"
                  aria-controls="ruby"
                  aria-selected="true"
                >
                  Server Handling
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-tab="tab_two"
                  id="curl-tab"
                  data-toggle="tab"
                  href="#curl"
                  role="tab"
                  aria-controls="curl"
                  aria-selected="false"
                >
                  Upgradation
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-tab="tab_three"
                  data-toggle="tab"
                  href="#resize"
                  role="tab"
                  aria-controls="resize"
                  aria-selected="false"
                >
                  Tasks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-tab="tab_four"
                  id="doctl-tab"
                  data-toggle="tab"
                  href="#doctl"
                  role="tab"
                  aria-controls="doctl"
                  aria-selected="false"
                >
                  Changes
                </a>
              </li>
            </ul>
            <div className="tab-content developer_tab_content">
              <div
                className="tab-pane fade active show"
                id="ruby"
                role="tabpanel"
                aria-labelledby="ruby-tab"
              >
                <h4>
                Server Handling 
                  <br /> / Maintenance
                </h4>
                <p>
                Get efficient server handling / maintenance support
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="curl"
                role="tabpanel"
                aria-labelledby="curl-tab"
              >
                <h4>
                Upgradation
                </h4>
                <p>
                We help you to update your WordPress website without any trouble
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="resize"
                role="tabpanel"
                aria-labelledby="resize-tab"
              >
                <h4>
                  Tasks
                </h4>
                <p>
                We perform all small/daily/weekly tasks with utter perfection
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="doctl"
                role="tabpanel"
                aria-labelledby="doctl-tab"
              >
                <h4>
                Changes
                </h4>
                <p>
                Our developers can make desired changes whether big or small
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="h_blog_area sec_pad">
    <div className="container">
      <div className="hosting_title text-center">
        <h2 className="wow fadeInUp" data-wow-delay="0.3s">
          Check out some of our amazing
          <br /> resources or join us in a city near you.
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="h_blog_item pos_blog_item">
            <img src="img/pos/pos_blog_1.png" alt />
            <div className="h_blog_content">
              <a href="#" className="post_time">
                <i className="icon_clock_alt" />
                March 20, 2019
              </a>
              <a href="#">
                <h3>How To Deploy a PHP Application with Kubernetes..</h3>
              </a>
              <div className="post-info-bottom">
                <a href="#" className="learn_btn_two">
                  Read More <i className="arrow_right" />
                </a>
                <a className="post-info-comments" href="#">
                  <i className="icon_comment_alt" aria-hidden="true" />
                  <span>3 Comments</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="h_blog_item pos_blog_item">
            <img src="img/pos/pos_blog_2.png" alt />
            <div className="h_blog_content">
              <a href="#" className="post_time">
                <i className="icon_clock_alt" />
                April 22, 2019
              </a>
              <a href="#">
                <h3>How To Build a Node.js Application with Docker</h3>
              </a>
              <div className="post-info-bottom">
                <a href="#" className="learn_btn_two">
                  Read More <i className="arrow_right" />
                </a>
                <a className="post-info-comments" href="#">
                  <i className="icon_comment_alt" aria-hidden="true" />
                  <span>02 Comments</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="h_blog_item pos_blog_item">
            <img src="img/pos/pos_blog_3.png" alt />
            <div className="h_blog_content">
              <a href="#" className="post_time">
                <i className="icon_clock_alt" />
                March 26, 2019
              </a>
              <a href="#">
                <h3>Hear from our Customer Community</h3>
              </a>
              <div className="post-info-bottom">
                <a href="#" className="learn_btn_two">
                  Read More <i className="arrow_right" />
                </a>
                <a className="post-info-comments" href="#">
                  <i className="icon_comment_alt" aria-hidden="true" />
                  <span>02 Comments</span>
                </a>
              </div>
            </div>
          </div>
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
            <a href="#" className="pos_btn">
              Book a Callback
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="media chat_info">
            <img src="img/pos/chat.png" alt />
            <div className="media-body">
              <div className="date">
                24<span>/</span>7<span>/</span>365
              </div>
              <h3>Toast Customer Support</h3>
              <a href="#" className="pos_service_btn">
                Services and Support
                <i className="arrow_right" />
              </a>
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
        <a href="#" className="pos_btn">
          Get Started Free
        </a>
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
        