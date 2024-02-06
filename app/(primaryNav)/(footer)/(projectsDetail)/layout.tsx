import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function ProjectsDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProjectsProvider>
            {children}
        </ProjectsProvider>
    )
}