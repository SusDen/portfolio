import React, {useState} from 'react';
import styles from './company-profile.module.scss'
import firstImage from '/src/assets/firstProjectSlider.png';
import secondImage from '/src/assets/firstProjectSlider2.png';
import thirstImage from '/src/assets/firstProjectSlider3.png';
import fourthImage from '/src/assets/firstProjectSlider4.png';
import circle from '/src/assets/firstProjectCircle.png';


const CompanyProfile = (): JSX.Element => {
    let [activeImg, setActiveImg] = useState(1);
    const images: any[] = [firstImage, secondImage, thirstImage, fourthImage]


    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        // @ts-ignore
        timeoutRef.current = setTimeout(
            () =>
                setActiveImg((prevIndex) =>
                    prevIndex == images.length ? 1 : prevIndex + 1
                ),
            4000
        );

        return () => {
            resetTimeout();
        };
    }, [activeImg]);
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <div className={styles.titleText}>
                    Company Profile<span>.</span>
                    <div className={styles.subTitleText}>
                        Short introduction
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentCircle}>
                        <img src={circle} alt=""/>
                    </div>
                    <div className={styles.contentImage}>
                        <div className={styles.slider}>
                            <ul>
                                <li className={activeImg == 1 ? 'active' : ''} onClick={() => setActiveImg(1)}></li>
                                <li className={activeImg == 2 ? 'active' : ''} onClick={() => setActiveImg(2)}></li>
                                <li className={activeImg == 3 ? 'active' : ''} onClick={() => setActiveImg(3)}></li>
                                <li className={activeImg == 4 ? 'active' : ''} onClick={() => setActiveImg(4)}></li>
                            </ul>
                        </div>
                        <img src={images[activeImg - 1]} alt=""/>
                    </div>
                    <div className={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;