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

const sideProjects = [
  {
    "type": "side-project",
    "title": "Noise.net",
    "roles": ["Founder", "Engineer"],
    "url": "https://noise.net",
    "description": "Noise is an application for musicians and their management team to help grow their career. Noise provides tools built around monitoring growth across digital networks, fan relationships, and merchandise analytics. Over the last decade of working with musicians and building apps to help their day-to-day, I'm building a product for independent musicians that want \"label grade\" tools.",
    "languages": ["JS", "Python"],
    "frameworks": ["Flask", "ReactJS", "Redux", "Material-UI"],
    "readableDate": "Feb. 2019 - Current",
    date: new Date()
  },
  {
    "type": "side-project",
    "title": "VincentJr.com",
    "url": "http://vincentjr.com/",
    "description": "I've been watching the hype around GatsbyJS so I put together this little portfolio site to check it out. With its ease of setup I understand why it's a compelling option for many applications (especially for static sites), though I'm still curious how well it fares for large-scale dynamic apps & eng teams.",
    "languages": ["JS", "GraphQL"],
    "frameworks": ["GatsbyJS", "ReactJS", "Ant Design"],
    "readableDate": "Aug. 2020",
    date: new Date('2020-08-01')
  },
  {
    "type": "side-project",
    "title": "Black Umbrella Music",
    "roles": ["Co-founder", "Engineer", "Talent Manager"],
    "url": "http://site.blackumbrellamusic.com/",
    "description": "In 2016, we decided to merge Dream & Produce with Black Umbrella to form Black Umbrella Music, an independent music management company curating Seattle's hip-hop. We built and managed digital strategy, coordinated apparel production and distribution, created roll-out and marketing strategies, and worked on partnerships with local brands. At our peak, we were managing 5 musicians and 3 producers including <a href=\"https://www.instagram.com/samlachow/\" title=\"Sam Lachow Instagram\">Sam Lachow</a>, <a href=\"https://www.instagram.com/razsimone/\" title=\"Raz Simone Instagram\">Raz Simone</a>, and <a href=\"https://www.instagram.com/romarofranceswa/\" title=\"Romaro Franceswa Instagram\">Romaro Franceswa</a>, with top individual earnings of over $100k in revenue.",
    "languages": ["JS", "PHP", "Python"],
    "frameworks": ["CodeIgniter", "Wordpress", "Flask", "NodeJS", "JQuery"],
    "readableDate": "Jan. 2016 - Jan. 2019",
    date: new Date('2019-01-01')
  },
  {
    "type": "side-project",
    "title": "BMBR NYC",
    "url": "http://bmbrnyc.com/",
    "description": "BMBR was a blog that highlighted the sights and sounds of NYC street culture. Our content was primarily focused around highlighting <a href='https://gothamist.com/arts-entertainment/roaming-the-forbidden-zones-with-nycs-young-urban-explorers' title='Urban Explorers article'>Urban Explorers</a>, upcoming sneaker and music releases, and artist interviews.",
    "languages": ["JS", "PHP"],
    "frameworks": ["Wordpress", "JQuery"],
    "readableDate": "Apr. 2015 - Apr. 2017",
    date: new Date('2017-04-01')
  },
  {
    "type": "side-project",
    "title": "90Artists",
    "url": "http://wilsonluxurious.com/",
    "description": "90Artists was my first official attempt at building a SASS product for musicians. Since we were focusing on newer acts, I decided to tackle the hosting, setup, and building problem for starting a website. The user would enter their social networks, streaming platforms, and touring service and we’d automatically generate/host a one page site for them. The user could customize colors, fonts, and the arrangement of content blocks. Sadly, with the prevalence of Squarespace and other competitors I moved on to focus on direct-to-fan problems. Total users: 10.",
    "languages": ["JS", "PHP"],
    "frameworks": ["Wordpress", "AngularJS", "Bootstrap"],
    "readableDate": "May 2014 - Jan. 2015",
    date: new Date('2015-01-01')
  },
  {
    "type": "side-project",
    "title": "Stustle.com",
    "description": "For the Sacramento Cereal Hack we built an app that let students list their furniture on campus. It included an in-app messaging system so students could coordinate meeting up. We eventually got to a soft launch at our first school, SUNY New Paltz, but got bogged down with coursework. Total furniture listings: 13.",
    "languages": ["JS", "PHP"],
    "frameworks": ["CodeIgniter", "JQuery", "Bootstrap"],
    "readableDate": "Nov. 2012",
    date: new Date('2012-11-01')
  },
  {
    "type": "side-project",
    "title": "LiveAthletic.com",
    "description": "Simple web app to create and track Crossfit workouts. Our strategy was to partner with local Crossfit gyms where the gym would create their workout of the day so their members could easily log their performance. After building most of the workout creation logic, we lost steam in completing it so I used it for myself :(.",
    "languages": ["JS", "PHP"],
    "frameworks": ["CodeIgniter", "KnockoutJS"],
    "readableDate": "June 2012",
    date: new Date('2012-06-01')
  },
  {
    "type": "side-project",
    "title": "Dream & Produce",
    "url": "http://www.dreamandproduce.com/",
    "roles": ["Co-founder", "Engineer"],
    "description": "Dream and Produce was a music management company started with Michael Rodriguez and <a href=\"https://www.instagram.com/samlachow/\" title=\"Sam Lachow Instagram\">Sam Lachow</a> in our dorm room. Throughout the years we released 3 full-length albums, 5 EPs, and have garnered over 46 million streams on Spotify, 18 million streams on Soundcloud, and 15 million views on Youtube. In 2015, we co-headlined a 29-city national tour with Futuristic and in 2017, we independently booked our first headline tour. ",
    "languages": ["JS", "PHP", "Python"],
    "frameworks": ["CodeIgniter", "Wordpress", "Flask", "NodeJS", "JQuery"],
    "readableDate": "Jan. 2011 - Jan. 2016",
    date: new Date('2016-01-01')
  }
]

