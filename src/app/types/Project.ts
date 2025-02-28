export type Projects = Project[]

export type Project = {
  id: number
  title: string
  picture: string
  description: string
  isWorkInProgress: boolean
  isRelevant: boolean
  github: string
  demo: string
  techs: string[]
}

export type ProjectsResponse = {
  projects: Projects
}
