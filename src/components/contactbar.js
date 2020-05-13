
import React from "react"

import flower from "../img/new-home/tree-left.png"
import flowerleft from "../img/new-home/tree-right.png"
import {Link} from "gatsby"



function Freeestimate(){


    return(

<div>


<section className="support_subscribe_area sec_pad">
  <img
    className="h_leaf one wow fadeInUp"
    data-wow-delay="0.4s"
    src={flower}
    alt
    style={{
      visibility: "visible",
      animationDelay: "0.4s",
      animationName: "fadeInUp"
    }}
  />
  <img
    className="h_leaf two wow fadeInUp"
    data-wow-delay="0.6s"
    src={flowerleft}
    alt
    style={{
      visibility: "visible",
      animationDelay: "0.6s",
      animationName: "fadeInUp"
    }}
  />
 <div className="container">
  <div className="security_action_inner">
    <div className="banner_top">

      <div className="media-body">
        <h1 className="f_p f_size_30 l_height50 f_600 t_color3">
        Interested in working with Winhub Solutions?
        </h1>
       
        <Link to="/contact" className="btn_get btn_hover">
      Free Quote
    </Link>
      </div>
      
    </div>
   
  </div>
</div>

</section>
</div>


);
}

export default Freeestimate