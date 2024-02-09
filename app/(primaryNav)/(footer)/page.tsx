import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import styles from "./page.module.scss"
import data from "@/models/es.json"
import CategoriesComponent from "@/components/CategoriesComponent/CategoriesComponent";
import VideoPlayerComponent from "@/components/VideoPlayerComponent/VideoPlayerComponent";

export default function HomePage() {
  return (
    <div className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={data.homePage.image}
        projectData={undefined}
        heroData={data.homePage.hero}
      />
      <CategoriesComponent />
      <VideoPlayerComponent />
    </div>
  );
}
