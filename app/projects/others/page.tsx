import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function OthersPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("others");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="others"/>
}