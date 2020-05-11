import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import green from "../../img/new/0222.png"
import green1 from "../../img/new/0111.png"

const uiux = ({ data }) => (
    <Layout>
      <SEO title="UX/UI Design and Development Services" />
      <section className="startup_banner_area_three">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="startup_content_three">
          <h2
            className="wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <span>UX/UI Design and
</span> Development Services
          </h2>
          <p>
          We make websites, User Interface and identity. We believe that beauty designing makes the work look more Fame for the business.
          </p>
          <Link to="/contact" className="btn_six slider_btn">
            Get Started
          </Link>
          
        </div>
      </div>
    </div>
  </div>
  <div className="stratup_app_screen">
    <img
      className="phone wow slideInnew"
      data-wow-delay="0.8s"
      src={green}
      alt
      style={{
        visibility: "visible",
        animationDelay: "0.8s",
        animationName: "slideInnew"
      }}
    />
    <img
      className="laptop wow slideInnew"
      data-wow-delay="0.3s"
      src={green1}
      alt
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "slideInnew"
      }}
    />
  </div>
</section>
      <section className="process_area bg_color sec_pad">
<div className="container">
<div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />


</div>
</section>
      </Layout>

)

export default uiux
export const query = graphql`
  {
    wordpressPage(title: {eq: "UX/UI Design and Development Services"}) {
        content
        id
        title
        excerpt
        date
      }
    }
    
`