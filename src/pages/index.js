import React, { useState } from 'react'
// import { Link } from "gatsby"

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

import Layout from "../components/layout"
// import SEO from "../components/seo"

const { Text } = Typography

const records = [
  {
    "type": "professional",
    "title": "This is the title",
    "description": "This is the description",
    "technologies": "",
    "date": "March 2015"
  },
  {
    "type": "side-project",
    "title": "This is the title",
    "description": "asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd ",
    "technologies": "",
    "date": "March 2015"
  },
  {
    "type": "personal",
    "title": "This is the title",
    "description": "asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd ",
    "technologies": "",
    "date": "March 2015"
  }
]

const options = [
  { label: 'Professional', value: 'professional' },
  { label: 'Side-Projects', value: 'side-project' },
  { label: 'Personal', value: 'personal' },
]

const IndexPage = () => {

  const [viewOptions, setViewOptions] = useState(['professional', 'side-project', 'personal'])

  const onViewOptionChange = (checkedValues) => {
    setViewOptions(checkedValues)
  }

  return (
    <Layout>

      <Row>
        <Col xs={24}>
          <Text></Text>
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          <div style={{padding: "20px"}}>
            <Checkbox.Group
              options={options}
              defaultValue={viewOptions}
              onChange={onViewOptionChange}
            />
            <Timeline mode="left" style={{marginTop: "20px"}}>
              {records.filter( item => viewOptions.includes(item.type) ).map( (item, index) => {

                let timelineColor = "gray"
                switch(item.type) {
                  case "professional":
                    timelineColor = "green"
                    break;
                  case "side-project":
                    timelineColor = "blue"
                    break;
                  default:
                    timelineColor = "gray"
                }

                return (
                  <Timeline.Item
                    key={index}
                    color={timelineColor}
                  >
                    <Card hoverable>
                      {item.description}
                      <Divider />
                      <Tag color="gold">PHP</Tag>
                      <Tag color="blue">Python</Tag>
                      <Tag color="blue">Javascript</Tag>
                    </Card>
                  </Timeline.Item>
                )
              })}
            </Timeline>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
