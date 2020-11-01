import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../components/main.css"
import Tags from "../components/Tags"
import AuthorAndDate from "../components/AuthorAndDate"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <section>
        <p id="single-blog-title">{post.title}</p>
        <Img fluid={post.image.childImageSharp.fluid}/>
        <section className="single-blog-container">
          <AuthorAndDate author={post.author} date={post.date} />
          <Tags tagsList={post.tags} />
          <hr />
          <section
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            className="single-blog-matter"
          />
        </section>
      </section>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        tags
        date(formatString: "MMM Do YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

SinglePost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SinglePost
