import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

 import CRM from "../images/web_image.jpg"



 const Software = () => (
<Layout>
<SEO title="About Us" />
<div>
  <section className="new_startup_banner_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.4s">
          <div className="new_startup_img">
            <div className="line line_one">
              <img src="img/new/line_01.png" alt />
            </div>
            <div className="line line_two">
              <img src="img/new/line_02.png" alt />
            </div>
            <div className="line line_three">
              <img src="img/new/line_03.png" alt />
            </div>
            <img src="img/new/startup_banner_img.png" alt />
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="new_startup_content">
            <h2
              className="f_700 f_size_40 l_height50 w_color mb_20 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              Ready to see <br />
              <span>SaasLand</span> in Action?
            </h2>
            <p
              className="f_400 w_color l_height28 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              Cup of tea my lady a blinding shot lost the plot spend a penny,
              only a quid bog-standard in my flat, morish chinwag sloshed.
              Cheeky chap old charles dropped a clanger.!
            </p>
            <div
              className="action_btn d-flex align-items-center mt_40 wow fadeInRight"
              data-wow-delay="0.6s"
            >
              <a href="#" className="btn_hover app_btn">
                Sign up <i className="ti-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="startup_fuatures_area sec_pad">
    <div className="container">
      <div
        className="sec_title mb_70 wow fadeInUp"
        data-wow-delay="0.4s"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeInUp"
        }}
      >
        <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">
          Ways your team can
          <br /> Use hubstaff
        </h2>
      </div>
      <ul className="nav nav-tabs startup_tab" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="market-tab"
            data-toggle="tab"
            href="#market"
            role="tab"
            aria-controls="market"
            aria-selected="true"
          >
            <span className="icon">
              <i className="icon-cloud-upload" />
            </span>
            <h3>
              Marketing
              <br /> Cloud
            </h3>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="app-tab"
            data-toggle="tab"
            href="#app"
            role="tab"
            aria-controls="app"
            aria-selected="false"
          >
            <span className="icon">
              <i className="icon-screen-tablet" />
            </span>
            <h3>
              Commerce
              <br /> Apps
            </h3>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="hubstaff-tab"
            data-toggle="tab"
            href="#hubstaff"
            role="tab"
            aria-controls="hubstaff"
            aria-selected="false"
          >
            <span className="icon">
              <i className="icon-graduation" />
            </span>
            <h3>
              Hubstaff
              <br /> App
            </h3>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="engine-tab"
            data-toggle="tab"
            href="#engine"
            role="tab"
            aria-controls="engine"
            aria-selected="false"
          >
            <span className="icon">
              <i className="icon-refresh" />
            </span>
            <h3>
              Automation
              <br /> Engine
            </h3>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="business-tab"
            data-toggle="tab"
            href="#business"
            role="tab"
            aria-controls="business"
            aria-selected="false"
          >
            <span className="icon">
              <i className="icon-bulb" />
            </span>
            <h3>
              Business
              <br /> Intellegence
            </h3>
          </a>
        </li>
      </ul>
      <div className="tab-content startup_tab_content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="market"
          role="tabpanel"
          aria-labelledby="market-tab"
        >
          <div className="startup_tab_img">
            <div className="web_img">
              <img src={CRM} alt />
            </div>
            <div className="phone_img">
              <img src={CRM} alt />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="app"
          role="tabpanel"
          aria-labelledby="app-tab"
        >
          <div className="startup_tab_img">
            <div className="web_img">
              <img src={CRM} alt />
            </div>
            <div className="phone_img">
              <img src={CRM} alt />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="hubstaff"
          role="tabpanel"
          aria-labelledby="hubstaff-tab"
        >
          <div className="startup_tab_img">
            <div className="web_img">
              <img src={CRM} alt />
            </div>
            <div className="phone_img">
              <img src={CRM} alt />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="engine"
          role="tabpanel"
          aria-labelledby="engine-tab"
        >
          <div className="startup_tab_img">
            <div className="web_img">
              <img src={CRM} alt />
            </div>
            <div className="phone_img">
              <img src={CRM} alt />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="business"
          role="tabpanel"
          aria-labelledby="business-tab"
        >
          <div className="startup_tab_img">
            <div className="web_img">
              <img src="img/new/web_image.jpg" alt />
            </div>
            <div className="phone_img">
              <img src="img/new/iPhoneX.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="stratup_service_area sec_pad bg_color">
    <div className="container">
      <div
        className="sec_title mb_70 wow fadeInUp"
        data-wow-delay="0.4s"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeInUp"
        }}
      >
        <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">
          User - friendly experience for <br /> your attendies
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="stratup_service_img">
            <div className="shape" />
            <img className="laptop_img" src="img/new/laptop.png" alt />
            <img className="phone_img" src="img/new/phone.png" alt />
          </div>
        </div>
        <div className="col-lg-3 d-flex align-items-center">
          <div className="stratup_service_info">
            <div className="startup_service_item">
              <div className="icon">
                <i className="icon-badge" />
              </div>
              <h3>You events</h3>
              <p>Every event at your fingertip</p>
            </div>
            <div className="startup_service_item">
              <div className="icon icon_two">
                <i className="icon-bell" />
              </div>
              <h3>Notifications</h3>
              <p>Every event at your fingertip</p>
            </div>
            <div className="startup_service_item">
              <div className="icon icon_three">
                <i className="icon-layers" />
              </div>
              <h3>Sessions</h3>
              <p>Every event at your fingertip</p>
            </div>
            <div className="startup_service_item">
              <div className="icon icon_four">
                <i className="icon-screen-tablet" />
              </div>
              <h3>Interactions</h3>
              <p>Every event at your fingertip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="progress_bar_area">
    <div className="container">
      <div
        className="sec_title mb_70 wow fadeInUp"
        data-wow-delay="0.4s"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeInUp"
        }}
      >
        <h2 className="f_p f_size_30 l_height40 f_600 t_color text-center">
          Measure and increase <br /> your reach
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 progress_item">
          <div
            className="circle"
            data-value="0.72"
            data-fill='{"color": "#aa6ffa"}'
            data-trackcolor
          >
            <div className="number">
              <span className="counter">72</span>%
            </div>
          </div>
          <h4>Innovations</h4>
          <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
        </div>
        <div className="col-lg-3 col-md-4 progress_item">
          <div
            className="circle"
            data-value="0.82"
            data-fill='{"color": "#f3af4e"}'
            data-trackcolor
          >
            <div className="number">
              <span className="counter">82</span>%
            </div>
          </div>
          <h4>Great Tests</h4>
          <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
        </div>
        <div className="col-lg-3 col-md-4 progress_item">
          <div
            className="circle"
            data-value="0.92"
            data-fill='{"color": "#6fadfa"}'
            data-trackcolor
          >
            <div className="number">
              <span className="counter">92</span>%
            </div>
          </div>
          <h4>Big Projects</h4>
          <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
        </div>
        <div className="col-lg-3 col-md-4 progress_item">
          <div
            className="circle"
            data-value="0.42"
            data-fill='{"color": "#fa6fd1"}'
            data-trackcolor
          >
            <div className="number">
              <span className="counter">42</span>%
            </div>
          </div>
          <h4>Action Plans</h4>
          <p>Charles Jeffrey up the kyver loo in my flat blimey.!</p>
        </div>
      </div>
      <div className="br_bottom" />
    </div>
  </section>
  <section className="testimonial_area_four sec_pad">
    <div
      className="testimonial_shap_img"
      style={{
        background: "url(img/new/testimonial_bg_shap.png) no-repeat bottom left"
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="testimonial_title">
            <h6>Testimonials</h6>
            <h2 className="f_p f_size_30 l_height45 f_600 t_color">
              Loved by businesses,
              <br />
              and individuals across
              <br />
              the globe.
            </h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="stratup_testimonial_info d-flex align-items-center">
            <div className="testimonial_slider_four owl-carousel">
              <div className="item">
                <div className="author_img">
                  <img src="img/new/member_01.jpg" alt />
                </div>
                <p>
                  He nicked it hanky panky Eaton naff it's your round quaint
                  cheeky cheers, tomfoolery bonnet posh blimey what a plonker
                  vagabond, zonked Elizabeth give us a bell.?
                </p>
                <h5>Phillip Anthropy</h5>
                <h6>UI/UX designer</h6>
              </div>
              <div className="item">
                <div className="author_img">
                  <img src="img/new/member_01.jpg" alt />
                </div>
                <p>
                  He nicked it hanky panky Eaton naff it's your round quaint
                  cheeky cheers, tomfoolery bonnet posh blimey what a plonker
                  vagabond, zonked Elizabeth give us a bell.?
                </p>
                <h5>Phillip Anthropy</h5>
                <h6>UI/UX designer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</Layout>
)

export default Software