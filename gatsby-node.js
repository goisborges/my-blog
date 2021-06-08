/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

//check all the markdownremark files
//node.js has an extension to remove the URL and extension and retrieve only the filename
//Create a SLUG - insert in the node - node - fields - slu
const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        console.log('@@@@@@@@@', slug)

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }   
}

//Create Pages API - Gatsby Docs
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

        res.data.allMarkdownRemark.edges.forEach((edge) => {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        });

    //1. get path to template
    //2. get markdown data
    //3. create new pages
}