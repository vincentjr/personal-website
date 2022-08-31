import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"

const PageView = () => (
  <Layout>
    <h1>This is the page view</h1>
    <div>
      <Link to="/content">Content view pixel</Link>
    </div>
    <div>
      <Link to="/page">Page view pixel</Link>
    </div>
    <div>
      <Link to="/cart">Cart pixel</Link>
    </div>
    <div>
      <Link to="/purchase">Purchase pixel</Link>
    </div>
    <Helmet>
    <script>
      {`
        {
          twq('event', 'tw-obv91-obvab', {
            contents: [], // use this to pass an array of products or content
            email_address: 'test@testing.com'
          });
        }
      `}
      </script>
    </Helmet>
  </Layout>
)

export default PageView
