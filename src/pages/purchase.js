import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Cart = () => (
  <Layout>
    <h1>This is the purchase view</h1>
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
          twq('event', 'tw-obv91-obvae', {
            value: '10.00', // use this to pass the value of the conversion (e.g. 5.00)
            currency: 'USD', // use this to pass the currency of the conversion with an ISO 4217 code (e.g. ‘USD’)
            contents: [], // use this to pass an array of products or content
            email_address: 'test@testing.com' // use this to pass a user’s email address
          });
        }
      `}
      </script>
    </Helmet>
  </Layout>
)

export default Cart
