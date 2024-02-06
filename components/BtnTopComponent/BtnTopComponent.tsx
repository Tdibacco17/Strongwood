'use client'
import { handleScrollToSection } from '@/utils/scroll/scrollToSection'
import styles from "./BtnTopComponent.module.scss"

export default function BtnTopComponent({ showButton }: { showButton: boolean }) {
    return (
        <section className={`${styles["layout-btn"]} ${showButton ? styles["active"] : ""}`}>
            <div className={`${styles["container-icon"]}`} onClick={() => handleScrollToSection("top")}>
                <svg
                    fill="none"
                    viewBox="0 0 512 512"
                    width={"1.5rem"}
                    height={"1.5rem"}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
                        className={styles["icon-svg"]}
                    />
                </svg>
            </div>
        </section>
    )
}