const professionalProjects = [
  {
    "type": "professional",
    "title": "4C Insights (acq. by Mediaocean)",
    "roles": ["Director, Product Management", "Technical Product Manager", "Software Engineer"],
    "description": "4C is building the leading self-service intelligence platform for marketers to drive business outcomes across closed ecosystems. My current focus is leading our next-gen platform to handle our omni-channel vision and improving the customer challenges when using disparate data sources for their media planning, buying, and optimization. Previously, I worked on our measurements and integrations pipeline and built our automation and reporting framework, API, and labels library among other workflow tools.",
    "languages": ["JS", "Python"],
    "frameworks": ["Ember.js", "Flask", "ReactJS"],
    "readableDate": "Jan. 2015 - Current",
    date: new Date()
  },
  {
    "type": "professional",
    "title": "Intel",
    "roles": ["Pre-Silicon Chipset Engineer"],
    "description": "Intel is a semiconductor manufacturer company most widely recognized for their microprocessors and chipsets. At Intel, I was part of a pre-silicon validation team that wrote software to simulate USB communication on the xHCI controller. I built reactors that responded to incoming traffic and generators to simulate outgoing traffic based on the USB 3.1 spec.",
    "languages": ["Java", "System Verilog", "Perl"],
    "readableDate": "Jan. 2012 - Apr. 2014",
    date: new Date('2014-04-01')
  },
  {
    "type": "professional",
    "title": "IBM",
    "roles": ["QA Project Manager"],
    "description": "At IBM, I helped manage the teams schedule between third-party enterprise networking vendors and our internal testing team. Specifically, we were qualifying customers who built Dense Wave Division Multiplexers designed for our IBM z System Mainframes. I also helped write Perl scripts to help the internal testing team spot errors and anomalies in the testing logs.",
    "languages": ["Perl"],
    "readableDate": "July 2011 - Jan. 2012",
    date: new Date('2012-01-01')
  },
]

const records = sideProjects.concat(professionalProjects).sort((a, b) => b.date - a.date)

const options = [
  { label: 'Professional', value: 'professional' },
  { label: 'Side Projects', value: 'side-project' }
]

const IndexPage = () => {

  const [viewOptions, setViewOptions] = useState(['professional', 'side-project'])

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
                    frameworks = [], languages = []
                  } = item

                  return (
                    <Timeline.Item
                      key={index}
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
                          {!item.url && item.type === "side-project" && (
                            <WarningOutlined style={{fontSize: "1.2rem", color: "#ff4d4f"}} />
                          )}
                        </div>

                        {item.roles && (
                          <Paragraph style={{fontSize: ".8rem"}}>{item.roles.join('; ')}</Paragraph>
                        )}

                        <Paragraph>
                          <span dangerouslySetInnerHTML={{__html: item.description}} />
                        </Paragraph>
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

export default IndexPage
