  
// src/templates/post/data.js

const PostTemplateFragment = `
    fragment PostTemplateFragment on Winhub_Post {
        id
        postId
        title
        content
        link
        date
        featuredImage {
            sourceUrl
            altText
            imageFile {
                childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
        categories {
            nodes {
                name
                slug
                id
            }
        }
        tags {
            nodes {
                slug
                name
                id
            }
        }
        author {
            name
            slug
        }
    }
`

const BlogPreviewFragment = `
    fragment BlogPreviewFragment on Winhub_Post {
        id
        postId
        title
        uri
        date
        slug
        excerpt
        content
        featuredImage {
            sourceUrl
            altText
            imageFile {
                childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
        author {
            name
            slug
        }
    }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.BlogPreviewFragment = BlogPreviewFragment