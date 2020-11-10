import React from "react"
import Layout from "../components/layout"

const Troubleshooting: React.FC = () => {
  const marginStyle: object = {
    margin: "32px 0 0",
  }
  return (
    <Layout>
      <p style={{ padding: "10px 0" }}>
        Welcome to the Troubleshooting page!{" "}
        <strong>Miscellaneous Blogs</strong> is still a website in development
        where several things maybe added and removed to provide not only the
        authors but also the readers a better experience! This page shall be
        reserved for addressing any concerns regarding bugs or any sort of
        navigation within the webiste.
      </p>
      <hr />
      <h2 style={marginStyle}>Blog covers not loading</h2>
      <p>
        This is a common bug across all the pages. This error is not usually a
        production mistake but rather how GatsbyJs, the framework used to build
        this site handles images. A quick solution to this is clearing your
        cache and reloading the site (press CTRL + F5 on PC).
      </p>
    </Layout>
  )
}

export default Troubleshooting
