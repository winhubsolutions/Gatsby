import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Divider } from "react-bootstrap"
import config from "../../config"


const PortfolioEntry = ({ portfolio }) => {
  return (
    <Fragment>
      <Row type="flex" justify="space-around" gutter={16}>
        <Col xs={24} md={4}>
      
      
        </Col>
        <Col xs={24} md={20}>
          <h2>
            <Link to={`/portfolio/${portfolio.uri}`}>{portfolio.title}</Link>
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: portfolio.content ? portfolio.content.replace(config.wordPressUrl, ``) : portfolio.content,
            }}
          />
        </Col>
      </Row>
      <Divider />
    </Fragment>
  )
}

export default PortfolioEntry

export const query = graphql`
  fragment PortfolioEntryFragment on Winhub_Portfolio {
    id
    title
    uri
    slug
    date
    content: excerpt
    featuredImage {
        altText
        sourceUrl
      }
      portfolioId
  }
`