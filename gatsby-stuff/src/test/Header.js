import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
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
      <h1>Title: {data.site.info.title}</h1>
      <h1>Person: {data.site.info.person.name}</h1>
    </div>
  )
}

export default ComponentName
