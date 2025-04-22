import React, {useEffect} from 'react';
import {observer, useObserver} from 'mobx-react-lite';
import s from "./styles.module.css"
import {useStores} from "../../stores/root-store-context.js";
import Product from "./components/Product.jsx";
import axios from "axios";
import {apiUsersURL} from "../../configs/constants.js";

const Cart = observer(() => {
    const {
        cart: {cartItems, setCartItems, totalPrice},
        token: { getID }
    } = useStores()
    const id = getID()

    useEffect( () => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(`${apiUsersURL}/${id}/cart`)
                const items = response.data.content.cartItems
                setCartItems(items)

            } catch (err) {
                console.error(err)
            }
        }
        fetchCart()
    }, [id])

    return useObserver(() => (
        <div className={s.cart}>
            <div className={`${s.__container} ${s.cart__container}`}>
                <h1>Корзина</h1>

                {cartItems.length === 0 ? (
                    <p>В корзине пусто.</p>
                ) : (
                    <>
                        <div className={s.cart__items}>
                            {cartItems.map(item => <Product key={item.id} id={item.id} count={item.count} />)}
                        </div>

                        <div className={s.cart__summary}>
                            <p>Итого: {totalPrice} руб.</p>
                            <button className={s.cart__checkout}>Купить</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    ));
});

export default Cart;
