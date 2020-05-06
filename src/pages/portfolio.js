import React, { Component } from "react"
import Img from "gatsby-image"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout" 
import SEO from "../components/seo"

import Loadable from "react-loadable"
const loader=()=>(<div>Loading...</div>)



const  Portfoliocarousel = Loadable({
  loader: () => import("../components/portfoliocarousel"),
  loading: loader,
})

class portfolio extends Component {


    render() {
        const data = this.props.data


    return (
        <Layout>
         <SEO/>
  < Portfoliocarousel/>
          
          <section className="portfolio_area sec_pad bg_color">
          <div className="container">
             
              <div className="row portfolio_gallery mb_30" id="work-portfolio" style={{ height: 2000, position: "relative" }}>
          
                        <div
        className="col-lg-6 col-sm-6 portfolio_item br ux mb-30"
        style={{ left: 0, top: 0, position: "absolute" }}
      >
            {data.allWordpressWpPortfolios.edges.map(({ node }) => (
        <div className="portfolio_img">
          <img alt src={node.acf.featureimage.sizes.large} />
          <div className="hover_content">
            <a
              className="img_popup leaf"
              href={node.acf.featureimage.sizes.large}
            >
              +
            </a>
            <div className="portfolio-description leaf">
            <Link to={`/portfolios/${node.slug}`} className="portfolio-title">
                <h3 className="f_500 f_size_20 f_p">Apple Mobile Mockup</h3>
              </Link>
              <div className="links">
                <a href="#">Branding,</a>
                <a href="#">Fashion</a>
              </div>
            </div>
          </div>
        </div>
           ))}
      </div>     
                         

                      
                      
                    </div>
                        

                </div>
            </section>
            
        </Layout>

    
)
}
}





export default portfolio

export const pageQuery = graphql`
query {
  allWordpressWpPortfolios {
    edges {
      node {
        title
        slug
        date
        content
        acf {
          featureimage {
            sizes {
              large
              thumbnail
              medium
              saasland_350x360
            }
          }
        }
        portfolio_categories
      }
    }
  }
}

  
`