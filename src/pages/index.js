import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql, useStaticQuery} from "gatsby"

import HomeCarousel from '../components/carousel'



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
    <p>{data.site.siteMetadata.description}</p>
    <HomeCarousel />
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={1200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginTop: `100px` }}
      placeholder="tracedSVG"
    />
   

    
    
  </Layout>
)
  }

export default IndexPage
