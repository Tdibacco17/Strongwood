import styles from "./page.module.scss"
import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import data from "@/models/es.json"

export default function ContactPage() {
    return (
        <section className={styles["container-section-contact"]}>
            <PortraitImgComponent
                imageData={data.contactPage.image}
                projectData={undefined}
                isContactPage={true}
            />
        </section>
    )
}