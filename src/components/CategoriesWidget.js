import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const QUERY = graphql`
  {
    winhub {
      categories {
        nodes {
          name
          slug
          link
        }
      }
    }
  }
`

const CategoriesWidget = () => (
  <StaticQuery
    query={QUERY}
    render={data => {
      return (
        <div>
     
     
       
     <ul className="list-unstyled">
            {data.winhub.categories.nodes.map(category => {
              return (
                <li>
                  <Link to={`/blog/${category.slug}`}>{category.name}</Link>
                </li>
              )
            })}
          </ul>


          
        </div>
      )
    }}
  />
)

export default CategoriesWidget