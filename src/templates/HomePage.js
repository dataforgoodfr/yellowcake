import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Team from '../components/Team'
import Partners from "../components/Partners"

import './HomePage.css'

import teamData from "./teamData.json"
import partnersData from "./partnersData.json"

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

const vision = `
# Notre vision
Les technologies numériques sont incroyablement puissantes et redéfinissent le fonctionnement de notre société. Mais tous les domaines ne se transforment pas à la même vitesse. Très souvent, les acteurs qui œuvrent pour l’intérêt général (citoyens, associations, institutions publiques et entreprises à fort impact social) sont en retard par rapport aux startups et aux géants de la tech. Data for Good existe pour rétablir l’équilibre.
`;

const mission = `# Notre mission
Chaque jour, de nouveaux défis sont à relever en matière de **santé, d’environnement, d’inclusion sociale, d’éducation ou de citoyenneté**. Et chaque jour, de nouvelles idées germent et de plus en plus de citoyens veulent s’engager.
La communauté Data for Good rassemble celles et ceux qui veulent façonner des projets concrets et sur mesure en réponse à ces défis. Elle offre un cadre vivant et bienveillant où ces projets éclosent, mûrissent et se déploient.
`;
const valeurs = `# Nos valeurs
- **Des optimistes pragmatiques** – qui s’engagent à résoudre de vrais problèmes à travers une méthode d’accompagnement ascendante et itérative.
- **Des artisans de l’open source** – qui veulent que les progrès des uns puissent être réutilisés pour faire avancer les autres. Tout contenu produit au sein des projets (code, visuels, documentation, etc.) est publié sous une licence libre.
- **Des hackers indépendants** – qui ont choisi d’être 100% bénévoles pour conserver toute liberté dans leur prise de décisions.
- **Un collectif de bâtisseurs** – qui ont conscience que la technologie n’est pas la réponse à tout, mais qui veulent construire brique par brique le monde de demain.
`;


// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
    <section className="section">
      <div className="container">
        <Content source={"# 💪 La philosophie Data For Good"}/>
        <div className="mission-container">
          <div className="mission-block"><Content source={vision}/></div>
          <div className="mission-block"><Content source={mission}/></div>
          <div className="mission-block"><Content source={valeurs}/></div>
        </div>
      </div>
    </section>
    <section className="section light-coral-background">
      <div className="container">
        <h2>L'équipe Data For Good</h2>
        <Team data={teamData}/>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h2>Nos partenaires</h2>
        <Partners data={partnersData}/>
      </div>
    </section>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
