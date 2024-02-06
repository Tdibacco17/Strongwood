import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function WarehouseDetailPage({ params }: { params: { slug: string } }) {
    return <ProjectDetailContainer params={params} projectSlug="warehouse" />
}