import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FluidImage from "../../components/FluidImage"


const Page = ({ pageContext }) => {
  const {
    page: { title, content, featuredImage },
  } = pageContext

  return (
    <Layout>
      <SEO title={title}/>

      <FluidImage image={featuredImage} style={{ marginBottom: "15px" }}/>

      <h1> {title} </h1>
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </Layout>
  )
}

export default Page