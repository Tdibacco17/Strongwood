import styles from "./SelectorTitleComponent.module.scss"
import data from "@/models/es.json"
import { ProjectSelectorInterface, SelectedFilterInterface } from "@/types/ProjectsTypes";
import Link from "next/link";

export default function SelectorTitleComponent({ projectSlug }: { projectSlug: SelectedFilterInterface }) {
    return (
        <section className={styles['container-section-selector-titles']}>
            <p className={styles['header-title']}>{data.projectsPage.title}</p>
            <nav className={styles['selector-titles']}>
                {
                    Object.values(data.projectsPage.projectsSelector).map((filterData: ProjectSelectorInterface) => {
                        return (
                            <Link
                                aria-label={`Ir a proyecto ${filterData.selectorTitle}`}
                                href={filterData.selectorFilter === "all" ? `/projects` : `/projects/${filterData.selectorFilter}`}
                                key={filterData.selectorFilter}
                                className={`${styles['title-item']}
                                ${projectSlug === filterData.selectorFilter && styles["active-item"]}`}>
                                {filterData.selectorTitle}
                            </Link>
                        )
                    })
                }
            </nav>
        </section>
    )
}