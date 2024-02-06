'use client'
import { ProjectInterface, ProjectsDataContextInterface } from "@/types/ProjectsTypes";
import { ReactNode, createContext, useState } from "react";

export const ProductDetailContext = createContext<ProjectsDataContextInterface | {}>({});

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
    const [projectData, setProjectData] = useState<ProjectInterface | undefined>(undefined);

    const handleProjectDataChange = (projectData: ProjectInterface) => {
        setProjectData(projectData);
    };

    return (
        <ProductDetailContext.Provider
            value={{
                projectData,
                handleProjectDataChange,
            }}
        >
            {children}
        </ProductDetailContext.Provider>
    );
};