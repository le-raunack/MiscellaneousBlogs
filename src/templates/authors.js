import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/Author.tsx"
import { graphql } from "gatsby"
import _ from "lodash"

const AuthorsPage = ({ data, pageContext }) => {
  let { authorNames } = pageContext

  let authorImgs = []
  {
    data.allMarkdownRemark.edges.map(({ node }) =>
      authorImgs.push(node.frontmatter.image[1].childImageSharp.fluid.src)
    )
  }
  authorImgs = _.uniq(authorImgs)

  let authorProfile = []
  for (let i = 0; i < authorNames.length; i++) {
    authorProfile = [
      ...authorProfile,
      { name: authorNames[i], image: authorImgs[i] },
    ]
  }

  return (
    <Layout>
      <SEO title={"All Authors"} />
      <section className="authors-container">
        {authorProfile.map(author => (
          <Author key={author.name} name={author.name} imgSrc={author.image} />
        ))}
      </section>
    </Layout>
  )
}

export const authorsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default AuthorsPage
