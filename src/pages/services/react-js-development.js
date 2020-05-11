import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import shape from "../../img/home9/shape.png"
import seo from "../../img/home9/mac.png"
import whyus from "../../img/home9/why-us-hero.svg"
const Reactjs = () => (
  <Layout>

<section className="payment_banner_area">
  <div className="shape one" />
  <div className="shape two" />
  <div className="container">
    <div
      className="payment_banner_content wow fadeInLeft"
      data-wow-delay="0.4s"
      style={{
        visibility: "visible",
        animationDelay: "0.4s",
        animationName: "fadeInLeft"
      }}
    >
      <h1 className="f_p f_700 f_size_50 w_color">
      React JS Development Company
      </h1>
      <p className="w_color f_p f_size_18">
      Winhubsolutions is one of the leading ReactJS development companies in India. We have delivered a range of top-quality ReactJS development projects with proven performance.
      </p>
      <div className="action_btn d-flex align-items-center mt_60">
        <Link href="/Contact" className="btn_hover agency_banner_btn">
          GET QUOTE
        </Link>
        
      </div>
    </div>
  </div>
  <div
    className="animation_img_two wow fadeInRight"
    data-wow-delay="0.5s"
    style={{
      visibility: "visible",
      animationDelay: "0.5s",
      animationName: "fadeInRight"
    }}
  >
    <img src={seo} alt="" />
  </div>
  <img className="svg_intro_bottom" src={shape} alt />
</section>
<section className="s_subscribe_area">
  <div className="s_shap">
    <svg
      className="right_shape"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="PSgrad_5">
          <stop offset="0%" stopColor="rgb(103,84,226)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(25,204,230)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        fill="url(#PSgrad_5)"
        d="M543.941,156.289 L227.889,41.364 C184.251,25.497 136.000,47.975 120.118,91.571 L5.084,407.325 C-10.799,450.921 11.701,499.127 55.339,514.995 L371.391,629.920 C415.029,645.788 463.280,623.309 479.162,579.713 L594.196,263.959 C610.079,220.362 587.579,172.157 543.941,156.289 Z"
      />
      <path
        fill="url(#PSgrad_5)"
        d="M625.661,120.004 L309.609,5.079 C265.971,-10.790 217.720,11.689 201.838,55.286 L86.804,371.039 C70.921,414.636 93.421,462.842 137.059,478.709 L453.111,593.634 C496.749,609.502 545.000,587.024 560.882,543.427 L675.916,227.673 C691.799,184.077 669.299,135.872 625.661,120.004 Z"
      />
    </svg>
    <svg
      className="bottom_shape"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="PSgrad_6" x1="76.604%" x2="0%" y1="0%" y2="64.279%">
          <stop offset="0%" stopColor="rgb(103,84,226)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(25,204,230)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        fill="url(#PSgrad_6)"
        d="M543.941,156.289 L227.889,41.365 C184.251,25.496 136.000,47.975 120.118,91.572 L5.084,407.325 C-10.799,450.922 11.701,499.127 55.339,514.995 L371.391,629.920 C415.029,645.788 463.280,623.310 479.162,579.713 L594.196,263.959 C610.079,220.362 587.579,172.157 543.941,156.289 Z"
      />
      <path
        fill="url(#PSgrad_6)"
        d="M625.661,120.004 L309.609,5.078 C265.971,-10.789 217.720,11.689 201.838,55.286 L86.804,371.040 C70.921,414.636 93.421,462.842 137.059,478.709 L453.111,593.634 C496.749,609.502 545.000,587.023 560.882,543.427 L675.916,227.673 C691.799,184.077 669.299,135.871 625.661,120.004 Z"
      />
    </svg>
  </div>
  <div className="container">
    <div
      className="payment_banner_content wow fadeInLeft"
      data-wow-delay="0.4s"
      style={{
        visibility: "visible",
        animationDelay: "0.4s",
        animationName: "fadeInUp"
      }}
     >
      <h2 className="f_p f_size_30 l_height50 f_600 t_color">
      What is ReactJS ?
      </h2>
      <br></br>
      <p className="w_color f_p f_size_18">
      ReactJS is one of the most successful JavaScript UI frameworks that are commonly used today because of its high performance in rendering. It provides developers of ReactJS with a simple, robust and flexible framework for the creation of user interface applications. ReactJS 'data binding and state management features make it an perfect platform for building and deploying dynamic apps with outstanding UI.
         </p>

   </div>
   <div
    className="payment_banner_content wow fadeInRight"
    data-wow-delay="0.5s"
    style={{
      visibility: "visible",
      animationDelay: "0.5s",
      animationName: "fadeInRight"
    }}
  >
        <br>
        </br> 
        <h2 className="f_p f_size_30 l_height50 f_600 t_color">
        ReactJS Development Services
      </h2>       
      <p className="w_color f_p f_size_18">
      We build innovative web applications in React JS development environment through an array of services  
 
      <br></br>
      <br></br>
      <li>ReactJS Development Services</li>
      <li>React JS UI/UX Development</li>
      <li>ReactJS Application Development</li>
      <li>Frontend Development using ReactJS</li>
      <li>Web Development Using ReactJS</li>
      <li>React JS Plugin Development   </li></p>
    </div>
 
 
  </div>
</section>
<section className="service_promo_area">
  <div className="shape_top">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="shape shape_one"
    >
      <defs>
        <linearGradient>
          <stop offset="0%" stopColor="rgb(76,1,124)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(103,84,226)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path d="M121.891,264.576 L818.042,11.198 C914.160,-23.786 1020.439,25.773 1055.424,121.890 L1308.802,818.041 C1343.786,914.159 1294.227,1020.439 1198.109,1055.422 L501.958,1308.801 C405.840,1343.785 299.560,1294.226 264.576,1198.108 L11.198,501.957 C-23.786,405.839 25.773,299.560 121.891,264.576 Z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="shape shape_two"
    >
      <defs>
        <linearGradient id="PSgrad_0">
          <stop offset="0%" stopColor="rgb(76,1,124)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(103,84,226)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        fill="url(#PSgrad_0)"
        d="M121.891,264.575 L818.042,11.198 C914.160,-23.786 1020.439,25.772 1055.424,121.890 L1308.802,818.040 C1343.786,914.159 1294.227,1020.439 1198.109,1055.423 L501.958,1308.801 C405.840,1343.785 299.560,1294.226 264.576,1198.107 L11.198,501.957 C-23.786,405.839 25.773,299.560 121.891,264.575 Z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="shape shape_three"
    >
      <defs>
        <linearGradient id="PSgrad_1">
          <stop offset="0%" stopColor="rgb(76,1,124)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(103,84,226)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        fill="url(#PSgrad_1)"
        d="M1198.109,264.576 L501.958,11.198 C405.840,-23.787 299.560,25.772 264.576,121.891 L11.198,818.041 C-23.786,914.159 25.773,1020.439 121.891,1055.422 L818.042,1308.801 C914.160,1343.785 1020.439,1294.226 1055.424,1198.108 L1308.802,501.957 C1343.786,405.839 1294.227,299.560 1198.109,264.576 Z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="shape shape_four"
    >
      <defs>
        <linearGradient id="PSgrad_2">
          <stop offset="0%" stopColor="rgb(76,1,124)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="rgb(103,84,226)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        fill="url(#PSgrad_2)"
        d="M1198.109,264.575 L501.958,11.198 C405.840,-23.787 299.560,25.772 264.576,121.890 L11.198,818.040 C-23.786,914.158 25.773,1020.439 121.891,1055.423 L818.042,1308.801 C914.160,1343.785 1020.440,1294.225 1055.424,1198.107 L1308.802,501.957 C1343.786,405.839 1294.227,299.560 1198.109,264.575 Z"
      />
    </svg>
  </div>
  <div className="s_service_section">
    <div className="container custom_container">
      <h2
        className="f_p f_size_30 l_height50 f_600 t_color text-center wow fadeInUp"
        data-wow-delay="0.3s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
     Our Offerings
         
      </h2><br /> <p className="w_color text-center f_p f_size_18">Our ReactJS development experts work with you all the way to deliver high performance ReactJS apps, whether it's a simple application or a complex project. Experts from winhub solutions  provide multifold ReactJS development services that fulfill every necessity and explore every aspect of React. JS.</p>
      <div className="row s_service_info mt_70">
        <div className="col-lg-3 col-sm-6">
          <div
            className="s_service_item wow fadeInLeft"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInLeft"
            }}
          >
            <div className="solid_overlay" />
            <div className="icon icon_1">
              <i className="ti-user" />
            </div>
            <h5 className="f_p f_size_20 f_600 t_color">
ReactJS UI/UX Development</h5>
            <p className="l_height28">
            We are designing elegant and collaborative UI templates for your Web interfaces and applications.
            </p>
            <a href="#" className="learn_btn_two">
              Learn More <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="s_service_item wow fadeInLeft"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInLeft"
            }}
          >
            <div className="solid_overlay" />
            <div className="icon icon_2">
              <i className="ti-headphone-alt" />
            </div>
            <h5 className="f_p f_size_20 f_600 t_color">ReactJS Web App Development</h5>
            <p className="l_height28">
            Winhub Solutions has significant experience with the development of highly scalable mobile apps using ReactJS. Web apps that we build are SEO-friendly, responsive and high-performance for you.
            </p>
            <a href="#" className="learn_btn_two">
              Learn More <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="s_service_item wow fadeInLeft"
            data-wow-delay="0.7s"
            style={{
              visibility: "visible",
              animationDelay: "0.7s",
              animationName: "fadeInLeft"
            }}
          >
            <div className="solid_overlay" />
            <div className="icon icon_3">
              <i className="ti-paint-bucket" />
            </div>
            <h5 className="f_p f_size_20 f_600 t_color">ReactJS Custom Development</h5>
            <p className="l_height28">
            Need a personalized ReactJS app that fits your unique needs? We have the strongest custom programming services in ReactJS.
            </p>
            <a href="#" className="learn_btn_two">
              Learn More <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="s_service_item wow fadeInLeft"
            data-wow-delay="0.8s"
            style={{
              visibility: "visible",
              animationDelay: "0.8s",
              animationName: "fadeInLeft"
            }}
          >
            <div className="solid_overlay" />
            <div className="icon icon_4">
              <i className="ti-zip" />
            </div>
            <h5 className="f_p f_size_20 f_600 t_color">ReactJS Plugins</h5>
            <p className="l_height28">
            Get custom plugins and extensions for your website and mobile applications from ReactJS, and open up additional revenue opportunities.
            </p>
            <a href="#" className="learn_btn_two">
              Learn More <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="s_features_section">
    <div className="container custom_container">
      <div className="row s_features_item">
        <div className="col-lg-6">
          <div
            className="s_features_img ml_50 wow fadeInLeft"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInLeft"
            }}
          >
            <img src={whyus} alt=""
             width={900}
             height={600}/>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="s_features_content pl_120">
            <div
              className="icon_square wow fadeInRight"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInRight"
              }}
            >
              <i className="ti-loop" />
            </div>
            <h2
              className="f_p f_size_30 f_700 t_color l_height45 wow fadeInRight"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInRight"
              }}
            >
              Why Choose Winhubsolutions
            </h2>
            <p
              className="f_size_18 l_height30 f_400 wow fadeInRight"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInRight"
              }}
            >
            </p>
            <div className="col">
            <h3>Responsive UI</h3>
            <p>Our websites or web applications on ReactJS have a responsive UI which suits perfectly with multiple devices, screen sizes, operating systems and browsers</p>
            </div>
            <br></br>
            <div className="col">
            <h3>Seamless Integration</h3>
        
            <p>We assist clients and help them to integrate their existing applications or systems with ReactJS technology to leverage its advantages.</p>
            <br></br>
            </div>
            <div className="col">
            <h3>Feature-rich Websites</h3>
            <p>We exploit ReactJS 'best strengths to build creative, beautiful, and high-performance smartphone and web applications.</p>

            </div>
            <br></br>
            <div className="col">

            <h3>Easy Migration</h3>
            Employ ReactJS developers to ensure trouble-free migration to ReactJS from some other framework to satisfy business-specific requirements.
            </div>
            <a
              href="#"
              className="learn_btn wow fadeInRight"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInRight"
              }}
            >
              Get Started Now! <i className="ti-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
  <div className="container tab-content faq_content">

  <div id="accordion2">
  <h3 class="f_p f_size_22 f_500 t_color3 mb_20 mt_100">Frequently Asked Questions</h3>
                                    <div class="card">
                                        <div class="card-header" id="headingsix">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                    How do I repair an item?<i class="ti-plus"></i><i class="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordion2">
                                            <div class="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingseven">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                                    Where can I find instructions on how to use my watch?<i class="ti-plus"></i><i class="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseseven" class="collapse" aria-labelledby="headingseven" data-parent="#accordion2">
                                            <div class="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingeight">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                                    Is there a warranty on my item?<i class="ti-plus"></i><i class="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseeight" class="collapse" aria-labelledby="headingeight" data-parent="#accordion2">
                                            <div class="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingnine">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                                    Is there a warranty on my item?<i class="ti-plus"></i><i class="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsenine" class="collapse" aria-labelledby="headingnine" data-parent="#accordion2">
                                            <div class="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
  </div>
</section>
  </Layout>
)

export default Reactjs