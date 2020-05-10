import React, { useState } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from './header'
import Footer from './footer'
import '../css/bootstrap.min.css'
import { ThemeContext } from "./ThemeContext"
import "../vendors/bootstrap-selector/css/bootstrap-select.min.css"
import "../css/style.css"
import "../vendors/animation/animate.css"
import "../vendors/owl-carousel/assets/owl.carousel.min.css"
import "../vendors/elagent/style.css"

import "../css/responsive.css"
import "../vendors/nice-select/nice-select.css"
import "../vendors/scroll/jquery.mCustomScrollbar.min.css"

import "../vendors/magnify-pop/magnific-popup.css"
import styled from "@emotion/styled"
import { css } from '@emotion/core'
import '../components/layout.css'
import SimpleForm from "../components/chatbot"
import chat from "../img/home2/msgchat.png"








const themes = {
  light: {
    foreground: "inherit",
    background: "inherit",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    back:"#2e2edb",
    button:"#f13c31",
    button1:"#00c99c",

  },
}



const ThemedLayout = styled.div`
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;
  & a,h1,h2,h3,h4,h5,h6,span,p,a.learn_btn_two{
    color: ${props => (props.theme.name === "dark" ? "#ffffff" : "inherit")};
    
  }  
 
  
  
  & section,h3,.service_item,.blog_list_item_two {
    background-color: ${props => themes[props.theme.name].background};
    color: ${props => themes[props.theme.name].foreground};
  }
 & .menu > .nav-item > .nav-link,.breadcrumb_content_two .breadcrumb li,.breadcrumb_content_two .breadcrumb li a{
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
 }
& .menu > .nav-item.submenu.mega_menu .mega_menu_inner > .dropdown-menu {

  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => (props.theme.name === "dark" ? "#222222" : "#ffffff")};

}

.menu > .nav-item.submenu.mega_menu .mega_menu_inner{
  background-color: ${props => (props.theme.name === "dark" ? "#222222" : "#ffffff")};

}
.menu > .nav-item.submenu .dropdown-menu{
  background-color: ${props => (props.theme.name === "dark" ? "#222222" : "#ffffff")};

}
 &
.menu {
   
    background-color: ${props => themes[props.theme.name].background};

}
 &
 .f_widget.about-widget .f_list li a,.footer_nine_top .f_widget .f-title{
  color: ${props => themes[props.theme.name].foreground};
 }
 .pos_features_content .h_features_item p{
  color: ${props => (props.theme.name === "dark" ? "#ffffff" : "inherit")};
 }
 &
 .navbar-expand-lg,.blog_content{
 background-color: ${props => (props.theme.name === "dark" ? "#222222" : "#ffffff")};

 }
 .menu > .nav-item.submenu .dropdown-menu .nav-item .nav-link ,.menu > .nav-item.submenu.mega_menu .mega_menu_inner > .dropdown-menu > .nav-item > .nav-link{
 
  
color: ${props => (props.theme.name === "dark" ? "#ffffff" : "inherit")};

  
}
.erp_content_two .erp_item .media-body h5{

  color: ${props => (props.theme.name === "dark" ? "#ffffff" : "inherit")};
}

 .seo_service_item{
  background-color: ${props => themes[props.theme.name].back};
  color: ${props => (props.theme.name === "dark" ? "#ffffff" : "inherit")};
  box-shadow: 0px 3px 10px 0px rgba(38, 59, 94, 0.1);
    padding: 60px 40px 38px;
    margin-bottom: 30px;
    transition: all 0.3s linear;
    cursor: pointer;
 }

 .react-clock__face{
  background-color: ${props => themes[props.theme.name].foreground};
  color: ${props => (props.theme.name === "dark" ? "#ffffff" : "inherit")};
}
 & .seo_btn_one{

  background-color: ${props => themes[props.theme.name].button};


 }
 & .seo_btn_two{

  background-color: ${props => themes[props.theme.name].button1};


 }
 & .icon-block .icon-box svg g{

  fill: ${props => themes[props.theme.name].foreground};
}




 

`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }
  return (
    
<ThemeContext.Consumer>
      {theme => (
        <ThemedLayout theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} theme={theme} />
     
        <main>{children}</main>
        
      <Footer/>

         
         
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
        <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}><img src={chat} alt="" wight={50} height={50}/> </button> 
            : <button className="btn" onClick={() => hideChat()}><img src={chat} alt="" wight={50} height={50}/></button>}
        </div>
      </div>   
    
    </ThemedLayout>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
