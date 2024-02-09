'use client'
import styles from "./VideoPlayerComponent.module.scss";
import data from "@/models/es.json";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function VideoPlayerComponent() {
    return (
        <section className={styles["container-section-video"]}>
            {/* <ReactPlayer
                className={styles["video"]}
                url={data.homePage.video.url}
                controls={true}
                preload="metadata"
                fallback={<div className={styles["skeleton-video"]} />}
            /> */}
        </section>
    );
}
