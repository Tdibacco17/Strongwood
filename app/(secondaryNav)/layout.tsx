import FooterComponent from "@/components/FooterComponent/FooterComponent"
import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"
import styles from "./page.module.scss"

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarContainer navType="secondary" />
            <div className={styles['container-section-projects']}>
                {children}
            </div>
            <FooterComponent />
        </>
    )
}