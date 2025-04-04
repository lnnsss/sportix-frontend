import React from 'react';
import s from "../styles.module.css";
import { Link } from "react-router-dom";

const Product = ({ id, imageUrl, title, brand, category, price }) => {

    const handleAddToCart = (event) => {
        event.stopPropagation();
        event.preventDefault();
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
};

export default Product;