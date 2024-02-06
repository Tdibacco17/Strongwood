import styles from "./BurgerMenuComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"

export function BurgerMenuComponent({
    isSecondary,
    isOpen,
    isAtTop,
    handleIsOpen
}: {
    isSecondary: boolean,
    isOpen: boolean,
    isAtTop: boolean,
    handleIsOpen: () => void
}) {
    return (
        <>
            {isOpen && <div className={styles['overlay-menu-container']} />}
            <div className={`${styles["container-section-burger-menu"]} ${isOpen ? styles["active"] : ""}`}>
                    {data.navbar.navigation.map((item: { title: string, url: string }, index: number) => {
                        return <Link href={item.url} key={index} className={styles["nav-title"]} onClick={handleIsOpen}>
                            {item.title}
                        </Link>
                    })}
            </div>
        </>
    )
}