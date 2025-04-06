import React from 'react';
import s from "./styles.module.css";

const Admin = () => {
    const productsCount = 7;
    const usersCount = 7;
    const ordersCount = 7;

    return (
        <div className={s.admin}>
            <div className={`__container ${s.admin__container}`}>
                <h1 className={s.title}>Админ-панель</h1>
                <div className={s.cards}>
                    <div className={s.card}>
                        <h2 className={s.cardTitle}>Кол-во товаров на сайте:</h2>
                        <p className={s.cardNumber}>{productsCount}</p>
                    </div>
                    <div className={s.card}>
                        <h2 className={s.cardTitle}>Кол-во зарегистрированых пользователей:</h2>
                        <p className={s.cardNumber}>{usersCount}</p>
                    </div>
                    <div className={s.card}>
                        <h2 className={s.cardTitle}>Кол-во заказов:</h2>
                        <p className={s.cardNumber}>{ordersCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
