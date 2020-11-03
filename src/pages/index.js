import { graphql, StaticQuery, Link } from "gatsby"
import React from "react"
import Intro from "../components/Intro"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <>
            <Intro />
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
              <Link to="/blogs">
                <button className="tag">More blogs →</button>
              </Link>
            </section>
          </>
        )
      }}
    />
  </Layout>
)

const indexQuery = graphql`
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

export default IndexPage
