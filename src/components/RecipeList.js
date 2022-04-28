import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"


const RecipeList = ( {recipes=[] } ) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe)=> {
        const {id,title,image,cookTime,prepTime}= recipe;
        const imgPath= getImage(image)
        const slug= slugify(title, {lower:true})   // using slugify
        return <Link key={id} to={`/${slug}`} className="recipe">
          <GatsbyImage image={imgPath} className="recipe-img"
          alt= {title}/>
          <h5>{title}</h5>
          <p>Prep: {prepTime}min | Cook: {cookTime}min</p>
        </Link>
      })}
      
    </div>
  )
}

export default RecipeList