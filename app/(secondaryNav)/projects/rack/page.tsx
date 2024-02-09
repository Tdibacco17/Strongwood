import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function RackPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("rack");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="rack"/>
}