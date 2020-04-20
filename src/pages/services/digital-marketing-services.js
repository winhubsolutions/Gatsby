import React from "react"
import { Link } from "gatsby"
import ecom from "../../img/pos/Ecom.svg"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import banner from "../../img/home4/Digital.svg"
import bannerbg from "../../img/home4/banner_bg.png"
import seo from "../../img/home4/Seologo.svg"
const Digital = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="agency_banner_area bg_color">
  <img className="banner_shap" src={bannerbg} alt />
  <div className="container custom_container">
    <div className="row">
      <div className="col-lg-5 d-flex align-items-center">
        <div className="agency_content">
          <h2
            className="f_700 t_color3 mb_40 wow fadeInLeft"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInLeft"
            }}
          >
         Digital Marketing Services Company In Telanagana
          </h2>
          <p
            className="f_400 l_height28 wow fadeInLeft"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInLeft"
            }}
          >
          
          Digital Marketing is one type of marketing strategy used by digital technologies such as computers, the Internet, social media and so on to promote any brand, organization, product or service.    </p>
              <div className="action_btn d-flex align-items-center mt_60">
            <Link
              to="/contact"
              className="btn_hover agency_banner_btn wow fadeInLeft"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInLeft"
              }}
            >
             Conatct us
            </Link>
            
          </div>
        </div>
      </div>
      <div className="col-lg-7 text-right">
        <img
          className="protype_img wow fadeInRight"
          data-wow-delay="0.3s"
          src={banner}         
           alt
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInRight"
          }}
        />
      </div>
    </div>
    
  </div>
</section>


<div Id="DigitalMarketing">
<section class="pos_features_area sec_pad">
<div className="container custom_container">
<div className="row pos_item">
      <div className="col-lg-6">
        <div className="pos_features_img img_left">
          <div className="shape_img yellow" />
          <div className="shap_img yellow">
            <img src={ecom} 
            height="600"
            width="500"
            alt="features" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="pos_features_content pl_70">
          <h2>
           
          Digital Marketing 
          </h2>
          <div className="media h_features_item">
            
            <div className="media-body">
              
              <p>
              Winhub Solutions, as one of the leading professional SEO and digital marketing companies in Hyderabad,
           offers the best SEO and digital marketing services at reasonable prices. 
           We have an experienced team of search engine optimists & digital marketing experts who can handle any kind of company-oriented website and target ideal users in order to boost your online business.
       </p>
            </div>
          </div>
          <div className="media h_features_item">

            <div className="media-body">
            
              <div className="service-points"><div className="wwd-servces-points">
<ul class="grey-bullet two-col">
<li>Creating and maintaining profiles and fans on top social networking platforms like Facebook, Twitter, Google+, Linkedin and more.</li>
           <li>Integrate social media profiles into your website for more followers.</li>
           <li>Growing followers by organically for greater visibility in social media.</li>
           <li>Linking Social Media accounts together for better efficiency</li>
          <li>
          Engaging your brand's followers with photos, videos, quotes and exclusive offers
          </li>
          <li>Getting traffic from  social media by approaching the right audience</li>
          <li>Create and promote videos that reflect your brand in order to improve search engine rankings as well as increase traffic to your site.</li>

</ul>
</div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</section>
</div>

<div Id="SEO">
<section class="pos_features_area sec_pad">
<div className="container custom_container">
<div className="row flex-row-reverse pos_item">
  <div className="col-lg-6">
    <div className="pos_features_img">
      <div className="shape_img" />
      <div className="shap_img">
        <img src={seo} 
         height="600"
         width="500"
         alt="features" />
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="pos_features_content">
      <h2>
      Search Engine Optimization
      
      </h2>
      <div className="media h_features_item">
      
        <div className="media-body">
       
          <p>
          Welcome to the Best SEO / Internet Marketing Company in Hyderabad with more than 10 + years of experience and knowledge in all digital marketing trends.
          Seo is simply a method of making the website more available to search engines such as Google and search engine users. In other words, you make it easier for them to find your website or company.
          Leading SEO Company in Hyderabad, Winhub solutions Provides the best SEO and digital marketing services for any form of industry / website, such as travel websites, educational websites, enterprise websites, personal websites, entertainment websites, ecommerce portals (b2b and b2c),etc. with very small SEO bundles. 
          Our professional SEO team also practices only organic SEO strategies that are approved by all search engines, 
          so that your website has decent keyword positions as well as real traffic.
                </p>
        </div>
      </div>
      <div className="media h_features_item">
        
      <div className="col-lg-6 col-md-6-body">

<li> SEO provides Good Business Visibility and Branding.</li>
<li>  SEO provides Credibility to Your Business.</li>
<li>   SEO friendly websites in every project</li>

        </div>
        <div className="col-lg-6 col-md-6-body">
<li>   SEO has one of The Best ROI's in Advertising.</li>
<li>   SEO increases You Unmatched Insight into Your Business.</li>
<li></li>
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

export default Digital
