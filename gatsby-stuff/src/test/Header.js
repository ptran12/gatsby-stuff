import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  query MyQuery {
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
`

export const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>name: {data.site.siteMetadata.person.name}</h1>
    </div>
  )
}

export default Header
