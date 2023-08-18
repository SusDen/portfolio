import React from 'react';
import styles from './our-parrents.module.scss'
import imageFirst from '/src/assets/firstProjectCompanyIcon1.png'
import imageSecond from '/src/assets/firstProjectCompanyIcon2.png'
import imageThird from '/src/assets/firstProjectCompanyIcon3.png'
import imageFourth from '/src/assets/firstProjectCompanyIcon4.png'
import {useMediaQuery} from 'react-responsive'

const OurPartners = (): JSX.Element => {
    let isLowSize: boolean = useMediaQuery({maxWidth: 800})
    let isMobile: boolean = useMediaQuery({maxWidth: 480})

    let imagesLowResp: string[] = [imageFirst, imageSecond]
    let imagesMedResp: string[] = [...imagesLowResp, imageThird]
    let images: string[] = [...imagesMedResp, imageFourth]

    function RandomInt(max: number): number {
        return Math.floor(Math.random() * max)
    }


    let Block = (): JSX.Element => {
        if (isLowSize) {
            images = imagesMedResp
        }
        if (isMobile) {
            images = imagesLowResp
        }
        return (
            <div className={styles.contentBlock}>
                {images.map((index) => {
                    return (
                        <div key={index} className={styles.contentImage}>
                            <img src={images[RandomInt(images.length)]} alt=""/>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <div className={styles.titleBlock}>
                    <div className={styles.titleBigText}>
                        Our Amazing Partners<span>.</span>
                    </div>
                    <div className={styles.titleSmallText}>
                        short introduction
                    </div>
                </div>
                {Block()}
                {Block()}
                {Block()}
                {Block()}
            </div>
        </div>
    );
};

export default OurPartners;