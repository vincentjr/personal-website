/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
**/


// import { useStaticQuery, graphql } from "gatsby"

import React from "react"

import {
  Typography
} from "antd"

import {
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
  GithubOutlined
} from '@ant-design/icons';

import { Link } from "gatsby"

import "./sidebar.css"

const { Paragraph, Title } = Typography

const iconSize = {
  fontSize: "1.5rem",
  marginRight: "10px"
}

const container = {
  // "display": "flex",
  // "flexDirection": "column",
  // "justifyContent": "space-between",
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
        <Title>Hi, I'm Vincent.</Title>
            <Paragraph mark>This is paragraph mark</Paragraph>
            <Paragraph underline>This is underline</Paragraph>
      </aside>

      <footer>
        <Link to="/now/">Now</Link> <br />
        <div style={{marginTop: "10px"}}>
          <a href="https://www.instagram.com/vincentjr_">
            <InstagramOutlined style={iconSize} />
          </a>
          <a href="https://www.linkedin.com/in/vincentsmithjr/">
            <LinkedinOutlined style={iconSize} />
          </a>
          <a href="https://www.github.com/vincentjr">
            <GithubOutlined style={iconSize} />
          </a>
          <a href="https://www.medium.com/@noise_vincent">
            <MediumOutlined style={iconSize} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Sidebar
