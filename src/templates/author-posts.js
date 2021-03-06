import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Posts from "../components/Posts.tsx"

const AuthorPosts = ({ data, pageContext }) => {
  
  const { totalCount } = data.allMarkdownRemark
  const { author } = pageContext
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? `` : `s`
  } authored by ${author}`
  return (
    <Layout>
      <p>{pageHeader}</p>
      <section className="sorted-by-author">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Posts
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            imgSrc={node.frontmatter.image[0].childImageSharp.fluid.src}
          />
        ))}
      </section>
    </Layout>
  )
}

export const authorPostsQuery = graphql`
  query($author: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { in: [$author] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 512, maxHeight: 512) {
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

export default AuthorPosts
