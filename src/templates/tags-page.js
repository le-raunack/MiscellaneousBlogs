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
      <h3>Find blogs on these topics</h3>
      <ul className="tags-page-container">
        {tags.map(tag => (
          <Link to={`/tags/${slugify(tag)}`} key={tag}>
            <li className="tag">
              {tag}
              {`-`}
              {tagPostCount[tag]} {`post${tagPostCount[tag] === 1 ? `` : `s`}`}
            </li>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage
