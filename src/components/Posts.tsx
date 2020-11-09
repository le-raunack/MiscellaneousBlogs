import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/CSS/main.css"
import Tags from "./Tags"
import AuthorAndDate from "./AuthorAndDate"

interface PostsProps {
  title: string
  slug: string
  author: string
  date?: string
  imgSrc: string
  tags: string[]
  clName?: string
}

const Posts: React.FC<PostsProps> = ({
  title,
  slug,
  author,
  date,
  imgSrc,
  tags,
  clName = "",
}: PostsProps) => {
  return (
    <Link to={`/${slug}`}>
      <section className={`post ${clName}`}>
        <img
          src={imgSrc}
          alt="Blog Cover"
          width="128px"
          height="128px"
          id="blog-img"
        />{" "}
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
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
  tags: PropTypes.array.isRequired,
}

export default Posts
