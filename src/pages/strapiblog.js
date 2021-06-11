import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"


const Strapiblog = () => {
   const data2 = useStaticQuery (graphql`
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
   console.log(data2)
    return (
        
        <Layout>
            <div>
                <h1>Strapi Blog</h1>
                <p>dynamic pages being built using a Javascript template and information retrieved from Strapi CMS </p>
            </div>
            <ol className={blogStyles.posts}>
                {data2.allStrapiArticles.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <p>{edge.node.id}</p>
                            <h2><Link to={edge.node.title}>{edge.node.title}</Link></h2>
                            
                            
                        </li>    
                    )
                }

                )}
                
            </ol>  
              
        </Layout>
    )
}


export default Strapiblog