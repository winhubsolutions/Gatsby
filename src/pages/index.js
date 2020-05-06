import React from "react"

import seoimage from "../img/seo/image.png"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import  Img from "gatsby-image"
import SEO from "../components/seo"
import {Col,Row} from 'react-bootstrap'
import process from "../images/process_2.png"
import { ThemeProvider } from "../components/ThemeContext"
import Loadable from "react-loadable"
import Clientlogo from "../components/clientlogo"

import AllTechnology from "../components/alltechnology"
import Freeestimate from"../components/contactbar"


const loader=()=>(<div>Loading...</div>)



const MyLoadableCarousel = Loadable({
  loader: () => import("../components/servicescarousel"),
  loading: loader,
})

const IndexPage =({ data }) => (
  <ThemeProvider>
  <Layout>
    <SEO title="Home" />

<div>
    <section className="seo_home_area">
  <div className="home_bubble">
    <div className="bubble b_one" />
    <div className="bubble b_two" />
    <div className="bubble b_three" />
    <div className="bubble b_four" />
    <div className="bubble b_five" />
    <div className="bubble b_six" />
    <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'>
      <img src="../img/seo/triangle_one.png" alt="" />
    </div>
    <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'>
      <img src="../img/seo/triangle_two.png" alt="" />
    </div>
    <div className="triangle b_nine">
      <img src="..img/seo/triangle_three.png" alt="" />
    </div>
  </div>
  <div className="banner_top">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center seo_banner_content">
          <h2 className="wow fadeInUp" data-wow-delay="0.3s">
          Welcome to Win Hub Solutions
            
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.5s">
          The Best Professional Web Designing, Web Development, Mobile Application Development
            <br /> & SEO (Digital Marketing) Company in Telangana
          </p>
          <Link to="/contact" className="seo_btn seo_btn_one btn_hover">
            Get Started
          </Link>
          <Link to="/aboutus" className="seo_btn seo_btn_two btn_hover">
            Learn More
          </Link>
        </div>
      </div>
      <div className="saas_home_img wow fadeInUp" data-wow-delay="0.8s">
        <img src={seoimage} alt=''/>
      </div>
    </div>
  </div>
</section>

<Clientlogo />
<section className="seo_service_area sec_pad">
  <div className="container">
 
 <Row>
 <Col sm={8}>
 
 <div style={{

       textAlign:'justify',
     }}><div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />

 </div>
 
 </Col>
 <Col sm={4}>


 <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
   

   <Img fluid={data.wordpressPage.acf.featureimage.localFile.childImageSharp.fluid}
   
   />
 </div>
 </Col>
</Row>
</div>
</section>
</div>

<MyLoadableCarousel/>

    <AllTechnology/>
    <Freeestimate/>

      </Layout>
  </ThemeProvider>
)

export default IndexPage


export const query = graphql`
  {
    wordpressPage(title: {eq: "ABOUT"}) {
      title
      slug
      content
      acf {
        description
        featureimage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`