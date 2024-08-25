'use client'
import { Children, ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function GoogleProvider({ children }: { children: ReactNode }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY || ''}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    )
}