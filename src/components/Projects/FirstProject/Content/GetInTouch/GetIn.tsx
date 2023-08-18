import React, {useState} from 'react';
import styles from './get-in.module.scss'

const GetIn = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('Type your Email Address');

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (event: any) => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError('Email is valid');
        }
        if (event.target.value === '') {
            setError('Type your Email Address')
        }
        setEmail(event.target.value);
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <div className={styles.textBlock}>
                    <div>Get In Touch<span>.</span></div>
                    <div>short introduction</div>
                </div>
                <form>
                    <div className={styles.placeholder}>{error}</div>
                    <input className={styles.searchBar}
                           value={email}
                           onChange={handleChange}
                           placeholder={"example@gmail.com"}/>
                    <div className={styles.sendButton}>Send Now</div>
                </form>
            </div>
        </div>
    );
};

export default GetIn;