import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCount } = pageContext
  return (
    <Layout>
      <SEO title="All Tags" />
      <ul style={{display: "flex"}}>
        {tags.map(tag => (
          <Link to={`/tags/${slugify(tag)}`} key={tag}>
            <li
              style={{
                background: "orange",
                margin: "10px",
                padding: "15px",
                listStyle: "none",
                color: "white",
              }}
            >
              {tag}
              {`-`}
              {tagPostCount[tag]}
            </li>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage
