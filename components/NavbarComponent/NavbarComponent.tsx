import Link from "next/link"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/es.json"
import { NavInterface } from "@/types"
import { BurgerMenuComponent } from "./BurgerMenuComponent/BurgerMenuComponent"
import BtnTopComponent from "../BtnTopComponent/BtnTopComponent"

export default function NavbarComponent({
    navType,
    isAtTop,
    isOpen,
    handleIsOpen,
    pathName,
    showButton
}: {
    navType: NavInterface,
    isAtTop: boolean,
    isOpen: boolean
    handleIsOpen: (isCLose?: boolean) => void,
    pathName: string,
    showButton: boolean
}) {
    return (
        <>
            <header className={`${styles["container-section-navbar"]} ${navType === "primary" && isAtTop ? "" : styles['active']} ${!isOpen ? "" : styles['active-menu']}`}>
                <div className={styles["wrapper-navbar"]}>
                    <Link href={"/"} className={styles["logo"]} onClick={() => handleIsOpen(true)}>{data.navbar.title}</Link>
                    <nav className={styles["container-nav-title"]}>
                        {data.navbar.navigation.map((item: { title: string, url: string }, index: number) => {
                            const active = pathName === item.url;
                            return <Link href={item.url} key={index} className={`${styles["nav-title"]} ${active ? styles["active"] : ""}`}>
                                {item.title}
                            </Link>
                        })}
                    </nav>
                    {!isOpen
                        ? <div onClick={() => handleIsOpen()} className={styles['container-burgermenu']}>
                            <svg
                                width={"2rem"}
                                height={"2rem"}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                                    className={`${styles['icon-svg']} ${navType === "primary" && isAtTop ? "" : styles['active']} ${!isOpen ? "" : styles['active-menu']}`}
                                />
                            </svg>
                        </div>
                        : <div onClick={() => handleIsOpen()} className={styles['container-burgermenu']}>
                            <svg
                                width={"2rem"}
                                height={"2rem"}
                                fill="none"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            ><path
                                    d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
                                    className={`${styles['icon-svg']} ${navType === "primary" && isAtTop ? "" : styles['active']} ${!isOpen ? "" : styles['active-menu']}`}
                                />
                            </svg>
                        </div>}
                    <BurgerMenuComponent
                        isOpen={isOpen}
                        handleIsOpen={() => handleIsOpen()}
                        pathName={pathName}
                    />
                </div>
            </header>
            {!isOpen && <BtnTopComponent showButton={showButton} />}
        </>
    )
}