import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function WarehousePage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("warehouse");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="warehouse"/>
}