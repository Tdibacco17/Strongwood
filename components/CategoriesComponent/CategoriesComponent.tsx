import styles from "./CategoriesComponent.module.scss"
import data from "@/models/es.json"
import Image from "next/image"
import Link from "next/link"

export default function CategoriesComponent() {
    return (
        <section className={styles["container-section-categories"]}>
            <div className={styles["header-categories"]}>
                <div>
                    <p className={styles["title"]}>{data.homePage.categories.title}</p>
                    <p className={styles["subtitle"]}>{data.homePage.categories.subtitle}</p>
                </div>
                <Link href={data.homePage.categories.redirect.url} className={styles["link"]}>
                    {data.homePage.categories.redirect.title}
                </Link>
            </div>
            <div className={styles["container-categories"]}>
                {
                    Object.values(data.homePage.categories.cards).map((item: any, index: number) => {
                        return <Link href={item.url} key={index} className={styles["container-outer-image"]}>
                            <Image
                                src={item.image.imgSrc}
                                alt={item.image.imgAlt}
                                fill
                                className={styles["container-inner-image"]}
                                priority
                                style={{ objectPosition: item.image.objPosition }}
                                sizes="100vw"
                                quality={100}
                            />
                            <div className={styles["container-overlay-image"]} />
                            <div className={styles["container-info-card"]}>
                                <p className={styles["title-section"]}>{item.title}</p>
                                <small className={styles["view-more"]}>Ver más</small>
                            </div>
                        </Link>
                    })
                }
            </div>
            <Link href={data.homePage.categories.redirect.url} className={styles["link-mobile"]}>
                {data.homePage.categories.redirect.title}
            </Link>
            <div className={styles["line-decoration"]} />
        </section>
    )
}