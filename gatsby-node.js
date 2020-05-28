const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)


exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {

  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)




}




exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions
  createResolvers({
    Winhub_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}



const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const PortfoliosTemplate = path.resolve("./src/templates/works.js")

  return graphql(`
    {
 
  winhub {
    portfolios {
      edges {
        node {
          uri
          title
          slug
          id
         
          portfolioId
        }
      }
    }
  }
}
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

  

      const Portfolios = result.data.winhub.portfolios.edges
      Portfolios.forEach(portfolios => {
        createPage({
          path: `/portfolio/${portfolios.node.slug}`,
          component:PortfoliosTemplate,
          context: {
            id: portfolios.node.portfolioId,
          },
        })
     
    })
  })
}