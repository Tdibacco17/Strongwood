import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function OfficeAndIndustryPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("office-and-industry");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="office-and-industry"/>
}