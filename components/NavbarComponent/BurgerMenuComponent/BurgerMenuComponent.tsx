import styles from "./BurgerMenuComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"

export function BurgerMenuComponent({
    isOpen,
    handleIsOpen,
    pathName
}: {
    isOpen: boolean,
    handleIsOpen: () => void,
    pathName: string
}) {
    return (
        <>
            {isOpen && <div className={styles['overlay-menu-container']} />}
            <section className={`${styles["container-section-burger-menu"]} ${isOpen ? styles["active"] : ""}`}>
                <div className={styles["wraper"]}>
                    {data.navbar.navigation.map((item: { title: string, url: string }, index: number) => {
                        const active = pathName === item.url;
                        return <Link href={item.url} key={index} className={`${styles["nav-title"]} ${active ? styles["active"] : ""}`} onClick={handleIsOpen}>
                            {item.title}
                        </Link>
                    })}
                </div>
            </section>
        </>
    )
}