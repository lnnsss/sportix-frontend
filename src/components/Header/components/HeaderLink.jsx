import React from 'react';
import s from "../styles.module.css";
import {Link} from "react-router-dom";

const HeaderLink = ({path, children}) => {
    return (
        <li>
            <Link to={path} className={s.header__link}>
                {children}
            </Link>
        </li>
    );
};

export default HeaderLink;