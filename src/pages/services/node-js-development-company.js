import React from "react"
import { Link, graphql } from "gatsby"
import elementone from "../../img/home-software/elements_one.png"
import elementtwo from "../../img/home-software/elements_two.png"
import elementthree from "../../img/home-software/elements_three.png"
import elementfour from "../../img/home-software/elements_four.png"
import elementfive from "../../img/home-software/elements_five.png"
import elementsix from "../../img/home-software/elements_six.png"
import pie from "../../img/home-software/pie.png"
import Layout from "../../components/layout"
import SEO from "../../components/seo"



const nodejs = ({ data }) => (
  <Layout>
    <SEO title="Contact US" />
    <section className="home_analytics_banner_area">
  <div className="elements">
    <div className="elements_item">
      <img src={elementone}alt="node js development company" />
    </div>
    <div className="elements_item">
      <img src={elementtwo}alt="node js development company" />
    </div>
    <div className="elements_item">
      <img src={elementthree}alt="node js development company" />
    </div>
    <div className="elements_item">
      <img src={elementfour}alt="node js development company" />
    </div>
    <div className="elements_item">
      <img src={elementfive}alt="node js development company" />
    </div>
    <div className="elements_item">
      <img src={elementsix}alt="node js development company" />
    </div>
  </div>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="h_analytics_content">
          <h2
            className="wow fadeInLeft"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInLeft"
            }}
          >
            Node.js Development Company
          </h2>
          <p
            className="wow fadeInLeft"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "fadeInLeft"
            }}
          >
            {" "}
            Building large-scale, real-time, scalable web and mobile apps using JavaScript.
          </p>
          <Link
            to="/contact"
            className="er_btn er_btn_two wow fadeInLeft"
            data-wow-delay="0.8s"
            style={{
              visibility: "visible",
              animationDelay: "0.8s",
              animationName: "fadeInLeft"
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="h_analytices_img">
          <img src={pie}alt="node js development company" />
        </div>
      </div>
    </div>
  </div>
</section>
    <section className="process_area bg_color sec_pad">
<div className="container">
<div dangerouslySetInnerHTML={{ __html: data.winhub.page.content }} />


</div>
</section>


    </Layout>

)
export default nodejs

export const query = graphql`
  {
    winhub {
      page(id: "cGFnZTo0ODc4") {
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