import React, { useState } from 'react'
import clsx from 'clsx'

//@ts-ignore 
import AboutImage from '@site/static/img/about-image.png';
//@ts-ignore 
import RoadmapImage from '@site/static/img/roadmap-image.png';
//@ts-ignore 
import GetInvolvedImage from '@site/static/img/get-involved-image.png';

import styles from './Body.module.css'

const TABS_CONFIG = [
  {
    name: 'About',
    Image: AboutImage,
    backgroundColor: '#FC9B6E',
    color: '#337',
    textContent: 'About text content'
  },
  {
    name: 'Roadmap',
    Image: RoadmapImage,
    backgroundColor: '#337',
    color: '#FC9B6E',
    textContent: 'Roadmap text content'
  },
  {
    name: 'Get Involved',
    Image: GetInvolvedImage,
    backgroundColor: '#F4B4D2',
    color: '#337',
    textContent: 'Get Involved text content'
  },
]

const Body = () => {
  const [selectedTab, setSelectedTab] = useState(TABS_CONFIG[0])
  const { name, Image, backgroundColor, color, textContent } = selectedTab

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

  </main>
  )
}

export default Body