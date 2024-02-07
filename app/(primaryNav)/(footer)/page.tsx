import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import styles from "./page.module.scss"
import data from "@/models/es.json"
import CategoriesComponent from "@/components/CategoriesComponent/CategoriesComponent";

export default function HomePage() {
  return (
    <div className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={data.homePage.image}
        projectData={undefined}
      />
      <CategoriesComponent />
    </div>
  );
}
