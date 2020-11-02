import React, { Fragment } from "react"
import { Container, Row, Col } from "react-bootstrap"
//import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"
import "./projects.css"

import project1Picture from "./SedPy.png"
import project2Picture from "./github-actions.jpg"
import project3Picture from "./autoyapf-1.png"

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
  title: "Sedpy",
  date: "2020-08-18",
  decription:
    "sedpy is an open-source project being built as a cross-platform alternative of sed for easier and more flexible stream line editing across BSD and GNU systems",
  sourceURL: "https://github.com/mritunjaysharma394/sedpy",
  hostedURL: "https://pypi.org/project/sedpy/",
}

//Project 2

const project2 = {
  title: "Automating Image Classification with Microsoft Azure Custom Vision Training and Prediction",
  date: "2020-09-17",
  decription:
    "A low-code/no-code Image Classifier GitHub Action which uses Microsoft Azure Custom Vision Services. It gives user the ability to train and publish Image Classification Model without writing a single line of python code by just pushing the image data-set and workflow file in the GitHub repository.",
  sourceURL: "https://github.com/mritunjaysharma394/autoCustomVision",
  hostedURL: "https://github.com/marketplace/actions/automating-image-classification-with-microsoft-azure-custom-vision-training-and-prediction",
}

//Project 3

const project3 = {
  title: "Autoyapf",
  date: "2020-08-31",
  decription:
    "autoyapf is a GitHub action for yapf, an open-source tool that automatically formats Python code to conform to the PEP 8 style guide.",
  sourceURL: "https://github.com/mritunjaysharma394/autoyapf",
  hostedURL: "https://github.com/marketplace/actions/autoyapf",
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
      display: `flex`,
      flexDirection: [`column`, `row`],
      justifyContent: `space-between`,
    })}
  >
    © {new Date().getFullYear()} {author}
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
                &bull;
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

