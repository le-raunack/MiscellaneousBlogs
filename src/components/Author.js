import React from "react"
import { slugify } from "../util/utilityFunctions"
import { Link } from "gatsby"

const Author = ({ name, imgSrc }) => {
  let description = ""
  if(name === "Raunack") description="He is cute"
  return (
    <Link to={`/authors/${slugify(name)}`}>
      <section className="author">
        <img src={imgSrc} alt="" width="256px" height="256px" />
        <h3>{name}</h3>
        <p>{description}</p>
      </section>
    </Link>
  )
}

export default Author
