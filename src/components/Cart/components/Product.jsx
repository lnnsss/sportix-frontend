import React from 'react';
import s from "../styles.module.css"
import {useStores} from "../../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";

const Product = observer(({id, image, name, price, quantity }) => {
    const {
        cart: {removeFromCart, changeQuantity}
    } = useStores()

    return (
        <div className={s.cart__item}>
            <img src={image} alt={name} className={s.cart__item_image}/>
            <div className={s.cart__item_details}>
                <h3 className={s.cart__item_name}>{name}</h3>
                <p className={s.cart__item_price}>Цена: {price} руб.</p>
                <div className={s.cart__item_quantity}>
                    <button onClick={() => changeQuantity(id, quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => changeQuantity(id, quantity + 1)}>+</button>
                </div>
            </div>
            <button className={s.cart__item_remove} onClick={() => removeFromCart(id)}>Удалить</button>
        </div>
    );
});

export default Product;