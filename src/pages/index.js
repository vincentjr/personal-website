import React, { useState } from 'react'
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'

import {
  Card,
  Checkbox,
  Col,
  Divider,
  Row,
  Tag,
  Timeline,
  Typography
} from "antd"

import {
  LinkOutlined,
  WarningOutlined
} from '@ant-design/icons';

import Layout from "../components/layout"
// import SEO from "../components/seo"

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const { Paragraph, Text, Title } = Typography

const options = [
  { label: 'Professional', value: 'professional' },
  { label: 'Side Projects', value: 'side-project' }
]

const ContentfulRichText = ({ children }) => <Paragraph>{children}</Paragraph>

const contentfulRichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <ContentfulRichText>{children}</ContentfulRichText>
  }
};

const IndexPage = ( props ) => {

  const [viewOptions, setViewOptions] = useState(['professional', 'side-project'])

  const onViewOptionChange = (checkedValues) => {
    setViewOptions(checkedValues)
  }

  const { edges } = props.data.allContentfulPosts

  const filteredRecords = edges.map(item => item.node).filter(item => viewOptions.includes(item.projType)).map(item => {
    item['date'] = item.date ? new Date(item.date) : new Date()
    item['frameworks'] = item.frameworks === null ? [] : item.frameworks
    item['languages'] = item.languages === null ? [] : item.languages
    item['roles'] = item.roles === null ? undefined : item.roles
    return item
  })

  return (
    <Layout>
      <Row>
        <Col xs={24}>
          <div>
            <Checkbox.Group
              options={options}
              defaultValue={viewOptions}
              onChange={onViewOptionChange}
              style={{marginBottom: "20px"}}
            />
            {filteredRecords.length > 0 && (
              <Timeline mode="left">
                {filteredRecords.map( item => {

                  let timelineColor = "gray"
                  let timelineHex = "rgba(0, 0, 0, 0.25)"
                  switch(item.projType) {
                    case "professional":
                      timelineColor = "green"
                      timelineHex = "#52c41a"
                      break;
                    case "side-project":
                      timelineColor = "blue"
                      timelineHex = "#1890ff"
                      break;
                    default:
                      timelineColor = "gray"
                      timelineHex = "rgba(0, 0, 0, 0.25)"
                  }

                  const {
                    frameworks, languages
                  } = item

                  return (
                    <Timeline.Item
                      key={item.id}
                      color={timelineColor}
                    >
                      <Card style={{borderLeft: `5px solid ${timelineHex}`}}>

                        <Text style={{display: "block", fontSize: "12px"}} underline>{item.readableDate}</Text>

                        <div>
                          <Title
                            level={4}
                            style={{display: "inline-block", margin: ".5rem 10px .5rem 0"}}
                          >
                            {item.title}
                          </Title>
                          {item.url && (
                            <a
                              href={item.url}
                              title={`${item.title} Website`}
                              style={{fontSize: "1.2rem"}}
                            >
                              <LinkOutlined />
                            </a>
                          )}
                          {!item.url && item.projType === "side-project" && (
                            <WarningOutlined style={{fontSize: "1.2rem", color: "#ff4d4f"}} />
                          )}
                        </div>

                        {item.roles && (
                          <Paragraph style={{fontSize: ".8rem"}}>{item.roles.join('; ')}</Paragraph>
                        )}

                        {documentToReactComponents(item.description.json, contentfulRichTextOptions)}

                        {(languages || frameworks) && (
                          <React.Fragment>
                            <Divider />
                            {frameworks.map( (item, index) => <Tag key={index} color="volcano" style={{"margin": "5px 5px 0 0"}}>{item}</Tag> )}
                            {languages.map( (item, index) => <Tag key={index} color="gold" style={{"margin": "5px 5px 0 0"}}>{item}</Tag> )}
                          </React.Fragment>
                        )}
                      </Card>
                    </Timeline.Item>
                  )
                })}
              </Timeline>
            )}
            {filteredRecords.length === 0 && (
              <Card hoverable>
                You have no filters :/
              </Card>
            )}
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

const propTypes = {
  data: PropTypes.object.isRequired,
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query AllPosts {
    allContentfulPosts (sort: {fields: [date, title], order: [DESC, ASC]}) {
      edges {
        node {
          id
          projType
          title
          roles
          url
          languages
          frameworks
          readableDate
          date
          description {
            json
          }
        }
      }
    }
  }
`
