'use client'
import Link from "next/link"
import data from "@/models/es.json"
import styles from "./NavItemsComponent.module.scss"
import { usePathname } from "next/navigation"

export default function NavItemsComponent() {
    const pathName = usePathname()
    let pathWithoutSubdirectories = pathName;

    if (pathName.startsWith("/projects")) {
        pathWithoutSubdirectories = pathName.replace(/\/projects\/.*/, "/projects");
    }

    return (
        <nav className={styles["container-nav-title"]}>
            {data.navbar.navigation.map((item: { title: string, url: string }, index: number) => {
                const active = pathName === item.url

                return <Link href={item.url} key={index} className={`${styles["nav-title"]} ${active ? styles["active"] : ""}`}>
                    {item.title}
                </Link>
            })}
        </nav>
    )
}