import React from 'react';
import styles from './menu.module.scss'
import {Link} from "react-scroll";


interface IProps {
    item: any[];
    header: string;
    active: boolean;
    setActive: any;
    styles: object;
}

const Menu = (props: IProps): JSX.Element => {
    return (
        <div className={`${styles.wrap} ${props.active ? 'active' : null}`}
             onClick={() => props.setActive(false)}
        >
            <div className={styles.content} style={props.styles}>
                <div className={styles.header} style={props.styles}>{props.header}</div>
                <ul>
                    {props.item.map((item, index) =>
                        <Link
                            to={item.action}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            key={index}
                        >
                            <li style={props.styles}>{item.title}</li>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;