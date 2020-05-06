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
                            <a className="post-info-comments" href="#">
                              <i className="icon_comment_alt" aria-hidden="true" />
                              <span>3 Comments</span>
                            </a>
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
            <a className="page-numbers" href="#">
              2
            </a>
          </li>
          <li>
            <a className="next page-numbers" href="#">
              ...
            </a>
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
            <div className="media post_item">
              <img src="img/new/blog/post1.jpg" alt />
              <div className="media-body">
                <a href="#">
                  <h3>Fast App development</h3>
                </a>
                <a href="#" className="entry_post_info">
                  March 14, 2019
                </a>
              </div>
            </div>
            <div className="media post_item">
              <img src="img/new/blog/post2.jpg" alt />
              <div className="media-body">
                <a href="#">
                  <h3>Proin gravi nibh velit</h3>
                </a>
                <a href="#" className="entry_post_info">
                  March 14, 2019
                </a>
              </div>
            </div>
            <div className="media post_item">
              <img src="img/new/blog/post3.jpg" alt />
              <div className="media-body">
                <a href="#">
                  <h3>Massive Integrations</h3>
                </a>
                <a href="#" className="entry_post_info">
                  March 14, 2019
                </a>
              </div>
            </div>
          </div>
          <div className="widget sidebar_widget categorie_widget_two mt_60">
            <h3 className="widget_title_two">Categories</h3>
            <ul className="list-unstyled">
              <li>
                {" "}
                <a href="#">
                  <span>Fashion</span>
                  <em>(54)</em>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <span>Food for thought</span>
                  <em>(83)</em>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <span>Gaming</span>
                  <em>(96)</em>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <span>Music</span>
                  <em>(38)</em>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <span>Uncategorized</span>
                  <em>(44)</em>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <span>SaasLand</span>
                  <em>(44)</em>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <span>Project Management</span>
                  <em>(44)</em>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <span>Wireframing</span>
                  <em>(44)</em>
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="widget sidebar_widget tag_widget_two mt_60">
            <h3 className="widget_title_two">Tags</h3>
            <div className="post-tags">
              <a href="#">SaasLand</a>
              <a href="#">Web Design</a>
              <a href="#">Saas</a>
              <a href="#">Cooling System</a>
              <a href="#">Corporate</a>
              <a href="#">Software</a>
              <a href="#">Landing</a>
              <a href="#">Wheels</a>
            </div>
          </div>
          <div className="widget sidebar_widget instagram_widget mt_60">
            <h3 className="widget_title_two">Instagram</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <img src="img/new/blog/image_01.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/new/blog/image_02.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/new/blog/image_03.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/new/blog/image_04.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/new/blog/image_05.jpg" alt />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/new/blog/image_06.jpg" alt />
                </a>
              </li>
            </ul>
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
  

allWordpressPost {
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
              fluid(maxWidth: 300, maxHeight: 100) {
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