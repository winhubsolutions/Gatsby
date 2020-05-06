import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import banner from "../../img/new/blog/blog_banner.png"




const POS = () => (
    <Layout>
      <SEO title="Contact Us" />
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
      
    <img className="breadcrumb_shap" src={banner} alt="" />
  <div className="container">
    <div className="breadcrumb_content_two text-center">
      <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
        {" "}
        Winhub POS – restaurant point of sale web application{" "}
      </h1>
      <ol className="breadcrumb">
        <li>
          <Link href="https://www.winhubsolutions.in/"> Home </Link> > Winhub POS – Restaurant Point Of Sale Web Application </li>
      </ol>
    </div>
  </div>
</section>
   
     <section>
     <div className="elementor-container elementor-column-gap-default">
  <div className="elementor-row">
    <div
      className="container"
    >
      <div className="elementor-column-wrap  elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div
            className="elementor-element elementor-element-783218c elementor-widget elementor-widget-text-editor"
            data-id="783218c"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-text-editor elementor-clearfix">
                <p>
                  <strong>WINHUB POS</strong>&nbsp;is an online restaurant Point
                  of Sale app has a user friendly interface that everyone can
                  use without difficulty. The POS can be used online, on iPads,
                  Android tablets or laptops
                  <br />
                  Say goodbye to ugly, expensive, outdated POS systems and enjoy
                  the WINHUB POS web interface designed for the modern retailer.
                </p>
                <p>&nbsp;</p>
                <h4>
                  <img
                    src="https://camo.envatousercontent.com/4ba46408b85a8bdbd89cf3e24fc82434b193fa78/687474703a2f2f7777772e6461722d656c7765622e636f6d2f70726573706f732f67702e706e67"
                    alt="Plus"
                  />
                 KEY FEATURES</h4>
                
                <ul
                  
                >
                  <li>Handling multiple customers</li>
                  <li>Handling multiple waiters</li>
                  <li>Handling multiple tables and zones</li>
                  <li>Handling multiple stores</li>
                  <li>simple stock management</li>
                  <li>Register repport</li>
                  <li>Products with taxes</li>
                  <li>
                    Discount (you can add a spesific discount for every customer
                    OR a discount for each sale)
                  </li>
                  <li>
                    Reports (customers, product number) (monthly stats in the
                    current or other years) … etc
                  </li>
                  <li>Clients or products repprot in a specific Range.</li>
                  <li>
                    Barcode scanner compatible (for the products and sales
                    receipt)
                  </li>
                  <li>Print and save receipts</li>
                  <li>Hold sales option</li>
                  <li>
                    On-Screen Keyboard (you enables or disabled in the setting
                    page)
                  </li>
                  <li>Set Receipt Header and Footer.</li>
                  <li>Optimized for best performance</li>
                  <li>Responsive</li>
                  <li>And many more for the futures updates</li>
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



    
    </Layout>
  )
  
  export default POS
  