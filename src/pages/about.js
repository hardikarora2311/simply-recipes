import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipeList from '../components/RecipeList'
import SEO from '../components/SEO'

const About = ({data}) => {
  const recipes= data.allContentfulRecipe.nodes
  return (
    <Layout>
    <SEO title= "About"/>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
            <Link className="btn" to='/contact'>
              contact
            </Link>
          </article>
          <StaticImage src='../assets/images/about.jpeg' alt='salt pouring' className='about-img' placeholder='tracedSVG'/>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesome sauce!</h5>
          <RecipeList recipes= {recipes}/>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default About