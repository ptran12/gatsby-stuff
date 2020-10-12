import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello!
      <div>
        <Link to="/blog/">blog page</Link>
        {/* link name components can only be used internally */}
      </div>
      <a href="https://www.gatsbyjs.org">gatsby docs</a>
    </div>
  )
}
