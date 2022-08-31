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
      <script>
        {`
          {
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','obv91', {
              email_address: 'test_email@twitter.com',
              phone_number: '+11234567890'
            });
          }
        `}
        </script>
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
