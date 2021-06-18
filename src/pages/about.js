import React from "react"
import Layout from "../components/layout"

import * as aboutStyle from "../pages/about.module.css"
import Menu from "../components/menu"


const About = () => {
    return (
        <>
            <div className={aboutStyle.Menu}>
                <Menu />
            </div>
            <div className={aboutStyle.container}>
                <section className={aboutStyle.one}>
                     <h1>Computer Programming</h1>
                     <p>Studying at Georgian College in Barrie , Canada and currently on my first co-op term and very excited for all that I am learning and how much I have been improving my skills.</p>
                 </section>
                 <section className={aboutStyle.two}>
                     <h1>Avetti</h1>
                     <p>I am very happy for having the opportunity to work in a real team and know the real work environment.</p> 
                     <p>It's amazing to see how much this team can accomplish even being so far away from each other as the pandemic is still around.</p>
                 </section>
                 <section className={aboutStyle.three}>
                      <h1>Software Developer</h1>
                      <p>Learning software developing has been an amazing journey. I never though I could do it and know I love it.</p>
                      <p>But there is another field of IT that makes me happier...</p>
                  </section>
                  <section className={aboutStyle.four}>
                    <h1>Web Developer</h1>
                    <p>I've been learning web development for about 20 years and I simply love it.</p>
                    <p>Being able to learn use my creativity at the same time is heaven for me.</p>
                    <p>I'll keep working hard to improve my skills constantly and be always more productive and important for the team.</p>
                  </section>
                    
             </div>
              </>
            
      
   
    )
}


export default About