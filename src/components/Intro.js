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
        <p
          className="intro-desc"
        >
          Welcome to my blog! Yeah, it's a little over the top but it's{" "}
          <em>my</em> blog and I love it. I will write on topics I find
          interesting (as one does in blogs). And yes, the images next to this
          wall of text will have something to do with all this.
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
        <Link to="/tags"><button className="tag">More Tags →</button></Link>
      </section>
    </React.Fragment>
  )
}

export default Intro
