import { Roboto, Lato, Montserrat } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: 'normal',
    preload: true,
    variable: '--strongwood-font',
    display: 'swap'
})

export const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: 'normal',
    preload: true,
    variable: '--strongwood-font-lato',
    display: 'swap',
    fallback: ['sans-serif']
})

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: 'normal',
    preload: true,
    variable: '--strongwood-font-montserrat',
    display: 'swap',
    fallback: ['sans-serif']
})