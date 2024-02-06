import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function KitchensPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("kitchen");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="kitchen"/>
}