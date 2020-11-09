import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Posts from "./Posts"

const RandomPosts: React.FunctionComponent = () => (
  <StaticQuery
    query={randomPostsQuery}
    render={data => {
      const totalPostCount: number = data.allMarkdownRemark.totalCount - 2
      console.log(totalPostCount)
      let rngOne: number = Math.floor(Math.random() * totalPostCount)
      let rngTwo: number = 0
      do {
        rngTwo = Math.floor(Math.random() * totalPostCount)
      } while (rngTwo === rngOne)
      console.log(rngOne, rngTwo)
      console.log(data.allMarkdownRemark.edges)
      const post: any = [
        data.allMarkdownRemark.edges[rngOne],
        data.allMarkdownRemark.edges[rngTwo],
      ]
      return (
        <>
          <h2>Also Read</h2>
          <section className="posts-container">
            {post.map(({ node }) => (
              <Posts
                title={node.frontmatter.title}
                slug={node.fields.slug}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                imgSrc={node.frontmatter.image[0].childImageSharp.fluid.src}
                tags={node.frontmatter.tags}
              />
            ))}
          </section>
        </>
      )
    }}
  />
)

export const randomPostsQuery = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            author
            tags
            date(formatString: "MMM Do YYYY")
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

export default RandomPosts
