import { TechnicalInfoInterface } from "@/types/ProjectsTypes"
import styles from "./TechnicalInfoComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"

export default function TechnicalInfoComponent({
    technicalInfo,
}: {
    technicalInfo: TechnicalInfoInterface,
}) {
    const { materials, location, propousal, year } = data.projectDetail.footerTitles
    return (
        <div className={`${styles["container-section-technical-info"]}`}>
            <div className={styles["container-body-info"]}>
                <p className={styles["header-title"]}>{technicalInfo.title}</p>
                <div className={styles["description-info"]}>
                    {technicalInfo.footer && <p>{data.projectDetail.titleDescription}</p>}
                    <div className={styles["spacer"]}>
                        {technicalInfo.description.map((item: string, index: number) => {
                            return <p key={index} className={`${styles["description"]}`}>
                                {item}
                            </p>
                        })}
                    </div>
                </div>
            </div>
            {technicalInfo.footer ?
                <div className={styles["container-footer-info"]}>
                    <p className={styles["row-wrapper"]}>
                        <span className={styles["item-left"]}>{materials}</span>
                        <span>{technicalInfo.footer.materials}</span>
                    </p>
                    <p className={styles["row-wrapper"]}>
                        <span className={styles["item-left"]}>{propousal}</span>
                        <span>{technicalInfo.footer.propousal}</span>
                    </p>
                    <p className={styles["row-wrapper"]}>
                        <span className={styles["item-left"]}>{year}</span>
                        <span>{technicalInfo.footer.year}</span>
                    </p>
                    {technicalInfo.footer.location &&
                        <p className={styles["row-wrapper"]}>
                            <span className={styles["item-left"]}>{location}</span>
                            <span>{technicalInfo.footer.location}</span>
                        </p>}
                </div>
                : <div className={styles["container-footer-home"]}>
                    {
                        technicalInfo.homeFooterData && technicalInfo.homeFooterData.proyects &&
                        <Link
                            className={styles["link"]}
                            href={technicalInfo.homeFooterData.proyects.url}>
                            {technicalInfo.homeFooterData.proyects.title}
                        </Link>
                    }
                    {
                        technicalInfo.homeFooterData && technicalInfo.homeFooterData.contact &&
                        <Link
                            className={styles["link"]}
                            href={technicalInfo.homeFooterData.contact.url}>
                            {technicalInfo.homeFooterData.contact.title}
                        </Link>
                    }
                </div>
            }
        </div>
    )
}