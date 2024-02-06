import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import { projectsData } from "@/models/projects";
import styles from "./page.module.scss"

export default function HomePage() {
  const { homeData } = projectsData;

  return (
    <section className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={homeData.image}
        projectData={undefined}
      />
    </section>
  );
}
