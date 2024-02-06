'use client'
import { ProductDetailContext } from "@/context/ProjectsContextProvider";
import { useContext, useEffect, useState } from "react";
import { projectsData } from "@/models/projects";
import ProjectDetailComponent from "@/components/ProjectDetailComponent/ProjectDetailComponent";
import { ProjectsDataContextInterface, SelectedFilterInterface } from "@/types/ProjectsTypes";

export default function ProjectDetailContainer({ params, projectSlug }: { params: { slug: string }, projectSlug: SelectedFilterInterface }) {
    const { handleProjectDataChange, projectData } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    const [telonActive, setTelonActive] = useState<boolean>(false)
    const [rectangleActive, setRectangleActive] = useState<boolean>(false)

    useEffect(() => {
        if (params.slug) {
            handleProjectDataChange &&
                handleProjectDataChange(projectsData[params.slug]);
        }
        setRectangleActive(false)
        setTelonActive(false)
    }, [params.slug]);

    useEffect(() => {
        if (projectData) {
            setTimeout(() => {
                setRectangleActive(true)
            }, 250)
            setTimeout(() => {
                setTelonActive(true)
            }, 850)
        }
    }, [projectData, params.slug])

    return <ProjectDetailComponent
        projectSlug={projectSlug}
        telonActive={telonActive}
        rectangleActive={rectangleActive}
    />
}