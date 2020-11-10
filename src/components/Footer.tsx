import React from "react"
import { Link } from "gatsby"

const Footer: React.FC = () => {
  return (
    <footer>
      <span>MB</span>
      <section>
        <p>©Raunack Tripathi</p>
        <p>
          <Link to="/troubleshooting">Troubleshooting→</Link>
        </p>
      </section>
    </footer>
  )
}

export default Footer
