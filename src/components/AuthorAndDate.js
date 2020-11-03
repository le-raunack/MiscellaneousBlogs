import React from "react"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

const AuthorAndDate = ({ author, date }) => {
  return (
    <p className="info">
      By <Link to={`/authors/${slugify(author)}`}>{author}</Link>, on {date}.
    </p>
  )
}

export default AuthorAndDate
