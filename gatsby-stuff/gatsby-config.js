/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`],
  siteMetadata: {
    title: "Gatsby Stuff",
    description: "random description",
    author: "@randomperson",
    data: ["item1", "item2"],
    person: { name: "bob", age: 21 },
  },
}
