'use server'
import { template } from "@/utils/templateHtml";
import nodemailer from "nodemailer"

export const ContactFormAction = async (formdata: FormData, gRecaptchaToken: string): Promise<{ success: boolean }> => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const formSecret = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formSecret,
        });

        if (!response.ok) {
            throw new Error(`Network responseponse was not ok: ${response.status}`);
        }
        const responseData = await response.json();
        
        // Validar la respuesta de reCAPTCHA
        if (responseData.success && responseData.score > 0.5) {
            console.log("Score: ", responseData.score);

            const name = formdata.get('name') as string;
            const email = formdata.get('email') as string;
            const phone = formdata.get('phone') as string;
            const coment = formdata.get('coment') as string;
            const service = formdata.get('service') as string;

            if (!name || !email || !phone || !coment || !service) {
                console.log('Todos los campos son obligatorios.');
                return { success: false }
            }

            const contentHtml = template({ name, email, phone, coment, service });

            const transporter = nodemailer.createTransport({
                host: `${process.env.EMAIL_SERVICE}`,
                port: 465,
                secure: true,
                auth: {
                    user: `${process.env.EMAIL_USERNAME}`,
                    pass: `${process.env.EMAIL_PASSWORD}`,
                },
            });

            // Verificamos la configuración del servidor de correo
            await transporter.verify();

            // Enviamos el correo
            const info = await transporter.sendMail({
                from: process.env.EMAIL_USERNAME,
                to: process.env.EMAIL_USERNAME,
                subject: "Contacto - Pagína web",
                html: contentHtml,
            });

            console.log("Message sent: %s", info.messageId);
            return { success: true };
        } else {
            console.log('Invalid reCAPTCHA token or score is too low.');
            return { success: false };
        }
    } catch (error) {
        console.log(error)
        return { success: false };
    }
}