import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import banner from "../../img/home4/banner_img.png"
import bannerbg from "../../img/home4/banner_bg.png"
import enter from "../../img/home2/Enterprise-Solutions.svg"
import ecom from "../../img/pos/Ecom.svg"
import Content from "../../img/pos/item3.svg"
import Customweb from "../../img/pos/customweb.svg"
import Technology from "../../components/tech"

const webdevelopment = () => (
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
            Web Development Company
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
          
           Winhub Solutions is a full-service website design & development company in India. We believe in providing the best advanced technology to help clients understand their needs and overcome their challenges quickly and affordably. Our main services - ecommerce web development, SEO (search engine optimization), digital marketing & mobile app development.          </p>
       
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
{/* <section className="process_area bg_color sec_pad">
  <div className="container">
    <div className="features_info">
      <img className="dot_img" src="img/process/divider.png" alt />
      <div className="row agency_featured_item mt-0 flex-row-reverse">
        <div className="col-md-6">
          <div className="agency_featured_img text-right">
            <img src="img/process/process_1.png" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="agency_featured_content pr_70 pl_70">
            <div className="dot">
              <span className="dot1" />
              <span className="dot2" />
            </div>
            <img className="number" src="img/home4/icon01.png" alt />
            <h3>Information Collection</h3>
            <p>
            For any web development company, this is a first step or a starting point. Our web developers will discuss your business in detail to get a clear understanding of the products or services you offer, what goals you want to achieve and when, and who your target audience is. This will help us decide on the strategy for building your website.
            </p>
            <p>
            As the best website development company, we understand that the functionality required for each site is different, and therefore, we use different technologies to meet the target audience. On your website, we create a detailed plan.
            </p>
            <a href="#" className="icon mt_30">
              <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="row agency_featured_item agency_featured_item_two">
        <div className="col-md-6">
          <div className="agency_featured_img text-right">
            <img src="img/process/process_2.png" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="agency_featured_content pl_100">
            <div className="dot">
              <span className="dot1" />
              <span className="dot2" />
            </div>
            <img className="number" src="img/home4/icon02.png" alt />
            <h3>Planning</h3>
            <p>
            In this stage, Winhub solutions professional developers, a reputed web development company India, build the sitemap and the wireframe. The sitemap will create the connection between the main areas on the site. It will also give you a good picture of what the website should look like once it's done. In fact, the sitemap allows to create a user-friendly and easy-to-use sitemap.
            </p>
            <a href="#" className="icon mt_30">
              <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="row agency_featured_item flex-row-reverse">
        <div className="col-md-6">
          <div className="agency_featured_img text-right">
            <img src="img/process/process_3.png" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="agency_featured_content pr_70 pl_70">
            <div className="dot">
              <span className="dot1" />
              <span className="dot2" />
            </div>
            <img className="number" src="img/home4/icon3.png" alt />
            <h3>Design</h3>
            <p>
            We are Telangana's top web development service, and we're giving form to your website at this point. All needed visual material, including photographs, illustrations and videos, will also be created. We bear in mind the interests of your clients and the target market when working on the concept.The style, rendered in colors and with logos and pictures, offers a clearer view of the finished product.
            </p>
            <a href="#" className="icon mt_30">
              <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="row agency_featured_item agency_featured_item_two">
        <div className="col-md-6">
          <div className="agency_featured_img text-right">
            <img src="img/process/process_4.png" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="agency_featured_content pl_100">
            <div className="dot">
              <span className="dot1" />
              <span className="dot2" />
            </div>
            <img className="number" src="img/process/icon_04.png" alt />
            <h3>Wuth instant data to keep everyone in the know</h3>
            <p>
            When it comes to web development , content production also overlaps with other web development phases and has a central role to play in the whole process. The marketing department at Web Destiny, a reputable web development company, India, brings together information that has the potential to convey to the target market anything you have in mind. We would also include calls for action at the most strategic stage,We would also incorporate calls for action at the most important positions to ensure conversions. Our marketing specialists are writing catchy headlines, updating text, producing new text, assembling current data, and doing so many more to achieve the best traffic output.
            </p>
            <a href="#" className="icon mt_30">
              <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="row agency_featured_item flex-row-reverse">
        <div className="col-md-6">
          <div className="agency_featured_img text-right">
            <img src="img/process/process_5.png" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="agency_featured_content pr_70 pl_70">
            <div className="dot">
              <span className="dot1" />
              <span className="dot2" />
            </div>
            <img className="number" src="img/process/icon_05.png" alt />
            <h3></h3>
            <p>
            We are a skilled and experienced web development company in India and we are starting to build your website at this point.Any dedicated web development company, such as Winhub solutions, will make use of all the graphic elements that were developed during the design and content creation phase at the time of the launch of the website. Typically, we're starting with the home page. Centered on the website hierarchy, sub- are added as set out in the sitemap.
            </p>
            <a href="#" className="btn_hover agency_banner_btn mt_30">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="dot middle_dot">
        <span className="dot1" />
        <span className="dot2" />
      </div>
    </div>
  </div>
</section> */}
<div Id="Enterprise">
<section class="pos_features_area sec_pad">
<div className="container custom_container">
<div className="row flex-row-reverse pos_item">
  <div className="col-lg-6">
    <div className="pos_features_img">
      <div className="shape_img" />
      <div className="shap_img">
        <img src={enter} 
         height="600"
         width="500"
         alt="features" />
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="pos_features_content">
      <h2>
      Enterprise Solutions
      
      </h2>
      <div className="media h_features_item">
      
        <div className="media-body">
       
          <p>
          Winhub solutions is a leading enterprise web development company specializing in the creation of multi-level enterprise-grade software solutions to meet various corporate needs.
           We develop customized enterprise web portals, eCommerce solutions,B2B and B2C applications, ERP and CRM software applications, Reporting, Billing & Secure Financial Transaction Processing Systems, etc.
           Our company IT and cloud solutions are designed using Latest web technology and are reliable, flexible and scalable to help companies minimize total operating costs and increase operational performance.
     
          </p>
        </div>
      </div>
      <div className="media h_features_item">
        
      <div className="col-lg-6 col-md-6-body">

<li>Custom Software Development</li>
<li>CRM Software Development</li>
<li>Custom  Web Development</li>

        </div>
        <div className="col-lg-6 col-md-6-body">

<li>Enterprise System Integration</li>
<li>Enterprise Mobility Solutions</li>
<li>End-to-end IT Consultation</li>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
</div>

<div Id="E-Commerce">
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
          E-Commerce
          </h2>
          <div className="media h_features_item">
            
            <div className="media-body">
              
              <p>
              We are a leading eCommerce site development company designing beautiful cloud-based eCommerce applications for ultimate online shopping experience. Our eCommerce website creation capabilities include comprehensive online eCommerce retail web design and personalized eCommerce web development for independent,
               medium and large retailers.Our experience in common eCommerce platforms, such as Magento-based eCommerce website creation, WooCommerce, OsCommerce, Zen Cart, OpenCart, Shopify, etc., has helped us provide world-class eCommerce web solutions with a comprehensive online content management system.
             </p>
            </div>
          </div>
          <div className="media h_features_item">

            <div className="media-body">
            
              <div className="service-points"><div className="wwd-servces-points">
<ul class="grey-bullet two-col">
<li>Fraud Proof eCommerce Website Development</li>
<li>Online eCommerce Website Design</li>
<li>Responsive eCommerce Websites/ Web Apps</li>
<li>SaaS based eCommerce Set up</li>
<li>Multi-vendor Store Development</li>
<li>Shopping Cart Development</li>
<li>Custom eCommerce Development</li>
<li>Mobile Commerce Solutions</li>
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
<div id="Custom-Web-Development">
<section className="pos_features_area sec_pad">
<div className="container custom_container">
    <div className="row flex-row-reverse pos_item">
      <div className="col-lg-6">
        <div className="pos_features_img">
          <div className="shape_img" />
          <div className="shap_img">
            <img src={Customweb}    height="600"
         width="500" alt="features" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="pos_features_content">
          <h2>
          Custom Web Development
          </h2>
          <div className="media h_features_item">
           
            <div className="media-body">
            
              <p>
                 </p>
            </div>
          </div>
          <div className="media h_features_item">

            <div className="media-body">
            
              <p>
              We are a leading web design and web development company in India ,We are supporting some of the most recognizable brands with digital landscape presence through custom web development services. The web solutions we build are feature-rich, 
              highly functional, durable, stable and scalable with an attractive UI / UX interface that enhances the brand.
              Hire PHP website developers from Winhub Solutions, who have years of experience creating custom websites, mobile applications, web portals, eCommerce online stores, etc. We have a great full-stack development team with experience in Microsoft technologies, PHP core and open-source frameworks, UI / UX design, scripting languages, DevOps services to provide affordable solutions for your company.
              </p>
            </div>
            </div>
            <div className="media h_features_item">
            <i className="icon_bag_alt green" />
            <div className="media-body">
        

              <div _ngcontent-c4="" class="service-points"><ul class="white-bullet">
<li>Custom Website Design</li>
<li>Web CMS Development</li>
<li>Web Portal Development</li>
<li>eCommerce Website Development</li>
<li>Enterprise Web App Development</li>
</ul>
</div>
              </div>
              </div>
          
        </div>
        
      </div>
    </div>
    </div>
    </section>
    </div>
    <div id="Content-Management-System">
<section className="pos_features_area sec_pad">
<div className="container custom_container">
    <div className="row flex-row-reverse pos_item">
      <div className="col-lg-6">
        <div className="pos_features_img">
          <div className="shape_img blue" />
          <div className="shap_img blue">
            <img src={Content} alt="features" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="pos_features_content">
          <h2>
          Content Management System
          </h2>
          <div className="media h_features_item">

            <div className="media-body">
              
              <p>
              Winhub solutions is a leading CMS development company offering a wide range of content management system (CMS) development tools and website products, B2C & B2B websites, enterprise apps, and eCommerce solutions.
              Our performance level of 100 percent project production for CMS development projects reflects Winhub solutions experience of professional CMS developers. Hire CMS developers and CMS developers from Winhub Soluitons who are experts in Working With WordPress, Drupal, Umbraco, Kentico, Moodle, Joomla, TYPO3, Mambo, DotNetNuke, etc.
              </p>
            </div>
          </div>
          <div className="media h_features_item">
            <i className="icon_check check" />
            <div className="media-body">
              <div _ngcontent-c4="" class="service-points"><ul class="grey-bullet">
<li>Custom CMS Web Development</li>
<li>CMS for eCommerce Solutions</li>
<li>CMS for B2C &amp; B2B Apps</li>
<li>Enterprise CMS Development</li>
<li>CMS Migration &amp; Update</li>
</ul>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
</div>


<Technology/> 

  </Layout>
)

export default webdevelopment
