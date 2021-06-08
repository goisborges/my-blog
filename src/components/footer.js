import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as footerStyles from "./footer.module.css"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SiteAuthor {
            site {
                siteMetadata {
                    author
                    description
                }
            }
        }
    
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>Created by <Link to='/contact'>{data.site.siteMetadata.author}</Link></p>
            <p>{data.site.siteMetadata.description}</p>
        </footer>

    )
}

export default Footer