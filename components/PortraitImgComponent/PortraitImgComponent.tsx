import Image from 'next/image'
import styles from "./PortraitImgComponent.module.scss"
import { ProjectInterface, SelectedFilterInterface } from '@/types/ProjectsTypes'
import { HeroDataInterface, ImgDataInterface } from '@/types'
import Link from 'next/link'

export default function PortraitImgComponent({
    imageData,
    projectData,
    telonActive,
    projectSlug,
    isContactPage,
    heroData
}: {
    imageData: ImgDataInterface,
    projectData: ProjectInterface | undefined,
    telonActive?: boolean,
    projectSlug?: SelectedFilterInterface,
    isContactPage?: boolean,
    heroData: HeroDataInterface | undefined
}) {
    return (
        <section className={`${styles["container-section-portraitImg"]} ${isContactPage && styles["isContactPage"]}`}>
            <div className={`${styles["container-outer-image"]}`}>
                <Image
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    className={styles["container-inner-image"]}
                    priority
                    style={{ objectPosition: imageData.objPosition }}
                    sizes="100vw"
                    // quality={100}
                />
            </div>
            <div className={styles["container-overlay-image"]} />
            {projectData &&
                <div className={`${styles["container-overlay-titles"]} ${telonActive && styles["action-titles"]}`}>
                    <div className={styles["wrapper-overlay"]}>
                        <div className={styles["container-titles"]}>
                            <p className={styles["title-title"]}>{projectData?.title}</p>
                            <div className={styles["wrapper-column"]}>
                                <p>{projectData?.year}</p>
                                <p>{projectData?.location}</p>
                            </div>
                            <p className={styles["title-mobile"]}>{projectData?.year} {projectData?.location}</p>
                        </div>
                    </div>
                </div>
            }
            {projectData &&
                <div className={styles["overlay-title-back"]}>
                    <div className={styles["title-back"]}>
                        <Link href={`/projects/${projectSlug}`}
                            className={styles["title"]}>Volver atrás</Link>
                    </div>
                </div>
            }
            {
                heroData &&
                <div className={styles["overlay-hero-container"]}>
                    <div className={styles["hero-wrapper"]}>
                        <div>
                            <p className={styles["hero-title"]}>{heroData.title}</p>
                            <p className={styles["hero-subtitle"]}>{heroData.subtitle}</p>
                        </div>
                        {/* <Link href={heroData.button.url} className={styles["hero-button"]}>
                            {heroData.button.title}
                        </Link> */}
                    </div>
                </div>
            }
        </section>
    )
}