import React from 'react';
import styles from './menu.module.scss'

interface IProps {
    item: string[];
    header: string;
    active: boolean;
    setActive: any;
}

const Menu = (props: IProps): JSX.Element => {
    return (
        <div className={`${styles.wrap} ${props.active ? 'active' : null}`}
             onClick={() => props.setActive(false)}>
            <div className={styles.content}>
                <div className={styles.header}>{props.header}</div>
                <ul>
                    {props.item.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;