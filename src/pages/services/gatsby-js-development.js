import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import line1 from "../../img/hosting/line_01.png"
import line2 from "../../img/hosting/line_02.png"
import line3 from "../../img/hosting/line_03.png"
import line4 from "../../img/hosting/line_04.png"
import line5 from "../../img/hosting/line_05.png"
import line6 from "../../img/hosting/line_06.png"
import line7 from "../../img/hosting/line_07.png"
import line8 from "../../img/hosting/line_08.png"
import line9 from"../../img/hosting/hosting-image.png"
const gatsby = ({ data }) => (
    <Layout>
      <SEO title="Contact US" />

      <section className="hosting_banner_area">
  <ul className="list-unstyled b_line">
    <li
      className="wow fadeInUp"
      data-wow-delay="0.4s"
      style={{
        visibility: "visible",
        animationDelay: "0.4s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line1} alt="gatsby development company" />
    </li>
    <li
      className="wow fadeInUp"
      data-wow-delay="0.7s"
      style={{
        visibility: "visible",
        animationDelay: "0.7s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line2} alt="gatsby development company" />
    </li>
    <li
      className="wow fadeInUp"
      data-wow-delay="0.9s"
      style={{
        visibility: "visible",
        animationDelay: "0.9s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line3} alt="gatsby development company" />
    </li>
    <li
      className="wow fadeInUp"
      data-wow-delay="1.2s"
      style={{
        visibility: "visible",
        animationDelay: "1.2s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line4}  alt="gatsby development company" />
    </li>
    <li
      className="wow fadeInUp"
      data-wow-delay="0.4s"
      style={{
        visibility: "visible",
        animationDelay: "0.4s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line5} alt="gatsby development company" />
    </li>
    <li
      className="wow fadeInUp"
      data-wow-delay="1s"
      style={{
        visibility: "visible",
        animationDelay: "1s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line6} alt="gatsby development company" />
    </li>
    <li
      className="wow fadeInUp"
      data-wow-delay="1s"
      style={{
        visibility: "visible",
        animationDelay: "1s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line7} alt="gatsby development company" />
    </li>
    <li
      className="wow fadeInUp"
      data-wow-delay="1.3s"
      style={{
        visibility: "visible",
        animationDelay: "1.3s",
        animationName: "fadeInUp"
      }}
    >
      <img src={line8} alt="gatsby development company" />
    </li>
  </ul>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-7 d-flex align-items-center">
        <div className="hosting_content">
          <h2
            className="wow fadeInUp"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp"
            }}
          >
           Gatsby Development Company
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp"
            }}
          >
            Get converting, blazing fast, SEO-friendly GatsbyJS website built by experts.
          </p>
          <Link
            to="/contact"
            className="hosting_btn btn_hover wow fadeInUp"
            data-wow-delay="0.7s"
            style={{
              visibility: "visible",
              animationDelay: "0.7s",
              animationName: "fadeInUp"
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="col-lg-6 col-md-5">
        <img
          className="img-fluid wow fadeInRight"
          data-wow-delay="0.7s"
          src={line9}
          alt="gatsby development company"
          style={{
            visibility: "visible",
            animationDelay: "0.7s",
            animationName: "fadeInRight"
          }}
        />
      </div>
    </div>
  </div>
</section>

      <section className="process_area bg_color sec_pad">
<div className="container">
<div dangerouslySetInnerHTML={{ __html: data.winhub.page.content }} />


</div>
</section>

 </Layout>      )


export default gatsby 
export const query = graphql`
  {
    winhub {
      page(id: "cGFnZTo0OTgy") {
        title
        slug
        content
        excerpt
        featuredImage {
          sizes(size: MEDIUM)
          sourceUrl(size: MEDIUM)
        }
      }
    }
  
    }
    
`