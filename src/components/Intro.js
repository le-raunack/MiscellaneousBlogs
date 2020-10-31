import React from "react"
import coverSrc from "../images/index-page-cover.png"
import { Link } from "gatsby"

const Intro = () => {
  return (
    <React.Fragment>
      <section className="index-page-cover">
        <p style={{ fontSize: "48px" }}>
          Blogs for anything I want to write about!
        </p>
        <p
          style={{
            gridColumn: "1",
            gridRow: "2",
            fontSize: "24px",
            textAlign: "justify",
          }}
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
          <li>Civilization</li>
        </Link>
        <Link to="/tags/history">
          <li>History</li>
        </Link>
        <Link to="/tags/games">
          <li>Games</li>
        </Link>
        <Link to="/tags/code">
          <li>Code</li>
        </Link>
      </section>
    </React.Fragment>
  )
}

export default Intro
