import React from 'react';
import s from "./styles.module.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`${s.__container} ${s.footer__container}`}>
                <Link className={s.footer__logo} to="/">
                    Sportix
                </Link>
                <div className={s.footer__contacts}>
                    <a href="tel:+79234567890">+7 923 456-78-90</a>
                    <a href="mailto:sportix@gmail.com">sportix@gmail.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;