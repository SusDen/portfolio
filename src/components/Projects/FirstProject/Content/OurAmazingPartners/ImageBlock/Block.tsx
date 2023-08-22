import styles from "../our-parrents.module.scss";
import React from "react";
import imageFirst from '/src/assets/firstProjectCompanyIcon1.png'
import imageSecond from '/src/assets/firstProjectCompanyIcon2.png'
import imageThird from '/src/assets/firstProjectCompanyIcon3.png'
import imageFourth from '/src/assets/firstProjectCompanyIcon4.png'
import {useMediaQuery} from "react-responsive";
import {randomInt} from "../../../../../../constans";


const imagesLowResp: string[] = [imageFirst, imageSecond]
const imagesMedResp: string[] = [...imagesLowResp, imageThird]
let images: string[] = [...imagesMedResp, imageFourth]


const Block = (): JSX.Element => {


  let isLowSize: boolean = useMediaQuery({maxWidth: 800})
  let isMobile: boolean = useMediaQuery({maxWidth: 480})
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
            <img src={images[randomInt(images.length)]} alt="blockImage"/>
          </div>
        )
      })}
    </div>
  )
};
export default Block