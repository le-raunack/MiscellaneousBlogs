import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/main.css"
import Tags from "../components/Tags"
import AuthorAndDate from "./AuthorAndDate"

const Posts = ({ title, slug, author, date, imgSrc, tags }) => {
  return (
    <Link to={slug}>
      <section className="post">
        <img
          src={imgSrc}
          alt="Blog Cover"
          width="256px"
          height="256px"
          id="blog-img"
        />

        <section className="blog-info">
          <h3>{title}</h3>

          <AuthorAndDate author={author} date={date} />
          <Tags tagsList={tags} />
        </section>
      </section>
    </Link>
  )
}

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
  tags: PropTypes.array,
}

export default Posts
