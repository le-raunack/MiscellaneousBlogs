import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Posts from "../components/Posts"

const TagPost = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? `` : `s`
  } tagged with "${tag}"`
  return (
    <section>
      <Layout>
        <p>{pageHeader}</p>
        <section className="sorted-by-tag">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Posts
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              imgSrc={node.frontmatter.image[0].childImageSharp.fluid.src}
              clName="sorted-by-author"
            />
          ))}
        </section>
      </Layout>
    </section>
  )
}

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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

export default TagPost
