
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import {Link} from  "gatsby"
import sunIcon from "../images/sun-icon.svg"
import moonIcon from "../images/moon-icon.svg"
import Switch from "react-switch"



const Header = ({ siteTitle,theme  }) => (
<header className="header_area" style={{backgroundColor: window.scrollY > 20 ? "white" : "transparent"}}>

  <nav className="navbar navbar-expand-lg menu_one " >
 
   
 <div className="container custom_container p0">
     <Link className="navbar-brand" to="/">
     <img src={logo} width={300} height={90} srcSet="" />
     </Link>
     <button
       className="navbar-toggler collapsed"   
       type="button"
       data-toggle="collapse"
       data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span className="menu_toggle">
         <span className="hamburger">
           <span />
           <span />
           <span />
         </span>
         <span className="hamburger-cross">
           <span />
           <span />
         </span>
       </span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
       <ul className="navbar-nav ml-auto menu">
         <li className="nav-item dropdown submenu mega_menu mega_menu_two active">
          <Link
             className="nav-link dropdown-toggle"
             to="/aboutus"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false"
           >
             Company
           </Link>
    
         </li>
         <li className="nav-item dropdown submenu mega_menu">
          <Link
             className="nav-link dropdown-toggle"
             to="#"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false"
           >
             Services
           </Link>
           <div className="mega_menu_inner">
             <ul className="dropdown-menu">
               <li className="nav-item">
                 <Link className="nav-link"
                  to="services//Web-design">Web Design
                 
                 </Link>
                 <ul className="dropdown-menu">
                 <li className="nav-item">
   <Link 
     className="nav-link" 
     to="/services/wordpress-development-services">
   Wordpress Development Services
     
   </Link>
   </li>
   <li className="nav-item">
   <Link 
     className="nav-link" 
     to="services/Web-development">
     We Development
     
   </Link>
   </li>
   <li className="nav-item">
   <Link 
     className="nav-link" 
     to="/services/ecommerce-development">
     Ecommerce Development
     
   </Link>
   </li>
   
                  
                 </ul>
               </li>
               <li className="nav-item">
                 <Link className="nav-link"  to="services/Web-development">We Development </Link>
                 <ul className="dropdown-menu">
                 <li className="nav-item">
                 <Link 
                  className="nav-link" 
                  to="/services/Web-development/#Enterprise">
                      Enterprise Solutions
     
                  </Link>
                  </li>
                  <li className="nav-item">
                 <Link 
                  className="nav-link" 
                  to="/services/Web-development/#E-Commerce">
                      Ecommerce Development
     
                  </Link>
                  </li>
                  <li className="nav-item">
                 <Link 
                  className="nav-link" 
                  to="/services/Web-development/#Custom-Web-Development">
                      Custom Web Development
     
                  </Link>
                  </li>
                  <li className="nav-item">
                 <Link 
                  className="nav-link" 
                  to="/services/Web-development/#Content-Management-System">
                      Content Management System
     
                  </Link>
                  </li>
                 </ul>
               </li>
               
               <li className="nav-item">
                 <Link className="nav-link" to="services/digital-marketing-services">Digital Marketing Services</Link>
                 <ul className="dropdown-menu">
                  
                  <Link 
               className="nav-link" 
                   to="/services/digital-marketing-services/#SEO">
                  SEO
     
                 </Link>
                   
                   
                 </ul>
               </li>
             </ul>
           </div>
         </li>
         <li className="nav-item dropdown submenu mega_menu">
          <Link
             className="nav-link dropdown-toggle"
             to="/portfolio"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false"
           >
             Portfolio
           </Link>
          
         </li>
         <li className="nav-item dropdown submenu">
          <Link
             className="nav-link dropdown-toggle"
             to="/portfolio"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false"
           >
             Products
           </Link>
           <ul role="menu" className=" dropdown-menu">
   
 <li className="nav-item">
   <Link 
     className="nav-link" 
     to="products/gym-fitness-club-management">
     Gym Fitness Club Management
     
   </Link>
   </li>
       
 <li className="nav-item">
   <Link 
     className="nav-link" 
     to="products/point-of-sale">
     Point Of Sale
     
   </Link>
   </li>
   <li className="nav-item">
     <Link title="Pricing" className="nav-link" to="/products/restaurantpos">
     Restaurant Pos
     </Link>
   </li>
   
   <li className="nav-item">
     <Link title="Team" className="nav-link" to="products/school-management-system">
     School Management System
     </Link>
   </li>
   
 


   
 </ul>
         </li>
         <li className="nav-item dropdown submenu">
          <Link
             className="nav-link dropdown-toggle"
             to="/blogpost"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false"
           >
             Blog
           </Link>
           
         </li>
        
       </ul>
       <Link className="btn_get btn_hover" to="/contact">
         Contact US
       </Link>
       <ul className="navbar-nav ml-auto menu">
       <li className="nav-item">
          
       <Switch
         onChange={() =>
           theme.updateTheme(theme.name === "light" ? "dark" : "light")
         }
         checked={theme.name === "dark"}
         onColor="#222"
         offColor="#333"
         checkedIcon={<img src={moonIcon} alt="moon icon" />}
         uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
         boxShadow="0 0 2px 3px #B38CD9"
         activeBoxShadow="0 0 2px 3px #dfb3e6"
       /> 
           
         </li>
         </ul>
  

     </div>
     
  
   
   
       

     
   
    </div>
  </nav>
</header>

 
  

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
