'use client'
import React from "react";
import Slider from "react-slick";
import styles from "./SliderComponent.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function SliderComponent() {
    // const router = useRouter();
    // const [isDragging, setDragging] = useState(false);

    // const handleClick = (textLink: string, event: any) => {
    //     if (event.button === 0 && !isDragging) {
    //         router.push(textLink)
    //     }
    // };
    // onMouseMove={() => { setDragging(true) }}
    // onMouseDown={() => { setDragging(false) }}
    // onMouseUp={(event) => handleClick(`/${item.url}`, event)}

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 750,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };



    return (
        <div className={`${styles["container-slider"]}`}>
            <div className="slider-container">
                <Slider {...settings}>
                    <Link href={"https://cubearq.com.ar/"} target="_blank" className={styles["img-container"]}>
                        <Image width={125} height={125} alt="cube" src={'/assets/newImgs/cube.jpg'}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    </Link>
                    <Link href={"https://bou.com.ar/"} target="_blank" className={styles["img-container"]}>
                        <Image width={125} height={125} alt="bou" src={'/assets/newImgs/welcome-scaled.jpeg'}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    </Link>
                    <Link href={"https://www.instagram.com/cicciarohelouarq/"} target="_blank" className={styles["img-container"]}>
                        <Image width={125} height={125} alt="cicciaro&helou" src={'/assets/newImgs/cicciarohelou.jpg'}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    </Link>
                    <Link href={"https://www.mikaelianpropiedades.com/"} target="_blank" className={styles["img-container"]}>
                        <Image width={125} height={125} alt="mikaelian" src={'/assets/newImgs/mikaelian.jpg'}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    </Link>
                    <Link href={"https://www.instagram.com/oja.arquitectos/"} target="_blank" className={styles["img-container"]}>
                        <Image width={125} height={125} alt="oja" src={'/assets/newImgs/oja.jpeg'}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    </Link>
                    <Link href={"https://www.instagram.com/estudio_vm/"} target="_blank" className={styles["img-container"]}>
                        <Image width={125} height={125} alt="estudioVm" src={'/assets/newImgs/estudio-vm.jpg'}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
                    </Link>
                </Slider>
            </div>
        </div>
    );
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className={styles["container-right-arrow"]}>
            <div
                className={`${styles["right-arrow"]}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <div className={`${styles["container-icon"]}`}>
                    <svg strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" className={styles["icon-svg"]}>
                        <path fill="none" d="M0 0h24v24H0V0z">
                        </path>
                        <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className={styles["container-left-arrow"]}>
            <div
                className={`${styles["left-arrow"]}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <div className={`${styles["container-icon"]}`}>
                    <svg strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" className={styles["icon-svg"]}>
                        <path fill="none" d="M0 0h24v24H0V0z">
                        </path>
                        <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>

    );
}