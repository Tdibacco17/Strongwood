import { Roboto } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: 'normal',
    preload: true,
    variable: '--strongwood-font',
    display: 'swap'
})