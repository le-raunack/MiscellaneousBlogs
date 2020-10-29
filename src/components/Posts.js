import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../components/layout.css"

const Posts = ({ title, slug, author, date, body, fluid }) => {
  return (
    <div className="post">
      <Img fluid={fluid} />
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
      <span>
        By {author}
        {` `}
      </span>
      <span>on {date}</span>
      <p>{body}</p>
    </div>
  )
}

Posts.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

export default Posts
