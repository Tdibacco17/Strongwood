import NavbarContainer from "@/containers/NavbarContainer/NavbarContainer"

export default function PrimaryNavLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarContainer navType="primary" />
            {children}
        </>
    )
}