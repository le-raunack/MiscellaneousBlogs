import React from "react"
import { slugify } from "../util/utilityFunctions"
import { Link } from "gatsby"
import PropTypes from "prop-types"

interface AuthorPageProps {
  name: string
  imgSrc: string
}

const Author: React.FunctionComponent<AuthorPageProps> = ({
  name,
  imgSrc,
}: AuthorPageProps) => {
  let description: string = ""
  if (name === "Raunack") description = "He is cute"
  return (
    <Link to={`/authors/${slugify(name)}`}>
      <section className="author">
        <img src={imgSrc} alt="Blog author" width="256px" height="256px" />
        <h3>{name}</h3>
        <p>{description}</p>
      </section>
    </Link>
  )
}

Author.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default Author
