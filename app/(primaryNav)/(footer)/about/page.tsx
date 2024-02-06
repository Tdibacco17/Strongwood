import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import styles from "./page.module.scss"
import { projectsData } from "@/models/projects";
import TwoSmallImgComponent from "@/components/TwoSmallImgComponent/TwoSmallImgComponent";

export default function HomePage() {
  const { aboutData } = projectsData;

  return (
    <section className={styles["container-section-about"]}>
      <PortraitImgComponent
        imageData={aboutData.image}
        projectData={undefined}
        isContactPage={true}
      />
      {aboutData.details.technicalInfo &&
        <TwoSmallImgComponent
          isReverse={true}
          technicalInfo={aboutData.details.technicalInfo}
        />}
      {aboutData.details.secondTechnicalInfo &&
        <TwoSmallImgComponent
          isReverse={false}
          isColumnReverse={true}
          technicalInfo={aboutData.details.secondTechnicalInfo} />}
      {aboutData.details.secondTwoSmallImg &&
        <TwoSmallImgComponent
          isReverse={true}
          imagesData={aboutData.details.secondTwoSmallImg} />}
    </section>
  );
}
