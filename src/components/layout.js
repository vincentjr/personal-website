import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar"

import {
  Col,
  Row,
} from "antd"

import "antd/dist/antd.css"
import "./layout.css"

const SiteLayout = ({ children }) => (
  <Row style={{minHeight: "100%"}}>
    <Col id="sider" xs={24} md={10} lg={8} xl={6}>
      <Sidebar />
    </Col>
    <Col id="main-content" xs={24} md={14} lg={16} xl={18}>
      <main>
        <div>
          {children}
        </div>
      </main>
    </Col>
  </Row>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
