import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./CSS/main.css"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="nav">
        <p className="home">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            {siteTitle}
          </Link>
        </p>
        <Link to="/blogs" className="nav-links" activeClassName="active-link">
          Blogs
        </Link>
        {/* <Link to="/about" className="nav-links" activeClassName="active-link">
          About
        </Link> */}
        <Link to="/tags" className="nav-links" activeClassName="active-link">
          Tags
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
