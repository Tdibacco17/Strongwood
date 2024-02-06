import Image from 'next/image'
import styles from "./RectangleImgComponent.module.scss"
import { ImgDataInterface } from '@/types'

export default function RectangleImgComponent({
    imageData,
}: {
    imageData: ImgDataInterface,
}) {
    return (
        <section className={`${styles["container-outer-image"]}`}>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                className={styles["container-inner-image"]}
                style={{ objectPosition: imageData.objPosition }}
                sizes="(max-width: 768px) 90vw, 100vw"
            />
            <small className="loader">Cargando...</small>
        </section>
    )
}