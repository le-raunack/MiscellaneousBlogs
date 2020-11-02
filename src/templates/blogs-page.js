import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import SEO from "../components/seo"

function BlogsPage({ data }) {
  const post = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="All Blogs" />
      <section className="all-blogs">
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
      </section>
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

export default BlogsPage
