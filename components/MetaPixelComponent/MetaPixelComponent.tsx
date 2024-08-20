"use client";
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

export const FacebookPixelEvents = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init("308659638359795");
                ReactPixel.pageView();
            })
    }, [pathname, searchParams])

    return null;
};