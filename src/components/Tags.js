import React from 'react'
import {Link} from 'gatsby'
import {slugify} from '../util/utilityFunctions'

function Tags({tagsList}) {
    return (
        <article>
        {tagsList.map(tag => (
          <Link to={`/tags/${slugify(tag)}`}>
            <button className="tag">{tag}</button>
          </Link>
        ))}
      </article>
    )
}

export default Tags
