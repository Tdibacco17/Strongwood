import { ProjectDataInterface, ProjectInterface, SelectedFilterInterface } from "@/types/ProjectsTypes";
import ProjectsCardComponent from "../ProjectsCardComponent/ProjectsCardComponent"
import styles from "./ProjectsComponent.module.scss"
import SelectorTitleComponent from "../SelectorTitleComponent/SelectorTitleComponent";

export default function ProjectsComponent({
    projectsData,
    projectSlug
}: {
    projectsData: ProjectDataInterface,
    projectSlug: SelectedFilterInterface
}) {

    return (
        <>
            <SelectorTitleComponent projectSlug={projectSlug} />
            <section className={styles["container-projects-cards"]}>
                {
                    projectsData && Object.values(projectsData).map((projectData: ProjectInterface, index: number) => {
                        return <ProjectsCardComponent
                            key={projectData.projectSlug}
                            projectData={projectData}
                            index={index}
                        />
                    })
                }
            </section>
        </>
    )
}