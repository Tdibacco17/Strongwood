'use client'
import { handleScrollToSection } from '@/utils/scroll/scrollToSection'
import styles from "./BtnScrollComponent.module.scss"

export default function BtnTopComponent({ title }: { title: string }) {
    return (
        <div className={`${styles["container-text"]}`}
            onClick={() => handleScrollToSection("top")}>
            <span className={`${styles["text"]}`}>{title}</span>
        </div>
    )
}