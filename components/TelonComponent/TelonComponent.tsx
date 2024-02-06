import { useEffect, useState } from "react"
import styles from "./TelonComponent.module.scss"

export default function TelonComponent({
    telonActive,
    rectangleActive,
}: {
    telonActive?: boolean,
    rectangleActive?: boolean,
}) {
    const [disableTelon, setDisableTelon] = useState<boolean>(false)

    useEffect(() => {
        if (telonActive) {
            setTimeout(() => {
                setDisableTelon(true)
            }, 650)
        }
    }, [telonActive])
    
    return (
        <section className={`${styles["container-section-telon"]} ${telonActive && styles["telon-active"]} ${disableTelon && styles["disable-telon"]}`}>
            <div className={styles["container-rectangle-action"]}>
                <p className={styles["title-telon"]}>StrongWood</p>
                <div className={`${styles["rectangle"]} ${rectangleActive && styles["rectangle-active"]}`} />
            </div>
        </section>
    )
}