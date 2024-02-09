import styles from "./ContactDetailsComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"
import { InstagramIconComponent } from "../IconComponent/IconComponent"
import { ContactInterface } from "@/types"

export default function ContactDetailsComponent() {
    return (
        <section className={styles["container-contact-details"]}>
            <div className={styles["wrapper-contact-details"]}>
                <p className={styles["header-title"]}>{data.contactPage.title}</p>
                {Object.values(data.contactPage.contactDetails).map((item: ContactInterface, index: number) => {
                    return <Link key={index} rel="noopener noreferrer" target="_blank"
                        href={item.href}
                        className={`${styles["link-item"]}
                            ${item.classType ? styles[item.classType] : ""}`}>
                        <p className={styles["title"]}>{item.title}</p>
                        <div className={`${styles["wrapper-address"]} ${item.icon ? styles["margin"] : ""}`}>
                            {item.icon &&
                                <InstagramIconComponent fill="white" hover={false} />}
                            <p className={styles["address"]}>{item.address}</p>
                        </div>
                    </Link>
                })}
            </div>
        </section>
    )
}