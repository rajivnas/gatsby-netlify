import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Loyout"

export default function Home({data}) {

  const blogs = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="container">
        <h1>Netlify CMS</h1>

        <div className="blog_wrapper">
          {blogs.map((blog, i) =>{
            return(
              <Link to={`/blog/${blog.node.frontmatter.slug}`}>
                 <div className="blog_list" key={i}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <small>{blog.node.frontmatter.date}</small>
                 </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
 query Home {
   allMarkdownRemark {
     edges {
       node {
         frontmatter {
          title
          slug
          date(formatString: "DD,MMM YYYY")
        }
      }
    }
  }
 }
`