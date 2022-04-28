import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({title,description}) => {
  const data= useStaticQuery(query)
  const obj= data.site.siteMetadata
  const metaDescr= description || obj.description
  return (
    <Helmet 
    htmlAttributes={{lang:"en"}}
    title= {`${title} | ${obj.title}`}
    meta={[{name:`description`,content: metaDescr}]}


    ></Helmet>
  )
}

export default SEO