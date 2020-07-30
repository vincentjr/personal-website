import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar"

import "antd/dist/antd.css"
import "./layout.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const SiteLayout = ({ children }) => (
  <React.Fragment>
    <div id="sider">
      <Sidebar />
    </div>
    <main id="main">
        {children}
	    <footer>
	  		© {new Date().getFullYear()}; Last updated Aug. 2020
		  </footer>
    </main>
  </React.Fragment>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
