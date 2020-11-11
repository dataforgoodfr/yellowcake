import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Image from '../components/Image'
import Badge from '../components/Badge'

import { FaExternalLinkAlt,FaGithub,FaLinkedin} from "react-icons/fa";

import './ProjectPage.css'



// Export Template for use in CMS preview
export const ProjectPageTemplate = ({ title, subtitle, featuredImage, body,logo,excerpt,categories,season,tags,github,website,linkedin,team}) => {
  console.log(team);
  console.log(season);
  return (
  <main className="Home">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={""}
    />

    <section className="section" style={{padding:"2rem 0"}}>
      <div className="container">
        <div className="project-container">
            <div className="project-left">
                <Image className="project-img" src={featuredImage}/>
                <div className="project-logo-container">
                    <Image className="project-logo" src={logo}/>
                </div>
                <p className="badges-container">
                {season.map(el => <Badge name={el.name} href="" color="#fa826f"/>)}
                </p>
                <p className="badges-container">
                {tags.map(el => <Badge name={el.name} small color="#c86858"/>)}
                </p>

            </div>
            <div className="project-right">
                <h1>Description du projet</h1>
                <p>
                    {categories.map(el => <Badge name={el.category} color="#fa826f"/>)}
                </p>
                <Content source={excerpt} />
                <Content source={body} />
                <h1>Equipe</h1>
                <ul>
                    {team.map(el => (<li>{el.name} ({el.role})</li>))}
                </ul>
                <h1>Liens importants</h1>
                <ul className="project-important-links">
                    {(github===undefined | github === ""? "" :<li><a href={github} target="_blank" rel="noreferrer"><FaGithub/> Github</a></li>)}
                    {(linkedin===undefined | linkedin === ""? "" :<li><a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin/> Linkedin</a></li>)}
                    {(website===undefined | website === ""? "" :<li><a href={website} target="_blank" rel="noreferrer"><FaExternalLinkAlt/> Website</a></li>)}
                </ul>
            </div>
        </div>
      </div>
    </section>
  </main>
)}


// Export Default HomePage for front-end
const ProjectPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ProjectPageTemplate {...page} {...page.frontmatter} body={page.html} />

  </Layout>
)

export default ProjectPage

export const pageQuery = graphql`
  ## Query for ProjectPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ProjectPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        excerpt
        logo
        categories{
            category
        }
        season{
            name
        }
        tags{
            name
        }
        github
        website
        linkedin
        team{
            name
            role
        }
      }
    }
  }
`
