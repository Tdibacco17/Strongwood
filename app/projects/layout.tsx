import FooterComponent from "@/components/FooterComponent/FooterComponent"
import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarContainer navType="secondary" />
            {children}
            <FooterComponent />
        </>
    )
}