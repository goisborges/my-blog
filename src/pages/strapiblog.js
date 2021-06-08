import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"


const Strapiblog = () => {
   const data = useStaticQuery (graphql`
    	query queryArticles {
            allStrapiArticles {
                edges {
                    node {
                        title
                        id
                        body
                    }
                }
            }
        }
   `)
   console.log(data)
    return (
        
        <Layout>
            <div>
                <h1>Strapi Blog</h1>
                <p>dynamic pages being built using a Javascript template and information retrieved from Strapi CMS </p>
            </div>
            <ol className={blogStyles.posts}>
                {data.allStrapiArticles.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <p>{edge.node.id}</p>
                            <h2><Link to="">{edge.node.title}</Link></h2>
                            <p>{edge.node.body}</p>
                            
                        </li>    
                    )
                }

                )}
                
            </ol>  
              
        </Layout>
    )
}


export default Strapiblog