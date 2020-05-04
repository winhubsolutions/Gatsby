import React from "react"
import { graphql,Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
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
  <img
    className="breadcrumb_shap"
    src=""
    alt="Gym / Fitness Club Management"
  />
  <div className="container">
    <div className="breadcrumb_content_two text-center">
      <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
        {" "}
        {data.wordpressPost.title}{" "}
      </h1>
      <ol className="breadcrumb">
        <li>
          <Link href="https://www.winhubsolutions.in/"> Home </Link>
        </li>
        <li className="active">  Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}</li>
      </ol>
    </div>
  </div>
</section>
<div className="container">

    


    
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
    </div>
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      
    }
  }
`