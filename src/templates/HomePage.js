import React from 'react'
import { graphql } from 'gatsby'



import Footer from "./Footer.js";

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
// import Team from '../components/Team'
// import Partners from "../components/Partners"

import './HomePage.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

// import teamData from "./teamData.json"
// import partnersData from "./partnersData.json"

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



// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <Landing/>
    {/* <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
    <section className="section container">
      <div className="grid grid-cols-2">
        <div className="content-center text-center">
          <img alt="logo" className="h-80 mx-auto" src="./images/logo-dfg-new.png"/>
          <p className="mt-4 text-6xl font-semibold">Data For Good</p>  
        </div>
        <div>
          <h1>Data For Good</h1>
        </div>

      </div>
    </section>
    <section className="section container">
      <div className="grid grid-cols-3">
        <div className="block-mission"><Content source={vision}/></div>
        <div className="block-mission"><Content source={mission}/></div>
        <div className="block-mission"><Content source={valeurs}/></div>
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
    </section> */}
  </Layout>
)


var teamsData = [
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
  {"img":"./images/team/théo.jfif","name":"Théo Alves Da Costa","role":"Data Scientist"},
]


function Team(props){

  return props.data.map(el => (
    <div style={{ minWidth: "200px" }}>
      <img
        alt="..."
        src={el.img}
        className="shadow-lg rounded-full max-w-full mx-auto mb-5"
        style={{ maxWidth: "120px" }}
        />
      <h5 className="text-2xl font-bold">
        {el.name}
      </h5>
      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold mb-5">
        {el.role}
      </p>
    </div>
  ))

}


function Landing() {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:"url('./images/headerdfg.jpg')"
                // backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">

                    <img alt="logo" className="h-40 mx-auto" src="./images/logo-dfg-new.png"/>
                    <h1 className="text-white font-semibold text-5xl">
                      Data For Good
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Data For Good est une communauté de 2500+ bénévoles utilisant leurs compétences tech pour aider des associations et ONGs sur des projets à impact sociaux et environnementaux
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      {/* <i className="fas fa-award"></i> */}
                    </div>
                    <h6 className="text-xl font-semibold">Notre vision</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    Les technologies numériques redéfinissent le fonctionnement de notre société. Mais tous les domaines ne se transforment pas à la même vitesse. Très souvent, les acteurs qui œuvrent pour l’intérêt général (citoyens, associations, institutions publiques et entreprises à fort impact social) sont en retard par rapport aux startups et aux géants de la tech. Data for Good existe pour rétablir l’équilibre.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      {/* <i className="fas fa-retweet"></i> */}
                    </div>
                    <h6 className="text-xl font-semibold">
                      Notre mission
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    La communauté Data for Good rassemble celles et ceux qui veulent façonner des projets concrets et sur mesure en réponse aux défis de santé, d’environnement, d’inclusion sociale, d’éducation ou de citoyenneté. Elle offre un cadre vivant et bienveillant où ces projets éclosent, mûrissent et se déploient.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      {/* <i className="fas fa-fingerprint"></i> */}
                    </div>
                    <h6 className="text-xl font-semibold">
                      Nos valeurs
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Nous sommes des optimistes pragmatiques, des artisans de l'open source, des hackers indépendants 100% bénévoles : un collectif de batisseurs qui ont conscience que la technologie n’est pas la réponse à tout, mais qui veulent construire brique par brique le monde de demain.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Les saisons d'accélération Data For Good
                </h3>
                <p className="text-lg leading-relaxed mt-4 mb-8 text-gray-700">
                  Depuis 2014, nous accélérons des projets solidaires, éthiques et responsables durant des saisons d'accélération durant 3 mois.
                </p>
                <p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8 mb-8"
                >
                  📣 Proposez un projet à la communauté!
                </a>
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-8 text-gray-700">
                  2500+ bénévoles Data Scientists, Data Analysts, Data Engineers, UX designers, développeurs web sont engagés dans la communauté
                </p>
                <p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  👉 Rejoignez la communauté Data For Good!
                </a>
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="./images/events.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Demo Day Data For Good
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Participez à nos saisons d'accélération de projets qui ont lieu 2 fois par an
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  L'équipe Data For Good
                </h2>
                {/* <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p> */}
              </div>
            </div>
            <div className="px-6 flex flex-wrap justify-center text-center gap-4 mx-auto content-center">
              <Team data={teamsData}/>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Découvrez nos thématiques
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Nous souhaitons faciliter les rencontres et l'innovation collaborative sur des thématiques d'intérêt général. Contactez-nous si vous êtes intéressés pour en savoir plus.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Numérique responsable
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Environnement
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Santé
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      </>
  );
}



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
