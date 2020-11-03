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
        <Link to="/articles" className="nav-links" activeClassName="active-link">
          Articles
        </Link>
        <Link to="/tags" className="nav-links" activeClassName="active-link">
          Tags
        </Link>
        <Link to="/authors" className="nav-links" activeClassName="active-link">
          Authors
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
