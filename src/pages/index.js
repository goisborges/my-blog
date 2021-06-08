import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql, useStaticQuery} from "gatsby"


const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query SiteDescription {
            site {
                siteMetadata {
                    description
                }
            }
        }
    
    `)

  return (
  <Layout>
    <Seo title="Home" />
    <h2>{data.site.siteMetadata.description}</h2>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    
    
    
  </Layout>
)
  }

export default IndexPage
