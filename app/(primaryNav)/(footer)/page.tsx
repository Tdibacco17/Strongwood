import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import styles from "./page.module.scss"
import data from "@/models/es.json"

export default function HomePage() {
  return (
    <section className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={data.homePage.image}
        projectData={undefined}
      />
    </section>
  );
}
