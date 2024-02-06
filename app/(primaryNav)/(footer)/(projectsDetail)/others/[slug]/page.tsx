import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function OthersDetailPage({ params }: { params: { slug: string } }) {
    return <ProjectDetailContainer params={params} projectSlug="others" />
}