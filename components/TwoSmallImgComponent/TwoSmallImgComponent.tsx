import Image from "next/image"
import styles from "./TwoSmallImgComponent.module.scss"
import { ImgDataInterface } from "@/types"
import TechnicalInfoComponent from "../TechnicalInfoComponent/TechnicalInfoComponent"
import { TechnicalInfoInterface } from "@/types/ProjectsTypes"

export default function TwoSmallImgComponent({
    imagesData,
    isReverse,
    isColumnReverse,
    technicalInfo
}: {
    imagesData?: ImgDataInterface[]
    isReverse: boolean,
    isColumnReverse?: boolean
    technicalInfo?: TechnicalInfoInterface
}) {
    return (
        <section className={`${styles["container-section-twoImages"]} ${isReverse && styles["reverse"]} ${isColumnReverse && styles["isColumnReverse"]}`}>
            {technicalInfo
                ? <>
                    <div className={`${styles["container-column"]}`}>
                        <div className={`${styles["container-outer-info"]}`}>
                            <TechnicalInfoComponent technicalInfo={technicalInfo} />
                        </div>
                    </div>
                    <div className={`${styles["container-column"]} ${styles["second"]}`}>
                        <div className={`${styles["container-outer-image"]} ${styles["second"]}`}>
                            <Image
                                src={technicalInfo.image.imgSrc}
                                alt={technicalInfo.image.imgAlt}
                                fill
                                style={{ objectPosition: technicalInfo.image.objPosition }}
                                className={`${styles["container-inner-image"]}`}
                                // sizes="(max-width: 768px) 90vw, 100vw"
                                quality={100}
                            />
                            <small className="loader">Cargando...</small>
                        </div>
                    </div>
                </>
                : <>
                    {
                        imagesData && imagesData.map((imageData: ImgDataInterface, index: number) => {
                            return (
                                <div key={index} className={`${styles["container-column"]} ${index === 1 && styles["second"]}`}>
                                    <div className={`${styles["container-outer-image"]} ${index === 1 && styles["second"]}`}>
                                        <Image
                                            src={imageData.imgSrc}
                                            alt={imageData.imgAlt}
                                            fill
                                            style={{ objectPosition: imageData.objPosition }}
                                            className={`${styles["container-inner-image"]}`}
                                            // sizes="(max-width: 992px) 20rem, (max-width: 768px) 90vw, 100vw"
                                            quality={100}
                                        />
                                        <small className="loader">Cargando...</small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>}
        </section>
    )
}