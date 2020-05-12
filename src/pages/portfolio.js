import React, { Component } from "react"
import Img from "gatsby-image"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout" 
import SEO from "../components/seo"

import Loadable from "react-loadable"
const loader=()=>(<div>Loading...</div>)



const  Portfoliocarousel = Loadable({
  loader: () => import("../components/portfoliocarousel"),
  loading: loader,
})

class portfolio extends Component {


    render() {
        const data = this.props.data


    return (
        <Layout>
         <SEO/>

          

  <section  className="casestudy-listing">
  <div  className="container">
    <div  className="cs-filter-bar">
      <div  className="tab-filter">
        <a  routerlink="/brands" href="/brands">
          Popular Brands
        </a>
        <a  routerlink="/case-studies" href="/case-studies">
          Case Studies
        </a>
        <a
          
          className="active"
          routerlink="/our-work"
          href="/our-work"
        >
          Portfolio
        </a>
        <div  className="listing-filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="18px"
            height="17px"
            viewBox="0 0 18 17"
            version="1.1"
            
            className="svg-convert"
            src="../assets/images/listing-filter.svg"
          >
            {/* Generator: Sketch 61.2 (89653) - https://sketch.com */}
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Work---Responsive-3"
                transform="translate(-338.000000, -119.000000)"
                fill="#252B33"
                fillRule="nonzero"
              >
                <g id="Group-3" transform="translate(16.000000, 116.000000)">
                  <g id="filter" transform="translate(319.000000, 0.000000)">
                    <path
                      d="M15,12 C16.8639271,12 18.4300871,13.2748927 18.8740452,15.0002435 L21,15 L21,17 L18.8737865,17.0007613 C18.429479,18.7256022 16.8635652,20 15,20 C13.1364348,20 11.570521,18.7256022 11.1262135,17.0007613 L3,17 L3,15 L11.1259548,15.0002435 C11.5699129,13.2748927 13.1360729,12 15,12 Z M15,14 C13.8954305,14 13,14.8954305 13,16 C13,17.1045695 13.8954305,18 15,18 C16.1045695,18 17,17.1045695 17,16 C17,14.8954305 16.1045695,14 15,14 Z M9,3 C10.8639271,3 12.4300871,4.27489272 12.8740452,6.00024347 L21,6 L21,8 L12.8737865,8.00076134 C12.429479,9.72560224 10.8635652,11 9,11 C7.13643475,11 5.57052105,9.72560224 5.12621352,8.00076134 L3,8 L3,6 L5.12595483,6.00024347 C5.56991294,4.27489272 7.13607289,3 9,3 Z M9,5 C7.8954305,5 7,5.8954305 7,7 C7,8.1045695 7.8954305,9 9,9 C10.1045695,9 11,8.1045695 11,7 C11,5.8954305 10.1045695,5 9,5 Z"
                      id="Combined-Shape"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div  className="category-filter">
        <div  className="filterby-sec">
          <h4 >Filter Case Studies By</h4>
          <div  className="filter-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              version="1.1"
              
              className="svg-convert"
              src="../assets/images/locker-close-icon.svg"
            >
              {/* Generator: Sketch 55.2 (78181) - https://sketchapp.com */}
              <desc>Created with Sketch.</desc>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M7,7 L13,1 L7,7 L1,1 L7,7 Z M7,7 L1,13 L7,7 L13,13 L7,7 Z"
                  id="Combined-Shape"
                  stroke="#81959E"
                  strokeWidth={2}
                />
              </g>
            </svg>
          </div>
        </div>
        <div  className="filter-dropdown-sec">
          <div  className="dropdown">
            <div  className="drop">
              Type
              <span  className="down-caret" />
            </div>
            <div  className="dropdownArrow" />
            <ul  className="dropdown-menu">
             
             
              <li  className="filterclick">
                <span  datafiltertype="new-project">
                  New Project
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="redevelopment">
                  Redevelopment
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="maintenance">
                  Maintenance
                </span>
              </li>
              <input
                
                className="selectedfilter"
                id="selType"
                type="hidden"
                defaultValue
              />
            </ul>
          </div>
          <div  className="dropdown">
            <div  className="drop">
              Technology
              <span  className="down-caret" />
            </div>
            <div  className="dropdownArrow" />
            <ul  className="dropdown-menu two-part-tab">
             
             
              <li  className="filterclick">
                <span  datafiltertype="analysis">
                  Analysis
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="android">
                  Android
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="angularjs">
                  AngularJS
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="back-end">
                  Back End
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="drupal">
                  Drupal
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="front-end">
                  Front End
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="ios">
                  iOS
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="java">
                  Java
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="laravel">
                  Laravel
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="magento">
                  Magento
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype=".net">
                  .NET
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="nodejs">
                  NodeJS
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="other">
                  Other
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="php">
                  PHP
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="qa">
                  QA
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="react-native">
                  React Native
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="reactjs">
                  ReactJS
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="ui---ux">
                  UI - UX
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="wordpress">
                  Wordpress
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="nodejs">
                  NodeJs
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="reactjs">
                  ReactJs
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="reactnative">
                  ReactNative
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="unity-3d">
                  Unity 3D
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="laravel">
                  laravel
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="angular">
                  Angular
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="ui-/-ux">
                  UI / UX
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="core-php">
                  Core PHP
                </span>
              </li>
             
              <li  className="filterclick">
                <span  datafiltertype="mysql">
                  MySQL
                </span>
              </li>
              <input
                
                className="selectedfilter"
                id="selTech"
                type="hidden"
                defaultValue
              />
            </ul>
          </div>
          <div  className="reset-ic">
            <a  href="javascript:void(0);">
              <span  aria-hidden="true" className="fa fa-repeat" />
              <p  className="tooltiptext tooltip-top">
                {" "}
                Reset Filter{" "}
              </p>
            </a>
          </div>
        </div>
        <div  className="mb-filter-close">
          Filter
        </div>
      </div>
    </div>
   
   
    <div  className="cs-listing-sec">
      <h3  className="noresult" style={{ display: "none" }}>
        No Result Found.
      </h3>
      <div  className="row">
       
       


    
      {data.allWordpressWpPortfolios.edges.map(({ node }) => (
 
       
       
        <div
          
          className="col-12 col-sm-6 col-md-6 col-lg-4 cs-mar-top-60 filter-result new-project maintenance android ios unity-3d entertainment"
        >
          <div  className="case-listing-col">
            <div  className="cs-listing-img">
            <Link to={`/portfolios/${node.slug}`}>
                <picture >
                  <source
                    
                    type="image/webp"
                    srcSet={node.acf.featureimage.sizes.saasland_350x360}
                  />
                  <source
                    
                    srcSet={node.acf.featureimage.sizes.saasland_350x360}
                    type="image/jpg"
                  />
                  <img
                    
                    src={node.acf.featureimage.sizes.saasland_350x360}
                    alt="Zombie Aftermath"
                  />
                </picture>
              </Link>
            </div>
            <div  className="cs-project-detail">
              <p >
               
               
              Portfolio {" "}
              </p>
              <Link to={`/portfolios/${node.slug}`}>
              {node.title}
              </Link>
              <div  className="project-bio">
                Action-packed gaming app built for Android &amp; iOS devices.
              </div>
              {data.allWordpressWpPortfolioCategories.edges.map(({ node }) => (
              <div  className="cs-technology">
               
              
              
               
                <span>{node.name}</span>
           
              </div>
              ))}
            </div>
          </div>
        </div>
       ) )}
      </div>
   
    </div>
  </div>
</section>

  
            
        </Layout>

    
)
}
}





export default portfolio

export const pageQuery = graphql`
query {
  allWordpressWpPortfolios {
    edges {
      node {
        title
        slug
        date
        content
        portfolio_categories
        path
        acf {
          featureimage {
            sizes {
              large
              thumbnail
              medium
              saasland_350x360
            }
          }
        }
      }
    }
  }
  allWordpressWpPortfolioCategories {
    edges {
      node {
        path
        name
      }
    }
  }
}
  
`