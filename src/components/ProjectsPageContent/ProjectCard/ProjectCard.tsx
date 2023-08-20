import React from 'react'
import { useHistory } from '@docusaurus/router';

import { Project } from '@site/docs/projects/_configs'
import styles from './ProjectCard.module.css'

interface ProjectCardProps extends Project {
  color?: string
}

const ProjectCard = ({
  id,
  headline,
  description,
  level_of_difficulty,
  roles,
  color = '#FFE0E0',
}: ProjectCardProps) => {
  const history = useHistory()

  return (
    <div className={styles.container}>
      <div className={styles.banner} style={{ backgroundColor: color }}>😂</div>
      <div className={styles.info_container}>
        <div className={styles.headline}>{headline}</div>
        <div>{description}</div>
        <div>Level of Difficulty: {level_of_difficulty}
          <br />
          <u>
            Role: {roles.join(', ')}
          </u>
        </div>
        <button className={styles.join_button} onClick={() => history.push(id)}>Join this project</button>

      </div>
    </div>
  )
}

export default ProjectCard