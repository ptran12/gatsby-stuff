import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          data
          description
          person {
            age
            name
          }
          title
        }
      }
    }
  `)
  return (
    <div>
      <h1>{data.site.siteMetadata.person.name}</h1>
    </div>
  )
}

export default ComponentName
