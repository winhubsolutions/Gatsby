import React from "react"

import seoimage from "../img/seo/image.png"
import Layout from "../components/layout"
import {Link} from "gatsby"

import SEO from "../components/seo"
import {Col,Row,Container} from 'react-bootstrap'
import process from "../images/process_2.png"
import { ThemeProvider } from "../components/ThemeContext"
const IndexPage = () => (
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
          <Link href="#" className="seo_btn seo_btn_one btn_hover">
            Get Started
          </Link>
          <Link href="#" className="seo_btn seo_btn_two btn_hover">
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
<section className="seo_service_area sec_pad">
  <div className="container">
 
 <Row>
 <Col sm={8}>
 
 <div style={{

       textAlign:'justify',
     }}><p>WinHub Solutions is one of the best professional web designing, web development, mobile application development &amp; digital marketing companies in Telangana ,has more than 5 years experience in web applications design and development and has successfully completed 100+ projects for client’s round-up. World.Our main objective is to style and Develop the website/app supported the Client’s customized requirements which helps them achieve their business targets.&nbsp;</p><p>Win hub Solutions also provides <b>Digital Marketing Services</b>&nbsp;for your Business. We not only build your website but also provide program Optimization Services, Social Media Marketing, PPC management, Facebook and Google Ads Service. We assist you reach thousands of potential customers for your business through online medium. We provide Digital Marketing services mainly within the field of <b>Properties, Fashion, E-commerce and Retail, Education, Healthcare and native Businesses.&nbsp;</b></p>

 </div>
 
 </Col>
 <Col sm={4}>


 <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
   

   <img
     alt=""
     src={process}
     width="300"
     height="300"
     
   />
 </div>
 </Col>
</Row>
</div>
</section>
<section className="seo_service_area sec_pad">
  <div className="container">
    <div
      className="seo_sec_title text-center mb_70 wow fadeInUp"
      data-wow-delay="0.3s"
    >
      <h2>What We Do & We Do It With Passion</h2>
      <p>
      win hub solutions is one of The Best Professional Web Designing, Web Development, Mobile Application Development & SEO (Digital Marketing) Company in Telangana.
        <br />
      </p>
    </div>
    <div className="row seo_service_info">
      <div className="col-lg-4 col-md-6">
        <div className="seo_service_item">
          <img src="../img/seo/icon1.png" alt=''/>
          <Link href="#">
            <h4>Web Development</h4>
          </Link>
          <p>
          We specialize in developing custom software applications specifically for custom programming, database design, client-server and internet / intranet software development.
          </p>
          <Link href="#">
            <i className="arrow_right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="seo_service_item">
          <img src="../img/seo/icon2.png" alt="" />
          <Link href="#">
            <h4>Digital Marketing</h4>
          </Link>
          <p>
          We have experienced team of search engine optimizers & digital marketing experts 
          who can handle any type of business oriented website and target perfect users inorder to improve your online business.
          </p>
          <Link href="#">
            <i className="arrow_right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="seo_service_item">
          <img src="img/seo/icon5.png" alt="" />
          <Link href="#">
            <h4>E-Commerce Development</h4>
          </Link>
          <p>
          Winhub Solutions, one of Hyderabad’s leading web design & web development companies, 
          has gained considerable experience in the design & development of e-commerce websites with all the latest features in both B2B and B2C models.</p>
          <Link href="#">
            <i className="arrow_right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="seo_service_item">
          <img src="img/seo/icon5.png" alt="" />
          <Link href="#">
            <h4>Web Design</h4>
          </Link>
          <p>
          Winhub solutions is one of the Best Web Designing Company in Hyderabad with specialized web designers,having experienced and expertise team of web designers with latest web skills who can provide you fully Customized website, 
          </p>
          <Link href="#">
            <i className="arrow_right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="seo_service_item">
          <img src="img/seo/icon5.png" alt="" />
          <Link href="#">
            <h4>UI/UX Design</h4>
          </Link>
          <p>
          We make websites, User Interface and identity. We believe that beauty designing makes the work look more Fame for the business. </p>
          <Link href="#">
            <i className="arrow_right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="seo_service_item">
          <img src="img/seo/icon5.png" alt="" />
          <Link href="#">
            <h4>MOBILE APP DEVELOPMENT</h4>
          </Link>
          <p>
          Having a mobile app for the business has become a must in today’s world. We build hybrid mobile apps that run across Android, iOS, windows and other platforms

</p>
          <Link href="#">
            <i className="arrow_right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-12 text-center mt_40">
        <Link href="#" className="seo_btn seo_btn_one btn_hover">
          All Features
        </Link>
      </div>
    </div>
  </div>
</section>



</div>

    
  </Layout>
  </ThemeProvider>
)

export default IndexPage
