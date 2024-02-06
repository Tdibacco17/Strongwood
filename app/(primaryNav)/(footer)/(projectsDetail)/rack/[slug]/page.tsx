import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function RackDetailPage({ params }: { params: { slug: string } }) {
    return <ProjectDetailContainer params={params} projectSlug="rack" />
}