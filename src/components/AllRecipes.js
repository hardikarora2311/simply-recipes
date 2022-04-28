import React from 'react'
import TagList from './TagList'
import RecipeList from './RecipeList'
import { useStaticQuery, graphql } from 'gatsby'
const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data= useStaticQuery(query)
  const recipes= data.allContentfulRecipe.nodes
  return (
    <section className='recipes-container'>
      <TagList recipes= {recipes} />
      <RecipeList recipes= {recipes} />
    </section>
    
  )
}

export default AllRecipes
