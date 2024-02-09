import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function DeskPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("desk");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="desk"/>
}