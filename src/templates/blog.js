import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Loyout"

export default function Blog({data}) {

    const html = data.markdownRemark.html

    return (
        <Layout>
            <div className="container">
              <div className="blog_preview">
                 <div dangerouslySetInnerHTML={{__html: html}}>
                 </div>
              </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`