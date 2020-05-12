import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const gatsby = ({ data }) => (
    <Layout>
      <SEO title="Contact US" />
      <section className="process_area bg_color sec_pad">
<div className="container">
<div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />


</div>
</section>

 </Layout>      )


export default gatsby 
export const query = graphql`
  {
    wordpressPage(title: {eq: "Gatsby Js Development"}) {
        content
        id
        title
        excerpt
        date
      }
    }
    
`