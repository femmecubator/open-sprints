import React from 'react'

import { Project } from '@site/docs/projects/_configs'
import styles from './ProjectCard.module.css'

interface ProjectCardProps extends Project {
  color?: string
}

const ProjectCard = ({
  headline,
  description,
  level_of_difficulty,
  roles,
  color = '#FFE0E0',
}: ProjectCardProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.banner} style={{ backgroundColor: color }}>😂</div>
      <div className={styles.info_container}>
        <div className={styles.headline}>{headline}</div>
        <div style={{ margin: '30px 0px' }}>{description}</div>
        <div>Level of Difficulty: {level_of_difficulty}</div>
        <div style={{ textDecoration: 'underline' }}>Role: {roles.join(', ')}</div>
      </div>
    </div>
  )
}

export default ProjectCard