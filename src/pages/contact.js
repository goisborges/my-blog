import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"



const Contact = () => 
    (
        <Layout>
            <Seo title="Contact" />
            <div>
                
                <p>This is my contact page</p>
                <p>Contact me by e-mail or my Linkedin page</p>
            </div>
            <button><a href="mailto:marcosb@avetti.ca" target="_blank" rel="noreferrer">E-mail me</a></button> <br></br>
            <button><a href="http://www.linkedin.com" target="_blank" rel="noreferrer">My LinkedIn page</a></button>
            
        </Layout>
    )


export default Contact