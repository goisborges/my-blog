import React from "react"
import Layout from "../components/layout"

import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'

import * as contactStyle from '../pages/contact.module.css'


const Contact = () => {
    return (
       
            <Layout> 
                <div className="jumbotron jumbotron-fluid card card-image" style={{background: "white", margin: "15px"}}>
                    <div className= "text-black text-center py-5 px-4">
                        <h1 className="display-4">Contact page </h1>
                        <p className="lead">Contact me by e-mail or my Linkedin page </p>
                    </div>
                </div>
                <div className={contactStyle.contactContainer}>
                    <div className={contactStyle.emailContainer}>
                        <button type="button" className="btn btn-outline-primary btn-lg ml-4"><a href="mailto:marcosb@avetti.ca">E-mail me </a></button> 
                        <MdEmail /> 
                    </div>
                    <div className={contactStyle.linkedinContainer}>
                        <br></br>
                        <button type="button" className="btn btn-outline-primary btn-lg mr-3"><a href="http://www.linkedin.com" target="blank">My LinkedIn page</a></button>
                        <AiFillLinkedin />
                    </div>
                </div>
              
            </Layout>
      
   
    )
}


export default Contact