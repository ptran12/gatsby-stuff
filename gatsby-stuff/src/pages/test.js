import React from "react"
import Header from "../test/Header"
import HeaderStatic from "../test/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const test = ({ data }) => {
  return (
    <Layout>
      <p>Test test page</p>
      <Header />
      <HeaderStatic />
      <h5>{data.site.siteMetadata.author}</h5>
    </Layout>
  )
}
export const data = graphql`
  query MyQuery {
    site {
      siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
export default test
