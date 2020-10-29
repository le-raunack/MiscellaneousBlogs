import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = ({ siteTitle }) => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    padding: "5px 0",
  }
  return (
    <header>
      <div className="nav">
        <h1 style={navStyle} className="home">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            {siteTitle}
          </Link>
        </h1>
        <Link to="/blogs" style={navStyle} className="nav-links">
          Blogs
        </Link>
        <Link to="/about" style={navStyle} className="nav-links">
          About
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
