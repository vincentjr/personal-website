/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
**/


// import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import React from "react"

import {
  Typography
} from "antd"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from "./image"

import "./sidebar.css"

const { Paragraph, Title } = Typography

const iconSize = {
  fontSize: "1.7rem",
  marginRight: "10px"
}

const container = {
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "space-between",
  "padding": "20px",
  "minHeight": "100%"
}

const Sidebar = () => {

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)


  return (
    <div style={container}>
      <aside>
        <Image />
        <Title>Hi, I'm Vincent.</Title>
        <Paragraph>
          I'm a product manager with professional software engineering experience based out of New York.
          I'm passionate about understanding user's problems and breaking down complex systems into intuitive products.
          Currently, I am working in the advertising technology space, while also creating tools to help musicians build a sustainable career.
        </Paragraph>
        <Paragraph>
          I'm into fitness, carpentry, fishing, and have been known to fall deep into the Youtube universe.
          The picture above was taken at Cathedral Rock in Sedona, Arizona.
        </Paragraph>
      </aside>

      <div style={{marginTop: "30px"}}>
        <div style={{marginTop: "10px"}}>
          <OutboundLink href="https://www.instagram.com/vincentjr_" title="Vincent Smith Instagram">
            <FontAwesomeIcon style={iconSize} icon={["fab", "instagram"]} />
          </OutboundLink>
          <OutboundLink href="https://angel.co/u/vincent-smith" title="Vincent Smith Angellist">
            <FontAwesomeIcon style={iconSize} icon={["fab", "angellist"]} />
          </OutboundLink>
          <OutboundLink href="https://www.linkedin.com/in/vincentsmithjr/" title="Vincent Smith LinkedIn">
            <FontAwesomeIcon style={iconSize} icon={["fab", "linkedin"]} />
          </OutboundLink>
          <OutboundLink href="https://www.github.com/vincentjr" title="Vincent Smith Github">
            <FontAwesomeIcon style={iconSize} icon={["fab", "github"]} />
          </OutboundLink>
          <OutboundLink href="https://www.medium.com/@noise_vincent" title="Vincent Smith Medium">
            <FontAwesomeIcon style={iconSize} icon={["fab", "medium"]} />
          </OutboundLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
