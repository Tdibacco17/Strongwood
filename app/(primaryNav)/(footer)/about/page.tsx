import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import styles from "./page.module.scss"
import data from "@/models/es.json"

export default function HomePage() {
  return (
    <section className={styles["container-section-about"]}>
      <PortraitImgComponent
        imageData={data.contactPage.image}
        projectData={undefined}
        isContactPage={true}
      />
      about
    </section>
  );
}
