import React, {useState} from 'react';
import {Link} from "react-router-dom";
import s from "./styles.module.css"
import HeaderLink from "./components/HeaderLink.jsx";
import {useStores} from "../../stores/root-store-context.js";

const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false);
    const {
        token: { token }
    } = useStores();

    return (
        <header className={s.header}>
            <div className={`${s.__container} ${s.header__container}`}>
                <div className={s.header__body}>
                    <Link className={s.header__logo} to="/">
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
                            <HeaderLink path={"catalog"}>Каталог</HeaderLink>
                            <HeaderLink path={"cart"}>Корзина</HeaderLink>
                            {
                                token
                                    ? (
                                        <>
                                            <HeaderLink path={"account"}>Личный кабинет</HeaderLink>
                                        </>
                                    )
                                    : (
                                        <>
                                            <HeaderLink path={"registration"}>Регистрация</HeaderLink>
                                            <HeaderLink path={"login"}>Вход</HeaderLink>
                                        </>
                                    )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;