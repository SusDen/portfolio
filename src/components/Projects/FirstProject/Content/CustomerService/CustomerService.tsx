import React from 'react';
import styles from './customer-service.module.scss'
import iconFirst from "/src/assets/firstProjectIcon1.svg";
import iconSecond from "/src/assets/firstProjectIcon2.svg";
import iconThird from "/src/assets/firstProjectIcon3.svg";

const CustomerService = (): JSX.Element => {
    let Block = (image: string, text: string): JSX.Element => {
        return (
            <div className={styles.contactBlock}>
                <div className={styles.icon}>
                    <img src={image} alt=""/>
                </div>
                <div className={styles.contactBlockText}>{text}</div>
            </div>
        )
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <div className={styles.contacts}>
                    <div className={styles.titleTextBlock}>
                        <div className={styles.titleTextBig}>Customer service<span>.</span></div>
                        <div className={styles.titleTextSmall}>short introduction</div>
                    </div>
                    <div className={styles.contactBlockWrap}>
                        {Block(iconFirst, "+1-234-567-890")}
                        {Block(iconSecond, "Financial Service@gmail.com")}
                        {Block(iconThird, "Rockefeller PlazaNew York, NY 10112")}
                    </div>
                </div>
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.3770455823!2d30.532690549999998!3d50.402035500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1691178538332!5m2!1sru!2sua"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;