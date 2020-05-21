import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/pagination"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import banner from "../../img/new/blog/blog_banner.png"
import RecentPostsWidget from "../../components/RecentPostsWidget"
import CategoriesWidget from "../../components/CategoriesWidget"

const Blog = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Blog posts"
        keywords={[`blog`]}
      />
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
        
       Blog Post
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
      
        
      {nodes && nodes.map(post => <PostEntry key={post.postId} post={post}/>)}
        <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={itemsPerPage}
      />
        
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

export default Blog