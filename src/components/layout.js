import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar"

import "antd/dist/antd.css"
import "./layout.css"

const SiteLayout = ({ children }) => (
  <React.Fragment>
    <div id="sider">
      <Sidebar />
    </div>
    <main id="main">
        {children}
	    <footer>
	  		© {new Date().getFullYear()}; Last update August '20
		</footer>
    </main>
  </React.Fragment>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
