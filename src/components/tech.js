import React from "react"
import { render } from "react-dom"

import reactlogo from "../img/Tech/react-brands.svg"
import nodelogo from "../img/Tech/node-js-brands.svg"
import php from "../img/Tech/php.svg"
import Html5 from "../img/Tech/html5-brands.svg"
import Drupal from "../img/Tech/drupal-brands.svg"
import Wordpress from "../img/Tech/wordpress-brands.svg"
import Mysql from "../img/Tech/my-sql.svg"
import magentobrands from "../img/Tech/magento-brands.svg"
import mssql from "../img/Tech/MSSQL.svg"

import Django from "../img/Tech/Django.svg"

function Technology(){


    return(


<section className="software_promo_area sec_pad">
  <div className="container">
    <div
      className="sec_title text-center wow fadeInUp"
      data-wow-delay="0.3s"
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "fadeInUp"
      }}
    >
      <h2 className="f_p f_size_30 l_height50 f_600 t_color">
      Web Technologies We Work With
      </h2>
      <p className="f_400 f_size_18 l_height34">
        Why I say old chap that is spiffing lavatory chip shop gosh off his nut,
        smashing boot
        <br /> are you taking the piss posh loo brilliant matie boy.!
      </p>
    </div>
    <div className="round_shape mt_30">
      <div className="symbols-pulse active">
        <div className="pulse-1" />
        <div className="pulse-2" />
        <div className="pulse-3" />
        <div className="pulse-4" />
        <div className="pulse-5" />
        <div className="pulse-x" />
      </div>
  
          <div class="r_shape r_shape_one"></div>
          <div class="r_shape r_shape_two"></div>
          <div class="r_shape r_shape_three"></div>
          <div class="r_shape r_shape_four"></div>
          

      <div className="r_shape r_shape_five">
        <span className="text">
          <a href="#">
            <img src={reactlogo}
            alt
            width={100}
            height={100} />
          </a>
     
          {/*                        <span class="round"></span>*/}
        </span>
      </div>
      <div className="s_promo_info">
        <div className="promo_item item_one scroll_animation">
          <div className="text">
            <img src={nodelogo} alt
            width={50}
            height={50} />
          </div>
        </div>
        <div className="promo_item item_two scroll_animation">
          <div className="text">
          <img src={php} alt
            width={50}
            height={50} />
          </div>
        </div>
        <div className="promo_item item_three scroll_animation">
          <div className="text">
            <img src={Drupal}
             alt
             width={50}
             height={50} />
          </div>
        </div>
        <div className="promo_item item_four scroll_animation">
          <div className="text">
            <img src={Html5} alt
            width={50}
            height={50} />
          </div>
        </div>
        <div className="promo_item item_five scroll_animation">
          <div className="text">
            <img src={Wordpress} alt
            width={50}
            height={50} />
          </div>
        </div>
        <div className="promo_item item_six scroll_animation">
          <div className="text">
            <img src={Mysql} alt
            width={80}
            height={80} />
          </div>
        </div>
        <div className="promo_item item_seven scroll_animation">
          <div className="text">
            <img src={magentobrands} alt
            width={50}
            height={50} />
          </div>
        </div>
        <div className="promo_item item_eight scroll_animation">
          <div className="text">
            <img src={mssql} alt 
            width={50}
            height={50} />
          </div>
        </div>
        <div className="promo_item item_nine scroll_animation">
          <div className="text">
            <img src={Django} alt
            width={50}
            height={50} />
          </div>
          
        </div>
      </div>
    </div>
    
  </div>
</section>


    );
}
export default Technology