'use client'
import { ContactFormAction } from "@/app/actions"
import styles from "./ContactForm.module.scss"
import { useRef, useState } from "react"
import Toast from "../Toast/Toas";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!executeRecaptcha) {
            setToast({ message: 'ReCAPTCHA no está disponible', type: 'error' });
            setLoading(false);
            return;
        }
        try {
            const gRecaptchaToken = await executeRecaptcha("enquiryFormSubmit");
            console.log("reCAPTCHA Token:", gRecaptchaToken);
            
            const formData = new FormData(formRef.current!);
            const result: { success: boolean } = await ContactFormAction(formData, gRecaptchaToken);

            if (result.success) {
                setToast({ message: 'Formulario enviado con éxito', type: 'success' });
                formRef.current?.reset();
            } else {
                setToast({ message: 'Hubo un error al enviar el formulario', type: 'error' });
            }
        } catch (error) {
            setToast({ message: 'Hubo un error al validar el reCAPTCHA', type: 'error' });
        } finally {
            setLoading(false);
        }
    }

    const handleCloseToast = () => {
        setToast(null);
    };

    return (
        <section id="contactForm" className={styles["contact-section"]}>
            <p className={styles["title"]}>Contacto</p>
            <form ref={formRef} onSubmit={handleForm} className={styles["form-container"]}>
                <div className={styles["form-row"]}>
                    <label className={styles["form-col"]}>
                        <p>Nombre completo<span>*</span></p>
                        <input required id="name" name="name" type="text" placeholder="Nombre completo" />
                    </label>
                    <label className={styles["form-col"]}>
                        <p>Correo electronico<span>*</span></p>
                        <input required name="email" type="email" placeholder="Correo electronico" />
                    </label>
                </div>
                <div className={styles["form-row"]}>
                    <label className={styles["form-col"]}>
                        <p>Teléfono<span>*</span></p>
                        <input required name="phone" type="text" placeholder="Teléfono" />
                    </label>
                    <label className={styles["form-col"]}>
                        <p>Tipo de servicio<span>*</span></p>
                        <select name="service" defaultValue="" required>
                            <option value="" disabled hidden>Tipo de servicio</option>
                            <option value="Muebles de cocina y bodegas">Muebles de cocina y bodegas</option>
                            <option value="Vanitories, mesadas y canastos de ropa">Vanitories, mesadas y canastos de ropa</option>
                            <option value="Racks de TV y Winebars">Racks de TV y Winebars</option>
                            <option value="Recibidores y muebles de optionving">Recibidores y muebles de optionving</option>
                            <option value="Aparadores y cómodas de comedor">Aparadores y cómodas de comedor</option>
                            <option value="Camas, cunas y mesas de luz">Camas, cunas y mesas de luz</option>
                            <option value="Lavaderos">Lavaderos</option>
                            <option value="Placares y vestidores">Placares y vestidores</option>
                            <option value="Escritorios y equipamiento de oficinas">Escritorios y equipamiento de oficinas</option>
                            <option value="Mostradores y equipamiento de locales">Mostradores y equipamiento de locales</option>
                        </select>
                    </label>
                </div>
                <label className={styles["form-col"]}>
                    <p>Consulta o comentario</p>
                    <textarea name="coment" placeholder="Consulta o comentario" className={styles["form-textarea"]} />
                </label>
                <button disabled={loading} type="submit" className={styles["form-button"]}>
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
            {toast && (
                <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />
            )}
        </section>
    )
}