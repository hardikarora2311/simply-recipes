import React from "react"
import Layout from "../components/layout"
import { StaticImage} from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"



export default function Home() {
  return (
    <Layout>
    <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage 
          src="../assets/images/main.jpeg" 
          className="hero-img" alt="eggs" 
          placeholder="tracedSVG" 
          layout="fullWidth"/>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes/>
      </main>
    </Layout>
  )
}
