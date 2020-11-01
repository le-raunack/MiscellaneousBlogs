import { graphql, StaticQuery, Link } from "gatsby"
import React from "react"
import Intro from "../components/Intro"
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
          return (
            <>
              <Intro />
              <h2>Latest Blogs</h2>
              <section className="posts-container">
                {data.allMarkdownRemark.edges.slice(0,2).map(({ node }) => (
                  <Posts
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    slug={node.fields.slug}
                    tags={node.frontmatter.tags}
                    imgSrc={node.frontmatter.image.childImageSharp.fluid.src}
                  />
                ))}
                <Link to="/blogs"><button style={{
                  background: "orange",
                  padding: "10px",
                  fontWeight: "bold",
                  border: "none",
                  color: "white",
                  cursor: "pointer"
                }}>More blogs →</button></Link>
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
