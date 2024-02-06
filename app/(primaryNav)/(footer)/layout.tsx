import FooterComponent from "@/components/FooterComponent/FooterComponent"

export default function FooterLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <FooterComponent />
        </>
    )
}