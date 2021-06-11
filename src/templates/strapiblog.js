import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as strapiStyle from "../templates/strapiblog.module.css"


export const query = graphql`
    query ($slug:String!) {
        strapiArticles  (title: {eq: $slug} ) {
            body
            title
            id
            published_at(fromNow: true)
        }
    }

`
console.log(query)
const StrapiPage = (props) => {

    return (
        <Layout>
            <h1 className={strapiStyle.title}>{props.data.strapiArticles.title}</h1>
            <div className={strapiStyle.dateContainer}>
                <p className={strapiStyle.date_and_number}># {props.data.strapiArticles.id}</p>
                <p className={strapiStyle.date_and_number}>Article published: {props.data.strapiArticles.published_at}</p>
            </div>
            <div className={strapiStyle.body}dangerouslySetInnerHTML={{__html: props.data.strapiArticles.body}}></div>
        </Layout>
    )
}

export default StrapiPage