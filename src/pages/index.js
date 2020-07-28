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

import {
  LinkOutlined,
  WarningOutlined
} from '@ant-design/icons';

import Layout from "../components/layout"
// import SEO from "../components/seo"

const { Paragraph, Text, Title } = Typography

// status: active, no longer maintained, inactive

const sideProjects = [
  {
    "type": "side-project",
    "title": "Noise.net",
    "url": "https://noise.net",
    "description": "This is the noise description.",
    "languages": ["Javascript", "Python"],
    "frameworks": ["Flask", "ReactJS", "Redux"],
    "readableDate": "Feb. 2019 - Current",
    date: new Date()
  },
  {
    "type": "side-project",
    "title": "Black Umbrella Music",
    "url": "http://site.blackumbrellamusic.com/",
    "description": "This is the BU description.",
    "languages": ["Javascript", "PHP", "Python"],
    "frameworks": ["CodeIgniter", "Wordpress", "Flask", "NodeJS", "JQuery"],
    "readableDate": "Jan. 2016 - Jan. 2019",
    date: new Date('2019-01-01')
  },
  {
    "type": "side-project",
    "title": "BMBR NYC",
    "url": "http://bmbrnyc.com/",
    "description": "Blog that highlights the sights and sounds of NYC street culture",
    "languages": ["Javascript", "PHP"],
    "frameworks": ["Wordpress", "JQuery"],
    "readableDate": "April 2015",
    date: new Date('2015-04-01')
  },
  {
    "type": "side-project",
    "title": "90Artists",
    "url": "http://wilsonluxurious.com/",
    "description": "App for musicians to setup and customize their website for free, example - http://wilsonluxurious.com/",
    "languages": ["Javascript", "PHP"],
    "frameworks": ["Wordpress", "AngularJS"],
    "readableDate": "May 2014",
    date: new Date('2014-05-01')
  },
  {
    "type": "side-project",
    "title": "Stustle",
    "description": "Web app for students to sell their furniture on campus.",
    "languages": ["Javascript", "PHP"],
    "frameworks": ["CodeIgniter", "JQuery"],
    "readableDate": "Nov. 2012",
    date: new Date('2012-11-01')
  },
  {
    "type": "side-project",
    "title": "LiveAthletic",
    "description": "Web app to create and track Crossfit workouts.",
    "languages": ["Javascript", "PHP"],
    "frameworks": ["CodeIgniter", "KnockoutJS"],
    "readableDate": "June 2012",
    date: new Date('2012-06-01')
  },
  {
    "type": "side-project",
    "title": "Dream and Produce",
    "url": "http://www.dreamandproduce.com/",
    "description": "This is the DAP description.",
    "languages": ["Javascript", "PHP", "Python"],
    "frameworks": ["CodeIgniter", "Wordpress", "Flask", "NodeJS", "JQuery"],
    "readableDate": "Jan. 2011 - Jan. 2016",
    date: new Date('2016-01-01')
  }
]

const personalProjects = [
  {
    "type": "personal",
    "title": "VincentJr.com",
    "url": "http://vincentjr.com/",
    "description": "I wanted to checkout some new technologies so I made this little portfolio site.",
    "languages": ["Javascript", "GraphQL"],
    "frameworks": ["GatsbyJS", "ReactJS", "Ant Design"],
    "readableDate": "Aug. 2020",
    date: new Date('2020-08-01')
  },
]

const professionalProjects = [
  {
    "type": "professional",
    "title": "VincentJr.com",
    "description": "I wanted to checkout some new technologies so I made this little portfolio site.",
    "languages": ["Javascript", "GraphQL"],
    "frameworks": ["GatsbyJS", "ReactJS", "Ant Design"],
    "readableDate": "August 2020",
    date: new Date('2019-01-01')
  },
]

const records = sideProjects.concat(personalProjects).concat(professionalProjects).sort((a, b) => b.date - a.date)

const options = [
  { label: 'Professional', value: 'professional' },
  { label: 'Side Projects', value: 'side-project' },
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
                  let timelineHex = "rgba(0, 0, 0, 0.25)"
                  switch(item.type) {
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
                      key={index}
                      color={timelineColor}
                    >
                      <Card style={{borderLeft: `5px solid ${timelineHex}`}}>
                        <Text style={{display: "block", fontSize: "12px"}}>{item.readableDate}</Text>
                        <Title
                          level={4}
                          style={{display: "inline-block", marginTop: ".5rem"}}
                        >
                          {item.title}
                        </Title>
                        {item.url && (
                          <a
                            href={item.url}
                            title={`${item.title} Website`}
                            style={{marginLeft: "10px", fontSize: "1.2rem"}}
                          >
                            <LinkOutlined />
                          </a>
                        )}
                        {!item.url && item.type === "side-project" && (
                          <WarningOutlined style={{marginLeft: "10px", fontSize: "1.2rem", color: "#ff4d4f"}} />
                        )}
                        <Paragraph>
                          {item.description}
                        </Paragraph>
                        {languages && frameworks && (
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

export default IndexPage
