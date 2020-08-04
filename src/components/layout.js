import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Sidebar from "./sidebar"
import SEO from "./seo"

import "antd/dist/antd.css"
import "./layout.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const SiteLayout = ({ children }) => (
  <div>
    <SEO lang="en" />
    <Helmet>
      <link rel="canonical" href="https://vincentjr.com/" />
    </Helmet>
    <div id="sider">
      <Sidebar />
    </div>
    <main id="main">
        {children}
	    <footer>
	  		© {new Date().getFullYear()}; Last updated Aug. 2020
		  </footer>
    </main>
  </div>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
