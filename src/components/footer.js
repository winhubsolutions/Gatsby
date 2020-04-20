
import React from "react"
import logo from "../images/logo.svg"

import {Link} from "gatsby"


const Footer = () => (

<footer className="footer_nine_area">
  <div className="footer_nine_top">
    <div className="footer_shap left" />
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="f_widget company_widget pr_100">
            <Link to="index.html" className="f-logo">
              <img src={logo}      width={300}
          height={90}
         srcSet="img/logo2x.png 2x" alt=''/>
            </Link>
            <p className="f_400 f_p f_size_16 mb-0 l_height28 mt_40">
            Win Hub Solutions is a professional software company with Good experienced and processional software engineers in various industries and It is a custom software development,web design & web development and mobile application Development Company.s
            </p>
            <div className="f_social_icon_two mt_30">
              <Link to="#">
                <i className="ti-facebook" />
              </Link>
              <Link to="#">
                <i className="ti-twitter-alt" />
              </Link>
              <Link to="#">
                <i className="ti-vimeo-alt" />
              </Link>
              <Link to="#">
                <i className="ti-pinterest" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_500 f_size_16 mb-30">About Us</h3>
            <ul className="list-unstyled f_list">
              <li>
                <Link to="#">Developer</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Investor</Link>
              </li>
              <li>
                <Link to="#">Sitemap</Link>
              </li>
              <li>
                <Link to="#">Jobs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_500 f_size_16 mb-30">Help &amp; Suport</h3>
            <ul className="list-unstyled f_list">
              <li>
                <Link to="#">Help aand Contact</Link>
              </li>
              <li>
                <Link to="#">Fees</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
              <li>
                <Link to="#">App</Link>
              </li>
              <li>
                <Link to="#">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pl_100">
          <div className="f_widget about-widget">
            <h3 className="f-title f_500 f_size_16 mb-30">Privacy Contact</h3>
            <ul className="list-unstyled f_list">
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Legal Agreement</Link>
              </li>
              <li>
                <Link to="#">Feedback</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="footer_nine_bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-7 align-self-center">
          <p className="mb-0 f_400">
           


            © {new Date().getFullYear()}, Built with
          {` `}
          <Link to="https://www.winhubsolutions.in">Winhub Solutions</Link>
          </p>
        </div>
        <div className="col-sm-5">
          <div className="dropdown bootstrap-select flag_selector fit-width">
            <select
              className="selectpicker flag_selector"
              data-width="fit"
              tabIndex={-98}
            >
              <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
                English
              </option>
              <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
                Español
              </option>
              <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
                Potogal
              </option>
              <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
                Brazil
              </option>
            </select>
            <button
              type="button"
              className="btn dropdown-toggle btn-light"
              data-toggle="dropdown"
              role="button"
              title="English"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    <span className="flag-icon flag-icon-us" /> English
                  </div>
                </div>{" "}
              </div>
            </button>
            <div className="dropdown-menu " role="combobox">
              <div
                className="inner show"
                role='listbox'
                aria-expanded="false"
                tabIndex={-1}
              >
                <ul className="dropdown-menu inner show" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
)


export default Footer
