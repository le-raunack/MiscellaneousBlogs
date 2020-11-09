import React from "react"
import Intro from "../components/Intro.tsx"
import LatestPosts from "../components/LatestPosts.tsx"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <LatestPosts />
  </Layout>
)

export default IndexPage
