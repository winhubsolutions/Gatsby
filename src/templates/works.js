import React from "react"
import { graphql,Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const works = ({ data }) => (
    <Layout>
      <SEO
        title={data.wordpressWpPortfolios.title}
        description={data.wordpressWpPortfolios.excerpt}
      />
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
      
    <img className="breadcrumb_shap" src="" alt="" />
  <div className="container">
    <div className="breadcrumb_content_two text-center">
      <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
        {" "}
        {data.wordpressWpPortfolios.title}{" "}
      </h1>
      <ol className="breadcrumb">
        <li>
          <Link href="https://www.winhubsolutions.in/"> Home </Link> > {data.wordpressWpPortfolios.title} </li>
      </ol>
    </div>
  </div>
</section>
<section className="portfolio_details_area sec_pad">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="portfolio_details_gallery gallery_two">
          <img
            className="img-fluid mb_20"
            alt="portfolios"
            src={data.wordpressWpPortfolios.acf.featureimage.sizes.large}           />
          
         
        </div>
      </div>
      <div className="col-lg-6">
        <div className="portfolio_details_info pr_50 pl_100">
          <h5 className="f_700 f_p f_size_20 t_color3 mb-30">
          {data.wordpressWpPortfolios.title}
          </h5>
          <p className="f_400 f_size_15 mb-0">
          {data.wordpressWpPortfolios.excerpt}
          </p>
          <div className="portfolio_category mt_60">
            <div className="p_category_item mb-30">
              <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                Client:{data.wordpressWpPortfolios.acf.client_}
              </h6>
              <p className="f_size_15 f_400 mb-0">Abstergo Industries.</p>
            </div>
            <div className="p_category_item mb-30">
              <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                Date:{" "}
              </h6>
              <p className="f_size_15 f_400 mb-0">March, 2018</p>
            </div>
            <div className="p_category_item mb-30">
              <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                Website:{" "}
              </h6>
              <p className="f_size_15 f_400 mb-0">droitlab.com</p>
            </div>
            <div className="p_category_item mb-30">
              <h6 className="f_p f_size_15 f_400 t_color3 mb-0 l_height28">
                Services:{" "}
              </h6>
              <p className="f_size_15 f_400 mb-0">
                Web Development, UX Design, SEO
              </p>
            </div>
            <div className="p_category_item">
              <p className="f_400 f_size_15 mb-0">Share on</p>
              <div className="social_icon">
                <a href="#">
                  <i className="ti-facebook" />
                </a>
                <a href="#">
                  <i className="ti-twitter-alt" />
                </a>
                <a href="#">
                  <i className="ti-google" />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio_pagination portfolio_pagination_two mt_100">
            <a className="prev" href="#">
              <i className="ti-arrow-left" />
              Prev Project
            </a>
            <a className="next" href="#">
              Next Project
              <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </Layout>



)
export default works

export const query = graphql`
  query($id: Int!) {
wordpressWpPortfolios(wordpress_id: {eq: $id }) {
    title
    slug
    content
    date(formatString: "MMMM DD,YYYY")
    acf {
      client_
      description
      location_
      services_
      title
      website_
      featureimage {
        sizes {
          medium
          large
        }
      }
    }
  }
}


`