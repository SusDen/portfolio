import React from 'react';
import styles from './dream-bdr.module.scss';
import iconSecond from '/src/assets/firstProjectIcon2.png'
import iconThird from '/src/assets/firstProjectIcon3.png'
import iconFirst from "/src/assets/firstProjectIcon1.png";

const DreamBdr = (): JSX.Element => {
    let Block = (image: string, smallText: string, bigText: string, blockNumber: string, shadowNumber: string): JSX.Element => {
        return (<>
                <div className={`${styles.block}  ${blockNumber}`}>
                    <div className={styles.blockImageContainer}>
                        <div className={styles.blockImage}>
                            <img src={image} alt=""/>
                        </div>
                    </div>
                    <div className={styles.blockBigText}>{bigText}</div>
                    <div className={styles.blockSmallTextContainer}>
                        <div className={styles.blockSmallText}>{smallText}</div>
                    </div>
                </div>
                <div className={shadowNumber}></div>
            </>

        )
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <div className={styles.titleBlock}>
                    <div className={styles.titleText}>
                        <div className={styles.smallText}>short introduction</div>
                        <div className={styles.bigText}>Dream big Do right.</div>
                    </div>
                </div>
                <div className={styles.blocks}>
                    {Block(iconFirst, 'Enjoy Order in a hand using the fresness of groceries', 'Free shipping', styles.block1, styles.blockShadow1)}
                    {Block(iconSecond, 'Order in a handy way using the freshness of the', '15 days returns', styles.block2, styles.blockShadow2)}
                    {Block(iconThird, 'If you get rotten items - return immediately to us.', 'Secure checkout', styles.block3, styles.blockShadow3)}
                </div>
            </div>
        </div>
    );
};

export default DreamBdr;