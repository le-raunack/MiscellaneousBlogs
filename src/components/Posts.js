import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../components/layout.css"
import Tags from "../components/Tags"
import AuthorAndDate from "./AuthorAndDate"

const Posts = ({ title, slug, author, date, fluid, tags }) => {
  return (
    <div className="post">
      <Link to={slug}>
        <Img fluid={fluid} />
      </Link>
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
      <AuthorAndDate author={author} date={date} />
      <Tags tagsList={tags} />
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
