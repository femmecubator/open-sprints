import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';

//@ts-ignore 
import AboutImage from '@site/static/img/about-image.png';
//@ts-ignore 
import RoadmapImage from '@site/static/img/roadmap-image.png';
//@ts-ignore 
import GetInvolvedImage from '@site/static/img/get-involved-image.png';

import styles from './Body.module.css';
import Button from '../../Shared/Button/Button';

const JOIN_TODAY_PATH = '/join-today';
const VIEW_PROJECTS_PATH = '/docs/projects';

const PURPLE = '#337';
const ORANGE = '#FC9B6E';
const PINK = '#F4B4D2';
const DARK_ORANGE = '#CB7F58';

const LinkWithHover = ({ url, children }) => {
  const [hover, setHover] = React.useState(false);
  const linkStyle = {
    textDecoration: "none",
    color: hover ? DARK_ORANGE : ORANGE,
  };

  return (
    <a
      style={linkStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={url}
    >
      {children}
    </a>
  );
};

const AboutTextContent = () => (
  <p className={styles.content__large}>
    Open Sprints by Femmecubator is a workspace for content editors, designers, and developers looking to upskill by contributing to projects within a team environment.
  </p>
);

const FaqsContent = () => {
  const history = useHistory();

  return (
    <div>
      <div className={styles.content__medium}>
        What is Open Sprints?
      </div>
      <br />
      <p className={styles.content__small}>
        Open Sprints Project is both an online community and an in-person hackathon event where contributors can join open-source projects, get hands on learning and expand their network.
      </p>
      <br />
      <br />
      <div className={styles.content__medium}>
        Can I join the project virtually?
      </div>
      <br />
      <p className={styles.content__small}>
        For virtual projects sprints, contributors and project drivers meet through bi-weekly stand-ups to complete the project, one user story at a time. New contributors can get started by scheduling an on onboarding session or the next available standup call as long as there are active and ongoing projects.
      </p>
      <br />
      <div className={styles.content__medium}>
        What happens at the Hackathon kickoff?
      </div>
      <br />
      <p className={styles.content__small}>
        Active projects are pitched by leads to participants. Attendees and contributors are pre-assigned to projects and sessions before the event. Our goal is to run project pitches in the Spring and Fall season.
      </p>
      <br />
      <div className={styles.content__medium}>
        Where can I learn more about existing or future projects at Open Sprints?
      </div>
      <br />
      <p className={styles.content__small}>
        The projects are pre-vetted and proposed within the planning period with Femmecubator mentors and volunteers. Work plans are posted on the Open Sprints site.
        <br />
        <br />
        <Button onClick={() => history.push(VIEW_PROJECTS_PATH)}>View Projects</Button>
      </p>
      <br />
      <div className={styles.content__medium}>
        How do I get started?
      </div>
      <br />
      <p className={styles.content__small}>
        If you are ready to pick up task or contribute to a specific project, apply to be a volunteer or mentor form online.
        <br />
        <br />
        <Button onClick={() => history.push(JOIN_TODAY_PATH)}>Join Today</Button>
        <br />
        <br />
        We conduct Info Sessions when a hackathon event date is posted. Ping us at <a href="mailto:community@femmecubator.org">community@femmecubator.org</a> for any questions.
      </p>
      <br />
    </div>
  )
};

const GetInvolvedTextContent = () => {
  return (
    <div>
      <div className={styles.content__medium}>Cohort Fellows - Fall 2024</div>
      <p className={styles.content__small}>
        Work with mentors in the field, while learning product development via weekly sprints. Recommended for recent grads, aspiring developers, and designers looking to contribute on short-term social good projects (4-8 weeks). Fellows are awarded a learning stipend during the program. By application only.
      </p>
      <LinkWithHover url="https://femmecubator.wordpress.com/2023/12/18/open-sprints-fellowship-program">
        <b>Learn More →</b>
      </LinkWithHover>
      <br />
      <br />
      <div className={styles.content__medium}>Project Tech Leads / Teaching Assistants - Fall 2024</div>
      <br />
      <p className={styles.content__small}>
        Mentors in the design and development industry are encouraged to meet a total of 2 hours weekly as a fellow coach for 4 weeks. Volunteers get swag and discounted tickets to community-led events such as happy hours and or weekend trainings.
      </p>
      <LinkWithHover url="https://www.opensprints.tech/join-today">
        <b>Join Us →</b>
      </LinkWithHover>
    </div>

  );
};

const TABS_CONFIG = [
  {
    name: 'About',
    Image: AboutImage,
    backgroundColor: ORANGE,
    color: PURPLE,
    Content: AboutTextContent,
  },
  {
    name: 'FAQs',
    Image: RoadmapImage,
    backgroundColor: PINK,
    color: PURPLE,
    Content: FaqsContent,
  },
  {
    name: 'Get Involved',
    Image: GetInvolvedImage,

    backgroundColor: PURPLE,
    color: ORANGE,
    Content: GetInvolvedTextContent,
  },
];

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