export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string,
    objPosition: string
}

export interface IconProps {
    fill: string,
    // size?: "big" | "medium",
    hover: boolean,
    link?: string,
    isButton?: () => void,
    isDesktop?: boolean,
    isMobile?: boolean
}

export type NavInterface = "primary" | "secondary"

export interface HeroDataInterface {
    title: string,
    subtitle: string,
    button: {
        url: string,
        title: string
    }
}

export interface ContactInterface {
    title: string,
    address: string,
    href: string,
    icon?: boolean,
    classType?: string
}