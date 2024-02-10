'use client'
import styles from "./VideoPlayerComponent.module.scss";
import data from "@/models/es.json";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function VideoPlayerComponent() {
    return (
        <section className={styles["container-section-video"]}>
            <p className={styles["title"]}>{data.homePage.video.title}</p>
            <div className={styles["wrapper"]}>
                <ReactPlayer
                    url={data.homePage.video.url}
                    controls={true}
                    preload="metadata"
                    width="100%"
                    height="100%"
                    fallback={<small className={`${styles["skeleton"]} loader`}>Cargando...</small>}
                />
            </div>
        </section>
    );
}
