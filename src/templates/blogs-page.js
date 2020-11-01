import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/Posts"

function BlogsPage({ data }) {
  const post = data.allMarkdownRemark
  console.log(post)
  return (
    <Layout>
      {post.edges.map(({ node }) => (
        <Posts
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          tags={node.frontmatter.tags}
          imgSrc={node.frontmatter.image.childImageSharp.fluid.src}
        />
      ))}
    </Layout>
  )
}

export const blogsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogsPage
