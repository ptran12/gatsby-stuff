import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
          sed lectus vestibulum mattis ullamcorper velit. Erat pellentesque
          adipiscing commodo elit at. Imperdiet proin fermentum leo vel orci.
          Nunc id cursus metus aliquam eleifend mi in nulla. In massa tempor nec
          feugiat nisl. Phasellus vestibulum lorem sed risus. Fermentum leo vel
          orci porta non pulvinar neque. Nec feugiat nisl pretium fusce id velit
          ut. Amet est placerat in egestas erat. In nisl nisi scelerisque eu.
          Lectus quam id leo in vitae turpis.
        </p>
      </div>
    </Layout>
  )
}

export default blog
