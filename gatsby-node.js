const webpack= require('webpack')
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
      ],
    })
  }


const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/post.js")
  const PageTemplate = path.resolve("./src/templates/page.js")
  const PortfoliosTemplate = path.resolve("./src/templates/works.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
  

    allWordpressWpPortfolios {
      edges {
        node {
          slug
          wordpress_id
        }
      }
    }
  }
  
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPosts = result.data.allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })

      const Portfolios = result.data.allWordpressWpPortfolios.edges
      Portfolios.forEach(portfolios => {
        createPage({
          path: `/portfolios/${portfolios.node.slug}`,
          component:PortfoliosTemplate,
          context: {
            id: portfolios.node.wordpress_id,
          },
        })
   

       const Pages = result.data.allWordpressPage.edges
       Pages.forEach(page => {
        createPage({
          path: `/Page/${page.node.slug}`,
          component: PageTemplate,
          context: {
            id: page.node.wordpress_id,
          },
        })



       })


      
     })
     
    })
  })
}