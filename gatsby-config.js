/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 * 
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title:"Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@hardikarora",
    person: {name:"john", age:18},
    simpleData: ["item1", "item2"],
    complexData: [
      {name:"john", age: 32},
      {name: "susan", age:22 }
    ],

  },
  plugins: [ `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `1a0qfoqbqirv`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.Contentful_API,
    },
  },
  `gatsby-plugin-react-helmet`
],
}
