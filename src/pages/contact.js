import React from "react"
import Layout from "../components/layout"

import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillFacebook } from "react-icons/ai"

import * as contactStyle from '../pages/contact.module.css'

import { Button, Paper } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => {
    return (
       
            <Layout> 
                <Paper elevation={3}>
                {/*<div className="jumbotron jumbotron-fluid card card-image" style={{background: "white", margin: "15px"}}> */}
                    <div className= "text-black text-center py-5 px-4">
                        <h1 className="display-4">Contact Me </h1>
                        <p className="lead">Have any questions? Let me know.</p>
                    </div>
                
                </Paper>

                <div className={contactStyle.itemContainer}>
                    <div className="card" style={{width: "20rem", margin:"10px"}}>
                        <button type="button" className="btn btn-outline-primary btn-lg ml-3"><a href="mailto:marcosb@avetti.ca">E-mail me </a></button> 
                        <MdEmail /> 
                    </div>
                    <div className="card" style={{width: "20rem", margin:"10px"}}>  
                        <button type="button" className="btn btn-outline-primary btn-lg mr-3"><a href="http://www.linkedin.com" target="blank">My LinkedIn page</a></button>
                        <AiFillLinkedin />
                    </div>
                    <div className="card" style={{width: "20rem", margin:"10px", marginBottom: "100px"}}>
                        
                        <button type="button" className="btn btn-outline-primary btn-lg mr-3"><a href="http://www.facebook.com" target="blank">My Facebook page</a></button>
                        <AiFillFacebook />
                    </div>
                    <div>
                        <h2>Buttons stylished using material-ui</h2>
                    </div>
                    
                    <div className={contactStyle.materialButton}>
                        <Button variant="contained" color="primary">Email</Button>
                        <EmailIcon />
                        <Button variant="contained" color="primary">LinkedIn</Button>
                        <LinkedInIcon />
                        <Button variant="contained" color="primary">Facebook</Button>
                        <FacebookIcon />
                    </div>
 
    </div> 
              
            </Layout>
      
   
    )
}


export default Contact