import React from 'react';
import s from "../styles.module.css";
import { Link } from "react-router-dom";
import {useStores} from "../../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";
import axios from "axios";
import {apiCartsURL} from "../../../configs/constants.js";

const Product = observer(({ id, imageUrl, title, brand, category, price }) => {
    const {
        token: { getID }
    } = useStores()
    const cartId = getID();

    const handleAddToCart = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {

            const data = { productId: id };
            const response = await axios.put(`${apiCartsURL}/${cartId}/add`, data);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Link to={`/catalog/${id}`} className={s.product__card}>
            <img src={imageUrl} alt={title} className={s.product__image}/>
            <h3 className={s.product__name}>{title}</h3>
            <p className={s.product__brand}>Бренд: {brand}</p>
            <p className={s.product__category}>Категория: {category}</p>
            <p className={s.product__price}>Цена: {price} руб.</p>
            <button onClick={handleAddToCart} className={s.product__button}>
                В корзину
            </button>
        </Link>
    );
});

export default Product;