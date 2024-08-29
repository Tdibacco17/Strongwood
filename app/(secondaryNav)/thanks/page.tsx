import Link from "next/link"
import styles from "./page.module.scss"

export default function ThanksPage() {
    return (
        <section className={styles["container-thanks-page"]}>
            <p className={styles["title-container"]}>
                <span className={styles["title"]}>
                    Gracias por escribirnos,
                </span>
                <span className={styles["title"]}>
                    pronto nos comunicaremos con vos.
                </span>
            </p>
            <Link href={"/"} className={styles["go-home"]}>Volver al inicio</Link>
        </section>
    )
}