'use client'
import { handleScrollToSection } from "@/utils/scroll/scrollToSection";

export function BtnScrollToSection({ styles }: { styles: any }) {
    return (
        <div onClick={() => handleScrollToSection('secondSection')} className={styles["btn-action"]}>
            ¿POR QUÉ ELEGIR STRONGWOOD?
        </div>
    )
}

export function OtherBtnScrollToSection({ styles }: { styles: any }) {
    return (
        <div onClick={() => handleScrollToSection('contactForm')} className={styles["wpp-desktop"]}>
            PEDIR PRESUPUESTO
        </div>
    )
}