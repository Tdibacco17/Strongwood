import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function ProductsPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("products")
    return <ProjectsComponent projectsData={parsedObject} projectSlug="products"/>
}