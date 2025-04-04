import React from 'react';
import s from "./style.module.css"
import {Link} from "react-router-dom";

const Shop = () => {
    return (
        <section className={s.shop}>
            <div className={`${s.__container} ${s.shop__container}`}>
                <h1>Ваш путь к активной жизни!</h1>
                <h2>
                    Sportix — это ваш надежный партнер в мире спорта и активного отдыха.
                    Мы предлагаем широкий ассортимент спортивных товаров, от экипировки до
                    аксессуаров, чтобы поддержать вас на каждом шаге вашего спортивного
                    пути.
                </h2>
                <div className={s.shop__buttons}>
                    <Link
                        to="catalog"
                        className={`${s.shop__button} ${s.shop__button__color}`}
                    >
                        Товары
                    </Link>
                    <button className={s.shop__button}>Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default Shop;