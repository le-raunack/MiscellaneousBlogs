import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import "../components/CSS/main.css"
import Tags from "../components/Tags.tsx"
import AuthorAndDate from "../components/AuthorAndDate.tsx"
import LatestPosts from "../components/LatestPosts.tsx"
import RandomPosts from "../components/RandomPosts.tsx"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <section>
        <p id="single-blog-title">{post.title}</p>
        <img src={post.image[0].childImageSharp.fluid.src} alt="Blog Cover" id="single-blog-img"/>
        <section className="single-blog-container">
          <AuthorAndDate author={post.author} date={post.date} />
          <Tags tagsList={post.tags} />
          <section
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            className="single-blog-matter"
          />
        </section>
        <LatestPosts />
        <RandomPosts/>
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
            fluid(maxHeight: 1080) {
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
