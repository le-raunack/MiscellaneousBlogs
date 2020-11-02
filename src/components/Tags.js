import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

function Tags({ tagsList }) {
  return (
    <article>
      {tagsList.map(tag => (
        <Link key={tag} to={`/tags/${slugify(tag)}`}>
          <button className="tag-btn">{tag}</button>
        </Link>
      ))}
    </article>
  )
}

Tags.propTypes = {
  tagsList: PropTypes.array.isRequired,
}

export default Tags
