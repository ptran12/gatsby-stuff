import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <h4>{data.site.siteMetadata.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
