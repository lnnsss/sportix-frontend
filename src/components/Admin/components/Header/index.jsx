import React, {useState} from 'react';
import s from "./styles.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useStores} from "../../../../stores/root-store-context.js";
import HeaderLink from "./components/HeaderLink.jsx";

const AdminHeader = () => {
    const [burgerActive, setBurgerActive] = useState(false);
    const {
        token: { clearToken }
    } = useStores();
    const navigate = useNavigate();

    const handleLogOut = () => {
        clearToken();
        navigate("/")
    }

    return (
        <header className={s.header}>
            <div className={`${s.__container} ${s.header__container}`}>
                <div className={s.header__body}>
                    <Link className={s.header__logo} to="/admin">
                        Sportix
                    </Link>
                    <div
                        className={`${s.header__burger} ${burgerActive ? s.active : ""}`}
                        onClick={() => setBurgerActive(!burgerActive)}
                    >
                        <span></span>
                    </div>
                    <nav className={`${s.header__menu} ${burgerActive ? s.active : ""}`}>
                        <ul className={s.header__list}>
                            <HeaderLink path={"users"}>Пользователи</HeaderLink>
                            <HeaderLink path={"products"}>Товары</HeaderLink>
                            <li>
                                <button className={`${s.header__link} ${s.logOut}`} onClick={handleLogOut}>Выйти</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;