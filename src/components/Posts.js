import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Posts = ({ title, path, author, date, body }) => {
  const cardStyle = {
    boxShadow: "1px 1px 2px 1px gray",
    padding: "5px",
    margin: "10px 0"
  }
  return (
    <div className="post" style={cardStyle}>
      <Link to={path}>
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
