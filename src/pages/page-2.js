import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Technology from "../components/tech"


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Technology/>
    <h1>Hi from the second page</h1>
    <p>Welcome to page xdflkjslkfjkzxjfkl</p>
    <Link to="/">Go back to the homepage</Link>
  
  </Layout>
)

export default SecondPage
