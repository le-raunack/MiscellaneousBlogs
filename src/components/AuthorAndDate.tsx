import React from "react"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"
import PropTypes from "prop-types"

interface AuthorAndDateProps {
  author: string
  date: string
}

const AuthorAndDate: React.FC<AuthorAndDateProps> = ({
  author,
  date,
}: AuthorAndDateProps) => {
  return (
    <p className="info">
      By{" "}
      <Link to={`/authors/${slugify(author)}`} className="link">
        {author}
      </Link>
      , on {date}.
    </p>
  )
}

AuthorAndDate.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default AuthorAndDate
