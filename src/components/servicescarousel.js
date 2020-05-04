import React from "react"

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Digital from "../img/home2/Digital.svg"
import UI from "../img/home2/UI.svg"
import Websitedesign from "../img/home2/websitedesign.svg"
import Websitedevelopment from "../img/home2/Web-Develop.svg"
import ECOM from "../img/home2/Ecom.svg" 
import Mobileapp from "../img/home2/MobileApp.svg" 


const MyCarousel = () => (

<section class="prototype_service_area_two">
        <div class="container custom_container">
            <div class="sec_title text-center mb_70">
                <h2 class="f_p f_size_30 l_height50 f_600 t_color3">Our Services</h2>
            </div>

<OwlCarousel className="owl-theme" loop margin={5} autoWidth  autoplay autoHeightClass item={5}>




<div className="" style={{ width: 380, marginRight: 15 }}>
<div className=" service_item text-center">

<h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">
Web Development

</h4>
<p>
Our web developers are developing custom web and mobile application solutions. We're providing a web presence to help you expand your business using the latest web technologies.
</p>
<a class=".read-more-btn" href="/contact">Contact US</a>
<img className="float-right" src={Websitedevelopment} alt />
</div>
</div>
<div className="" style={{ width: 400, marginRight: 15 }}>
<div className=" service_item text-center">

<h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">
Digital Marketing
</h4>
<p>
We have experienced team of search engine optimizers & digital marketing experts who can handle any type of business oriented website and target perfect users inorder to improve your online business.
</p>
<img className="float-right" src={Digital} alt />
</div>
</div>
<div className="float-right" style={{ width: 400, marginRight: 15 }}>
<div className=" service_item text-center">
<h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">
E-Commerce Development

</h4>
<p>
Winhub Solutions, one of Hyderabad’s leading web design & web development companies, has gained considerable experience in the design & development of e-commerce websites with all the latest features in both B2B and B2C models.
</p>
<img className="item" src={ECOM} alt />
</div>
</div>
<div className="" style={{ width: 400, marginRight: 15 }}>
<div className=" service_item text-center">

<h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">
Web Design

</h4>
<p>
Winhub solutions is one of the Best Web Designing Company in Hyderabad with specialized web designers,having experienced and expertise team of web designers with latest web skills who can provide you fully Customized website,
</p>
<img className="item" src={Websitedesign} alt />
</div>
</div>
<div className="" style={{ width: 400, marginRight: 15 }}>
<div className=" service_item text-center">

<h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">
UI/UX Design

</h4>
<p>
We make websites, User Interface and identity. We believe that beauty designing makes the work look more Fame for the business.
</p>
<img className="item" src={UI} alt />
</div>
</div>
<div className="active" style={{ width: 400, marginRight: 15 }}>
<div className=" service_item text-center">

<h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">
MOBILE APP DEVELOPMENT

</h4>
<p>
Having a mobile app for the business has become a must in today’s world. We build hybrid mobile apps that run across Android, iOS, windows and other platforms
</p>
<img className="item" src={Mobileapp} alt />
</div>
</div>

</OwlCarousel>

</div>
</section>
)

export default MyCarousel