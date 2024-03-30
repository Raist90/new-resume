'use client'
import type { ProjectCard } from '@/types'
import { createContext, useContext, useState } from 'react'

const ProjectsContext = createContext<ProjectCard[]>([])

export const useProjects = () => {
  const context = useContext(ProjectsContext)
  return context
}

type ProjectsProviderProps = {
  children: React.ReactNode
  projects: ProjectCard[]
}

export const ProjectsProvider = ({
  children,
  projects,
}: ProjectsProviderProps) => {
  const [value] = useState<ProjectCard[] | []>(projects)

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  )
}
