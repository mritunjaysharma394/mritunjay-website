import React, { Fragment } from "react"
import { Container, Row, Col } from "react-bootstrap"
//import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"
import "./projects.css"

import project1Picture from "./cake.png"
import project2Picture from "./brown.png"
import project3Picture from "./game.png"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//TODO: Make this into an array with objects and map through them instead down below.

//Project 1

import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import useBlogThemeConfig from "gatsby-theme-blog/src//hooks/configOptions"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"






const project1 = {
  title: "Cool React app",
  date: "2019-03-28",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  sourceURL: "https://github.com",
  hostedURL: "http://www.google.com",
}

//Project 2

const project2 = {
  title: "Project 2 title",
  date: "2019-03-03",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  sourceURL: "https://github.com/",
  hostedURL: "https://www.google.com",
}

//Project 3

const project3 = {
  title: "Project 3 title",
  date: "2019-02-12",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  sourceURL: "https://github.com/",
  hostedURL: "https://www.google.com",
}

export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig
  const { author, social } = useSiteMetadata()
  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div className="App">
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 0,
          })}
        >
          <h1> Featured Projects </h1>
          <hr/>
  
        {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}
  
        <Container style={{ marginTop: "2.5rem" }}>
          {/*/Props: 
        //imageSrcPath: the path to the image used 
        //title: The title of the card/App 
        //date: The date of the card
        //description: Short description of the card 
        //sourceURL: URL to the source code of the project 
        //hostedURL: URL to the hosted version of the app*/}
          <Row>
            <Col>
              <ProjectCard
                imageSrcPath={project1Picture}
                title={project1.title}
                date={project1.date}
                description={project1.decription}
                sourceURL={project1.sourceURL}
                hostedURL={project1.hostedURL}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectCard
                imageSrcPath={project2Picture}
                title={project2.title}
                date={project2.date}
                description={project2.decription}
                sourceURL={project2.sourceURL}
                hostedURL={project2.hostedURL}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProjectCard
                imageSrcPath={project3Picture}
                title={project3.title}
                date={project3.date}
                description={project3.decription}
                sourceURL={project3.sourceURL}
                hostedURL={project3.hostedURL}
              />
            </Col>
          </Row>
          <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()} {author}
    &emsp; &emsp;
    &emsp; &emsp;
    &emsp; &emsp; 
    &emsp; &emsp;
    &emsp; &emsp;

    {social
      ? social.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
      <br/>
  </footer>

        </Container>

 

        </div>
      </div>

    </Styled.root>
  )
}

