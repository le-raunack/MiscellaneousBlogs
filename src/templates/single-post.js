import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Img from "gatsby-image"
import '../components/layout.css'

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <div className="post post-focus">
      <Img fluid={post.image.childImageSharp.fluid} />
      <h1>{post.title}</h1>
      <span>By {post.author} on {post.date}</span>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                image{
                    childImageSharp{
                        fluid(maxWidth: 800){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default SinglePost
