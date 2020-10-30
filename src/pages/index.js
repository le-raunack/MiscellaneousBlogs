import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <StaticQuery
        query={indexQuery}
        render={data => {
          const lastestPost = data.allMarkdownRemark.edges[0].node
          return (
            <>
              <Posts
                key={lastestPost.id}
                title={lastestPost.frontmatter.title}
                author={lastestPost.frontmatter.author}
                date={lastestPost.frontmatter.date}
                slug={lastestPost.fields.slug}
                tags={lastestPost.frontmatter.tags}
                fluid={lastestPost.frontmatter.image.childImageSharp.fluid}
                body={lastestPost.excerpt}
                secName={`latest-post`}
              />
              <section className="posts-container">
                {data.allMarkdownRemark.edges.slice(1).map(({ node }) => (
                  <Posts
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    slug={node.fields.slug}
                    tags={node.frontmatter.tags}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                ))}
              </section>
            </>
          )
        }}
      />
    </section>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
