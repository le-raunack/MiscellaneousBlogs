import React from "react"

const AuthorAndDate = ({author, date}) => {
  return (
    <p className="info">
      By {author}, on {date}.
    </p>
  )
}

export default AuthorAndDate
