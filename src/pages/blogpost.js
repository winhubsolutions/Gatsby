import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import banner from "../img/new/blog/blog_banner.png"
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
 
    <img className="breadcrumb_shap" src={banner} alt />
  <div className="container">
    <div className="breadcrumb_content_two text-center">
      <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
        {" "}
       Blog Post{" "}
      </h1>
      <ol className="breadcrumb">
        <li>
          <Link href="https://www.winhubsolutions.in/"> Home </Link>
        </li>
        <li className="active"> Blog </li>
      </ol>
    </div>
  </div>
</section>
      
  
  
  

{data.allWordpressPost.edges.map(({ node }) => (
          <section >
            <div className="container">
             
                  <div className="row">
               
                    <div key={node.slug} className="col-lg-12">
                    <div className=" blog_list_item mb_50">
                    <img className="img-fluid" src="img/blog-grid/blog_list1.jpg" alt=""/>
                      <div className="blog_content">
                        <div className="post_date">
                        
                            
                            <h2>{node.date}</h2>
                          
                        </div>

                   
                        <div className="blog_content">
                          <Link to={`/post/${node.slug}`}>
                            <h5 className="blog_title">{node.title}</h5>
                          </Link>
                          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                          <div className="post-info-bottom">
                          <Link to={`/post/${node.slug}`} className="learn_btn_two">
                              Read More <i className="arrow_right" />
                            </Link>
                            <a className="post-info-comments" href="#">
                              <i className="icon_comment_alt" aria-hidden="true" />
                              <span>3 Comments</span>
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>
                    

                  
                </div>
              </div>
           
              </div>
          </section>

        ))}



</Layout>
    
    )
  }
}




export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          slug
          excerpt
          content
          date(formatString: "DD/MM")
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                 
                }
              }
            }
          }
        }
      }
    }
  }

`