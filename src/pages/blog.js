import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"


const Blog = () => {
    const data = useStaticQuery (graphql`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    console.log(data)
    return (
        
        <Layout>
            <div>
                <h1>Blog</h1>
                <p>dynamic pages being built using a Javascript template and markdown files located inside the posts folder</p>
            </div>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <h2><Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link></h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>    
                    )
                }

                )}
                
            </ol>      
        </Layout>
    )
}


export default Blog