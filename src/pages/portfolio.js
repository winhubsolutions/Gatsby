import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const portfolio = () => (
  <Layout>
    <SEO title="Page two" />
    <div>
  <section className="breadcrumb_area">
    <img className="breadcrumb_shap" src="img/breadcrumb/banner_bg.png" alt="" />
    <div className="container">
      <div className="breadcrumb_content text-center">
        <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
          Portfolio grid 4 column
        </h1>
        <p className="f_400 w_color f_size_16 l_height26">
          Why I say old chap that is spiffing off his nut arse pear shaped
          plastered
          <br /> Jeffrey bodge barney some dodgy.!!
        </p>
      </div>
    </div>
  </section>
  <section className="portfolio_area sec_pad bg_color">
    <div className="container">
      <div id="portfolio_filter" className="portfolio_filter mb_50">
        <div data-filter="*" className="work_portfolio_item active">
          See All
        </div>
        <div data-filter=".br" className="work_portfolio_item">
          Branding
        </div>
        <div data-filter=".web" className="work_portfolio_item">
          Web Design
        </div>
        <div data-filter=".fashion" className="work_portfolio_item">
          Fashion
        </div>
        <div data-filter=".ux" className="work_portfolio_item">
          UI/UX
        </div>
        <div data-filter=".product" className="work_portfolio_item">
          Product
        </div>
      </div>
      <div className="row portfolio_gallery mb_30" id="work-portfolio">
        <div className="col-lg-3 col-sm-6 portfolio_item br ux mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_01.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_01.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Apple Mobile Mockup</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item fashion web mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_02.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_02.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Interior Design</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item product br mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_03.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_03.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">
                    Portfolio Center Slider
                  </h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item ux web mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_04.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_04.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Portfolio Masonry</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item br ux mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_05.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_05.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Double Exposure</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item fashion web mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_06.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_06.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">American Burger</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item product br mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_07.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_07.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Apple Laptop Mockup</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item ux web mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_08.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_08.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Inner Smart Watch</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item fashion web mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_09.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_09.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">American Burger</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item product br mb-30">
          <div className="portfolio_img">
            <img src="img/portfolio/3-columns/image_10.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="img/portfolio/3-columns/image_10.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Apple Laptop Mockup</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item ux web mb-30">
          <div className="portfolio_img">
            <img src="../img/portfolio/3-columns/image_11.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="../img/portfolio/3-columns/image_11.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Inner Smart Watch</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 portfolio_item ux web mb-30">
          <div className="portfolio_img">
            <img src="../img/portfolio/3-columns/image_12.jpg" alt="" />
            <div className="hover_content h_content_two">
              <Link
                href="../img/portfolio/3-columns/image_12.jpg"
                className="img_popup leaf"
              >
                <i className="ti-plus" />
              </Link>
              <div className="portfolio-description leaf">
                <Link href="work-default.html" className="portfolio-title">
                  <h3 className="f_500 f_size_16 f_p">Inner Smart Watch</h3>
                </Link>
                <div className="links">
                  <Link href="#">Branding,</Link>
                  <Link href="#">Fashion</Link>
                </div>
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

export default portfolio

