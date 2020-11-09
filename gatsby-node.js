const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const _ = require("lodash")

// if (process.env.NODE_ENV === 'development') {
//   process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
// }

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const templates = {
    singlePost: path.resolve("src/templates/single-post.js"),
    tagsPage: path.resolve("src/templates/tags-page.js"),
    tagsPosts: path.resolve("src/templates/tag-posts.js"),
    blogsPage: path.resolve("src/templates/blogs-page.js"),
    authorsPage: path.resolve("src/templates/authors.js"),
    authorPosts: path.resolve("src/templates/author-posts.js"),
  }
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePost,
        context: {
          //Passing slug for template to use to get post
          slug: node.fields.slug,
        },
      })
    })

    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags"))
        tags = tags.concat(edge.node.frontmatter.tags)
    })
    let tagPostCount = {}
    tags.forEach(tag => {
      tagPostCount[tag] = (tagPostCount[tag] || 0) + 1
    })
    tags = _.uniq(tags)

    //All tags page
    createPage({
      path: "/tags",
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCount,
      },
    })

    //Sorted by tags page
    tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag)}`,
        component: templates.tagsPosts,
        context: { tag },
      })
    })

    //All blogs page
    posts.forEach(({ node }) => {
      createPage({
        path: "/articles",
        component: templates.blogsPage,
      })
    })

    let authorNames = []
    let authorImg = []

    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.author"))
        authorNames = authorNames.concat(edge.node.frontmatter.author)
    })
    // _.each(posts, edge => {
    //   if (_.get(edge, "node.frontmatter.image"))
    //     authorImg = authorImg.concat(edge.node.frontmatter.image)
    // })

    authorNames = _.uniq(authorNames)
    // authorImg = _.uniq(authorImg)

    //All authors page
    createPage({
      path: `/authors`,
      component: templates.authorsPage,
      context: { authorNames },
    })

    //Sorted by authors page
    authorNames.forEach(author => {
      createPage({
        path: `/authors/${slugify(author)}`,
        component: templates.authorPosts,
        context: { author },
      })
    })
  })
}
