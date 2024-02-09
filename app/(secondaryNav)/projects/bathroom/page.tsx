import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function BathroomPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("bathroom");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="bathroom"/>
}