import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

interface TagsProps {
  tagsList: string[]
}

const Tags: React.FC<TagsProps> = ({ tagsList }: TagsProps) => (
  <>
    {tagsList.map(tag => (
      <Link key={tag} to={`/tags/${slugify(tag)}`}>
        <button className="tag-btn">{tag}</button>
      </Link>
    ))}
  </>
)

Tags.propTypes = {
  tagsList: PropTypes.array.isRequired,
}

export default Tags
