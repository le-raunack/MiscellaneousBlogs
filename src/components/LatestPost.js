import React from "react"
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { Link } from "gatsby"
import AuthorAndDate from "./AuthorAndDate"
import Tag from "./Tags"

const LatestPost = ({ node }) => {
  return (
    <section class="latest-post">
      <Link to={`/${node.fields.slug}`} className="latest-post-head">
        <h2>{node.frontmatter.title}</h2>
        <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
      </Link>
      <AuthorAndDate
          author={node.frontmatter.author}
          date={node.frontmatter.date}
        />
        <Tag tagsList={node.frontmatter.tags} />
        <p>{node.excerpt}</p>
    </section>
  )
}

LatestPost.propType={
  node: PropTypes.object.isRequired
}

export default LatestPost
