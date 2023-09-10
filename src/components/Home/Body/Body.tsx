import React, { useState } from 'react'
import { useHistory } from '@docusaurus/router';

//@ts-ignore 
import AboutImage from '@site/static/img/about-image.png';
//@ts-ignore 
import RoadmapImage from '@site/static/img/roadmap-image.png';
//@ts-ignore 
import GetInvolvedImage from '@site/static/img/get-involved-image.png';

import styles from './Body.module.css'
import Button from '../../Shared/Button/Button';

const JOIN_TODAY_PATH = '/open-sprints/join-today'
const PURPLE = '#337'
const ORANGE = '#FC9B6E'
const PINK = '#F4B4D2'

const AboutTextContent = () => <p className={styles.content__large}>
  Open Sprints by Femmecubator
  is a workspace for content editors, designers and developers looking to upskill by contributing to projects within a team environment.
</p>

const RoadmapTextContent = () => <div>
  <div className={styles.content__medium}>
    Summer 2023 - Volunteer Set up and Huddle
  </div>
  <p className={styles.content__small}>
    Open Sprints volunteers begin planning for launch.
  </p>
  <br />
  <br />
  <div className={styles.content__medium}>
    Fall 2023 - Workathon Kickoff / Public Soft Launch
  </div>
  <br />
  <p className={styles.content__small}>
    At kickoff, we invite 20 Workathon participants to be divided up in 3 teams. We will pitch 3 projects that we are concurrently running for the upcoming season. Mentors will lead the projects and plan out the work in features.
    <br /><br />
    Teams will meet monthly to demo progress. Volunteers may sign up once a feature is opened up within project work duration.</p>
</div>

const GetInvolvedTextContent = () => {
  const history = useHistory()
  return (<div>
    <div className={styles.content__large}>
      We are looking for
    </div>
    <br />
    <div className={styles.content__medium}>
      Workathon Participants (Open to BIPOC women only)
    </div>
    <br />
    <div className={styles.content__small}>
      Work with mentors in the field and learn Agile-driven product development. Recommended for recent grads and aspiring developers and designers looking contribute on short-term projects  </div>
    <br />
    <br />
    <div className={styles.content__medium}>
      Tech and Design Lead Mentor Residents (Open to Allies)</div>
    <br />
    <div className={styles.content__small}>
      Mentors in design and development industry who have an annual volunteer day are encouraged to meet a total of 2-4 hours per week to coach and give feedback to participant work.</div>
    <br />
    <br />
    <Button onClick={() => { history.push(JOIN_TODAY_PATH) }}>Apply Today</Button>
  </div>)
}

const TABS_CONFIG = [
  {
    name: 'About',
    Image: AboutImage,
    backgroundColor: ORANGE,
    color: PURPLE,
    Content: AboutTextContent,
  },
  {
    name: 'Roadmap',
    Image: RoadmapImage,
    backgroundColor: PURPLE,
    color: ORANGE,
    Content: RoadmapTextContent
  },
  {
    name: 'Get Involved',
    Image: GetInvolvedImage,
    backgroundColor: PINK,
    color: PURPLE,
    Content: GetInvolvedTextContent
  },
]

const Body = () => {
  const [selectedTab, setSelectedTab] = useState(TABS_CONFIG[0])
  const { name, Image, backgroundColor, color, Content } = selectedTab

  const tabs = TABS_CONFIG.map((tabData) => {
    const isSelectedTab = tabData.name === name
    return <button
      className={styles.tab}
      key={tabData.name}
      onClick={() => { setSelectedTab(tabData) }}
      style={{
        color,
        borderBottom: isSelectedTab ? `4px solid ${tabData.color}` : null
      }}>
      {tabData.name}
    </button>
  })

  return (<main className={styles.container} style={{ backgroundColor, color }}>
    <div className={styles.tabs}>
      {tabs}
    </div>

    <div className={styles.content}>
      <Content />
      <img src={Image} className={styles.content__image} />
    </div>
  </main>
  )
}

export default Body