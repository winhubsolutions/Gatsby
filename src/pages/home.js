import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Us</h1>
    <p>WinHub Solutions is one of the best professional web designing, web development, mobile application development &amp; digital marketing companies in Telangana ,has more than 5 years experience in web applications design and development and has successfully completed 100+ projects for client’s round-up. World.Our main objective is to style and Develop the website/app supported the Client’s customized requirements which helps them achieve their business targets.&nbsp;</p><p>Win hub Solutions also provides <b>Digital Marketing Services</b>&nbsp;for your Business. We not only build your website but also provide program Optimization Services, Social Media Marketing, PPC management, Facebook and Google Ads Service. We assist you reach thousands of potential customers for your business through online medium. We provide Digital Marketing services mainly within the field of <b>Properties, Fashion, E-commerce and Retail, Education, Healthcare and native Businesses.&nbsp;</b></p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Home
