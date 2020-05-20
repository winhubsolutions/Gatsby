import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import banner from "../img/new/blog/blog_banner.png"
import RecentPostsWidget from "../components/RecentPostsWidget"
import CategoriesWidget from "../components/CategoriesWidget"
import Image from "../components/Image"
class Homepage extends Component {
  render() {
    const data = this.props.data

    
    
    

    return (
      
      <Layout>
      <SEO title="Page two" />
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
 
    <img className="breadcrumb_shap" src={banner} alt="the best website development company" />
  <div className="container">
    <div className="breadcrumb_content_two text-center">
      <h2 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
        {" "}
       Blog Post{" "}
      </h2>
      <ol className="breadcrumb">
        <li>
          <Link to="https://www.winhubsolutions.in/"> Home </Link>
> Blog </li>
      </ol>
    </div>
  </div>
</section>
      
  
  
  
<section className="blog_area_two sec_pad">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
      {data.allWordpressPost.edges.map(({ node }) => (
                    <div className="blog_list_item blog_list_item_two">
                  
    
                      <div className="blog_content">
                        <div className="post_date">
                        
                            
      <h2><span>{node.date}</span></h2>
                          
                        </div>
                   

                        <Img className="img-fluid" fluid={node.acf.featureimage.localFile.childImageSharp.fluid}/>

                        <div className="blog_content">
                          <Link to={`/post/${node.slug}`}>
                            <h5 className="blog_title">{node.title}</h5>
                          </Link>
                          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                          <div className="post-info-bottom">
                          <Link to={`/post/${node.slug}`} className="learn_btn_two">
                              Read More <i className="arrow_right" />
                            </Link>
                            
                          </div>

                        </div>
                      </div>
                    </div>
                       ))}
        
        
        
        <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
          <li>
            <span aria-current="page" className="page-numbers current">
              1
            </span>
          </li>
          <li>
            <Link className="page-numbers" to="#">
              2
            </Link>
          </li>
          <li>
            <Link className="next page-numbers" to="#">
              ...
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="blog-sidebar">
          <div className="widget sidebar_widget search_widget_two">
            <form action="#" className="search-form input-group">
              <input
                type="search"
                className="form-control widget_input"
                placeholder="Search"
              />
              <button type="submit">
                <i className="ti-search" />
              </button>
            </form>
          </div>
          <div className="widget sidebar_widget recent_post_widget_two mt_60">
            <h3 className="widget_title_two">Recent posts</h3>
            <RecentPostsWidget/>
          </div>
          <div className="widget sidebar_widget categorie_widget_two mt_60">
            <h3 className="widget_title_two">Categories</h3>
            <CategoriesWidget/>
          </div>
          <div className="widget sidebar_widget tag_widget_two mt_60">
            <h3 className="widget_title_two">Tags</h3>
            <div className="post-tags">
              <Link to="/services/react-js-development">React JS</Link>
              <Link to="/services/gatsby-js-development">Gatsby </Link>
              <Link to="/services/node-js-development-company">Node Js</Link>
              <Link to="/services/ui-ux-development-service">UI /UX</Link>
              <Link to="/services/Web-development">Web Development</Link>
              <Link to="/services/wordpress-development-services">Wordpress Development</Link>
              <Link to="#">Landing</Link>
              <Link to="#">Wheels</Link>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  </div>
</section>

     
</Layout>
    
    )
  }
}




export default Homepage

export const pageQuery = graphql`
  query {
  

allWordpressPost(limit: 100) {
  edges {
    node {
      title
      slug
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      acf {
        featureimage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
}


`