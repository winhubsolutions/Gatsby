import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"


import { blogURI } from "../../globals"

const QUERY = graphql`
  {
    winhub {
      posts(first: 10) {
        nodes {
          id
          title
          link
          uri
          slug
          featuredImage {
            sourceUrl(size: SAASLAND_70X70)
            
          }
        }
      }
    }
  }
`

const RecentPostsWidget = () => (
  <StaticQuery
    query={QUERY}
    render={data => {
      return (
        <div>
     
     
         
            {data.winhub.posts.nodes.map(post => {
              return (
              <div className="media post_item">
                <img src={post.featuredImage.sourceUrl} alt="the best website development company" />
                <div className="media-body">
                <Link to={`${blogURI}/${post.uri}/`}>{post.title}</Link>
                 
                </div>
              </div>
      
              )
            })}
          
        </div>
      )
    }}
  />
)

export default RecentPostsWidget