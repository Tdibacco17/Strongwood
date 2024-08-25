'use client'
import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function GoogleProvider({ children }: { children: ReactNode }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={'6LcYoC4qAAAAAIJjfAUco4f5uQd7MRXvhGpVHi46'}
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