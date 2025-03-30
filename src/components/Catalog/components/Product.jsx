import React from 'react';
import s from "../styles.module.css"

const Product = ({image, name, brand, category, price}) => {
    return (
        <div className={s.product__card}>
            <img src={image} alt={name} className={s.product__image}/>
            <h3 className={s.product__name}>{name}</h3>
            <p className={s.product__brand}>Brand: {brand}</p>
            <p className={s.product__category}>Category: {category}</p>
            <p className={s.product__price}>Price: ${price}</p>
            <button className={s.product__button}>В корзину</button>
        </div>
    );
};

export default Product;