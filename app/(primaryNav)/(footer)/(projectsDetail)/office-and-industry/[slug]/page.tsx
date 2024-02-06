import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function OfficeAndIndustryDetailPage({ params }: { params: { slug: string } }) {
    return <ProjectDetailContainer params={params} projectSlug="office-and-industry" />
}