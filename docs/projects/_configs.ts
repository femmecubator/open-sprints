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
    roles: ['Developer', 'Content Designer'],
  },
  beagle: {
    id: 'beagle',
    emoji: '😎',
    goal_statement: 'Launch a Reusable Component Library on Storybook',
    project_tags: ['Development', 'Design', 'Github', 'DesignSystem', 'Figma'],
    headline: 'Project Beagle: Hacking A Design System Component Library',
    description:
      'Join this squad to build the Equity UI component library. Developers joining this project will learn to deploy components on Storybook and a sneak peak of the DS process. By the end of the project, a set of 5 components will be built under the WeSparkle Brand Theme.',
    level_of_difficulty: 'Intermediate',
    roles: ['Designer', 'React Developer', 'Developer'],
  },
  corgi: {
    id: 'corgi',
    emoji: '🤗',
    goal_statement: 'Mapping User Journey for Project Aggregator Landing Page',
    project_tags: ['Research', 'UX Design', 'Figma' ],
    headline: 'Project Corgi: Mapping User Journey for Project Aggregator Landing Page',
    description: 'Refine and future proof the site’s features driven by UX research methods like User Journey, JBTD and Empathy Maps',
    level_of_difficulty: 'Intermediate',
    roles: ['UX Designer', 'UX Researcher'],
  },
  dachshund: {
    id: 'dachshund',
    emoji: '😇',
    goal_statement: 'Content Design for Design Systems',
    project_tags: ['Content Design', 'Design System', 'Figma'],
    headline: 'Project Dachshund: Intro to Content Design System Workshop',
    description: 'This intro workshop is an audit work on Content Design Systems. Learn to content strategy for designs systems in an Enterprise scale.',
    level_of_difficulty: 'Intermediate',
    roles: ['Content Designer', 'UI Designer', 'Researcher'],
  },
  eurasier: {
    id: 'eurasier',
    emoji: '🥺',
    goal_statement: 'Accessibility Annotation Tools for Designers',
    project_tags: ['UX Design', 'Accessibility', 'Figma'],
    headline: 'Project Eurasier: Practical Accessibility Tools for Designers',
    description: 'In this workshop, designers will learn the basics of how to annotate their work for accessbility',
    level_of_difficulty: 'Beginner',
    roles: ['UX designer', 'Accessibility Specialist', 'Developer'],
  },
} satisfies ProjectsConfigProps

export default projectsConfigValue
