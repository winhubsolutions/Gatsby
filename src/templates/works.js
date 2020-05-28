import React, { Component } from "react"
import { graphql, navigate } from "gatsby"
import { Button, Col, Row } from "react-bootstrap"


import PortfolioEntry from "../components/PortfolioEntry"
import Layout from "../components/layout"
import Seo from "../components/seo"

class works extends Component {
  renderPreviousLink = () => {
    const {
      pageContext: { pageNumber },
    } = this.props

    let previousLink = null

    if (!pageNumber) {
      return null
    } else if (1 === pageNumber) {
      previousLink = `/`
    } else if (1 < pageNumber) {
      previousLink = `/page/${pageNumber - 1}`
    }

    return (
      <Button type="primary" onClick={() => navigate(previousLink)}>
        Previous Posts
      </Button>
    )
  }

  renderNextLink = () => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = this.props

    if (hasNextPage) {
      return (
        <Button
          type="primary"
          onClick={() => navigate(`/page/${pageNumber + 1}`)}
        >
          Next Posts
        </Button>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      data,
      location,
      pageContext: { pageNumber },
    } = this.props
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``
    return (
      <Layout>
        <Seo title={`Blog${blogPageNumber}`} />
        <Row type="flex" gutter={24}>
          <Col xs={24} md={16}>
            {data &&
              data.winhub &&
              data.winhub.portfolios.nodes.map(post => (
                <div key={post.id}>
                  <PortfolioEntry post={post} />
                </div>
              ))}
          </Col>
          <Col xs={24} md={8}>
         
         
          </Col>
        </Row>
        <Row
          type="flex"
          justify="space-between"
          style={{
            background: `#001529`,
            margin: `50px -50px -50px -50px`,
            padding: `25px`,
          }}
        >
          <Col xs={12}>
            <Row type="flex" justify="start">
              {this.renderPreviousLink()}
            </Row>
          </Col>
          <Col xs={12}>
            <Row type="flex" justify="end">
              {this.renderNextLink()}
            </Row>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default works

export const query = graphql`
  query GET_PORTFOLIO($ids: [ID]) {
    winhub {
      portfolios(where: { in: $ids }) {
        nodes {
          ...PortfolioEntryFragment
        }
      }
    }
  }
`