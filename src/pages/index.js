import { graphql, StaticQuery } from "gatsby"
import React from "react"
import LatestPost from "../components/LatestPost"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="main-container">
      <StaticQuery
        query={indexQuery}
        render={data => {
          return (<>
            <LatestPost node={data.allMarkdownRemark.edges[0].node}/>
            <section class="posts-container">
              {data.allMarkdownRemark.edges.slice(1,).map(({ node }) => (
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
            </section></>
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
