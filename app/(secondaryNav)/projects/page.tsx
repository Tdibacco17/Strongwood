import { filterProjectsData } from "@/utils/filterProjectsData"
import { ProjectDataInterface } from "@/types/ProjectsTypes"
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent"

export default function ProjectPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("all")
    return <ProjectsComponent projectsData={parsedObject} projectSlug="all"/>
}