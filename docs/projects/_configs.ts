type LevelOfDiffulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type Project = {
  id: string
  goal_statement: string
  emoji: string
  project_tags: string[]
  headline: string
  description: string
  level_of_difficulty: LevelOfDiffulty
  roles: string[]
}

export type ProjectsConfigProps = {
  [key: string]: Project
}

const projectsConfigValue = {
  Akita: {
    id: 'akita',
    emoji: '😊',
    goal_statement:
      'Enabling Async Work using Github Pages and CSS Styled Templates',
    project_tags: ['Development', 'Github', 'Docusaurus', 'Documentation'],
    headline: 'Project Akita: Implement and Build Docusaurus CMS Site',
    description:
      'Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons',
    level_of_difficulty: 'Beginner',
    roles: ['HTML and CSS Frontend Developer', 'Content Designer'],
  },
  beagle: {
    id: 'beagle',
    emoji: '😎',
    goal_statement: 'Launch a Reusable Component Library on Storybook',
    project_tags: ['Development', 'Design', 'Github', 'DesignSystem', 'Figma'],
    headline: 'Project Beagle: Hacking A Design System Component Library',
    description:
      'Join this squad to build a component libraries to be created on Figma and deployed on Storybook. This Design System demo site will be developed for the WeSparkle Brand.',
    level_of_difficulty: 'Intermediate',
    roles: ['Designer', 'React Developer'],
  },
  corgi: {
    id: 'corgi',
    emoji: '🤗',
    goal_statement: 'Mapping User Journey for early career technies',
    project_tags: ['Development'],
    headline: 'Project Corgi: Mapping User Journey for early career technies',
    description: 'Omnis ut neque illo.',
    level_of_difficulty: 'Intermediate',
    roles: ['Designer', 'React Developer'],
  },
  dachshund: {
    id: 'dachshund',
    emoji: '😇',
    goal_statement: 'Creating Themeable Design Tokens',
    project_tags: ['Development'],
    headline: 'Project Dachshund: Creating Themeable Design Tokens',
    description: 'Some description',
    level_of_difficulty: 'Intermediate',
    roles: ['Designer', 'React Developer'],
  },
  eurasier: {
    id: 'eurasier',
    emoji: '🥺',
    goal_statement: 'Learning Accessibility as a Designer',
    project_tags: ['Development'],
    headline: 'Project Eurasier: Learning Accessibility as a Designer',
    description: 'Some description',
    level_of_difficulty: 'Intermediate',
    roles: ['Designer', 'React Developer'],
  },
} satisfies ProjectsConfigProps

export default projectsConfigValue
