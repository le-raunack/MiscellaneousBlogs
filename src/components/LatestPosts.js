import React from "react"
import Posts from "../components/Posts"
import { graphql, Link, StaticQuery } from "gatsby"

const LatestPosts = () => (
  <StaticQuery
    query={latestPostQuery}
    render={data => {
      return (
        <>
          <h2>Latest Blogs</h2>
          <section className="posts-container">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Posts
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                slug={node.fields.slug}
                tags={node.frontmatter.tags}
                imgSrc={node.frontmatter.image[0].childImageSharp.fluid.src}
              />
            ))}
            <Link to="/articles">
              <button className="tag">More blogs →</button>
            </Link>
          </section>
        </>
      )
    }}
  />
)

export const latestPostQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
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

export default LatestPosts
