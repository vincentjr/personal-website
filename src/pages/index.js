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
    "languages": ['Python', 'GraphQL', 'Javascript'],
    "frameworks": ['Flask', 'ReactJS', 'Redux'],
    "date": "March 2015"
  },
  {
    "type": "side-project",
    "title": "This is the title",
    "description": "asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd ",
    "languages": "",
    "date": "March 2015"
  },
  {
    "type": "personal",
    "title": "This is the title",
    "description": "asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd ",
    "languages": "",
    "date": "March 2015"
  },
  {
    "type": "professional",
    "title": "This is the title",
    "description": "This is the description",
    "languages": ['Python'],
    "date": "March 2015"
  },
  {
    "type": "side-project",
    "title": "This is the title",
    "description": "asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd ",
    "languages": "",
    "date": "March 2015"
  },
  {
    "type": "personal",
    "title": "This is the title",
    "description": "asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd asdasdd asfgdsgsgs adasdag asdasdadd ",
    "languages": "",
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

  const filteredRecords = records.filter( item => viewOptions.includes(item.type) )

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
                {filteredRecords.map( (item, index) => {

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

                  const {
                    frameworks, languages
                  } = item

                  return (
                    <Timeline.Item
                      key={index}
                      color={timelineColor}
                    >
                      <Card hoverable>
                        {item.description}
                        {languages && frameworks && (
                          <React.Fragment>
                            <Divider />
                            {frameworks.map( (item, index) => <Tag key={index} color="volcano">{item}</Tag> )}
                            {languages.map( (item, index) => <Tag key={index} color="gold">{item}</Tag> )}
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

export default IndexPage
