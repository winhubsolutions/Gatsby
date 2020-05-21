import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import FluidImage from "../../components/FluidImage"

const Post = ({ pageContext }) => {
  const {
    post: { title, content ,excerpt,date,author,featuredImage},
  } = pageContext;

  return (
    

      <Layout>
    <SEO
      title={title}
      description={excerpt}
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
        
        {title}
      </h1>
      <ol className="breadcrumb">
        <li>
          <Link href="https://www.winhubsolutions.in/"> Home </Link> >  Written by {author.name} on {date}</li>
      </ol>
    </div>
  </div>
</section>
<div className="container">



<FluidImage className="img-fluid" image={featuredImage} style={{ marginBottom: "15px" }}/>

    
      <div dangerouslySetInnerHTML={{__html: content}} />
</div>
    </Layout>
  )
}

export default Post