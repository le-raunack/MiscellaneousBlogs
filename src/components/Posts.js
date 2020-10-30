import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../components/main.css"
import Tags from "../components/Tags"
import AuthorAndDate from "./AuthorAndDate"

const Posts = ({ title, slug, author, date, fluid, tags }) => {
  return (
    <div className="post">
      <Link to={slug}>
        <Img fluid={fluid} />
      </Link>
      <Link to={slug}>
        <h3>{title}</h3>
      </Link>
      <AuthorAndDate author={author} date={date} />
      <Tags tagsList={tags} />
    </div>
  )
}

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string,
  path: PropTypes.string.isRequired,
  date: PropTypes.string,
}

export default Posts
