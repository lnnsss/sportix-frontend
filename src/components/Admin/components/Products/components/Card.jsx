import React from 'react';
import s from "../styles.module.css";

const Card = ({imageUrl, title, brand, price, category, gender}) => {
    return (
        <div className={s.productCard}>
            <div className={s.imageWrapper}>
                <img src={imageUrl} alt={title} className={s.image}/>
            </div>
            <div className={s.details}>
                <h2 className={s.productTitle}>{title}</h2>
                <p className={s.brand}>{brand}</p>
                <p className={s.price}>{price} ₽</p>
                <p className={s.category}>{category} — {gender}</p>
            </div>
        </div>
    );
};

export default Card;