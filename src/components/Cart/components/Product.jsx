import React, {useEffect, useState} from 'react';
import s from "../styles.module.css"
import {useStores} from "../../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";
import {apiCartsURL, apiProductsURL} from "../../../configs/constants.js";
import axios from "axios";

const Product = observer(({id, count }) => {
    const {
        cart: {removeFromCart, changeCount},
        token: { getID }
    } = useStores()
    const cartId = getID()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    // запрос
    useEffect(() => {

        const fetchProductData = async () => {
            try {
                const response = await axios.get(`${apiProductsURL}/${id}`);

                const { title, price, imageUrl } = response.data.content;

                setTitle(title || "");
                setPrice(price || 0);
                setImageUrl(imageUrl || "");

            } catch (err) {
                console.error(err);
            }
        };

        fetchProductData();

    }, [id]);

    // добавление товара
    const handleAdd = async () => {
        changeCount(id, count + 1)
        await axios.put(`${apiCartsURL}/${cartId}/add`, {productId: id});
    }

    // убавление товара
    const handleDecrease = async () => {
        changeCount(id, count - 1)
        await axios.put(`${apiCartsURL}/${cartId}/add`, {productId: id, count: -1 });
    }

    // удаление товара
    const handleRemove = async () => {
        removeFromCart(id)
        await axios.put(`${apiCartsURL}/${cartId}/add`, {productId: id, count: (-1 * count) });
    }

    return (
        <div className={s.cart__item}>
            <img src={imageUrl} alt={title} className={s.cart__item_image}/>
            <div className={s.cart__item_details}>
                <h3 className={s.cart__item_name}>{title}</h3>
                <p className={s.cart__item_price}>Цена: {price * count} руб.</p>
                <div className={s.cart__item_quantity}>
                    <button onClick={handleDecrease}>-</button>
                    <span>{count}</span>
                    <button onClick={handleAdd}>+</button>
                </div>
            </div>
            <button className={s.cart__item_remove} onClick={handleRemove}>Удалить</button>
        </div>
    );
});

export default Product;