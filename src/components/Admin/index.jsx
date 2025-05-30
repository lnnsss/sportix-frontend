import React, {useEffect, useState} from 'react';
import s from "./styles.module.css";
import axios from "axios";
import {apiUsersURL} from "../../configs/constants.js";

const Admin = () => {
    const [productsCount, setProductsCount] = useState(7);
    const [usersCount, setUsersCount] = useState(7);
    const [ordersCount, setOrdersCount] = useState(7);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const productsResponse = await axios.get(`${apiProductsURL}/count`)
                setProductsCount(productsResponse.data.content)

                const usersResponse = await axios.get(`${apiUsersURL}/count`)
                setUsersCount(usersResponse.data.content)
            } catch (err) {
                console.error(err)
            }
        };
        fetchCounts()
    }, [])

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
