import React from "react"
import coverSrc from "../images/index-page-cover.png"
import { Link } from "gatsby"

const Intro = () => {
  return (
    <React.Fragment>
      <section className="index-page-cover">
        <p className="intro-heading">
          Blogs for anything I want to write about!
        </p>
        <p className="intro-desc">
          Welcome to Miscellaneous Blogs! Yeah, we're aware it's little over the
          top. The authors have individual opinions and are not accountable for
          each other (yeet). And yes, the images next to this wall of text will
          have something to do with all this.
        </p>
        <img src={coverSrc} id="index-cover" alt="cover" />
      </section>
      <section className="intro-tags">
        <Link to="/tags/civilization">
          <li className="tag">Civilization</li>
        </Link>
        <Link to="/tags/history">
          <li className="tag">History</li>
        </Link>
        <Link to="/tags/games">
          <li className="tag">Games</li>
        </Link>
        <Link to="/tags/code">
          <li className="tag">Code</li>
        </Link>
        <Link to="/tags">
          <button className="tag">More Tags →</button>
        </Link>
      </section>
    </React.Fragment>
  )
}

export default Intro
