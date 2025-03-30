import React from 'react';
import {observer, useObserver} from 'mobx-react-lite';
import s from "./styles.module.css"
import {useStores} from "../../stores/root-store-context.js";
import Product from "./components/Product.jsx";

const Cart = observer(() => {
    const {
        cart: {cartItems, removeFromCart, changeQuantity}
    } = useStores()

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return useObserver(() => (
        <div className={s.cart}>
            <div className={`${s.__container} ${s.cart__container}`}>
                <h1>Корзина</h1>

                {cartItems.length === 0 ? (
                    <p>В корзине пусто.</p>
                ) : (
                    <>
                        <div className={s.cart__items}>
                            {cartItems.map(item => <Product key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} />)}
                        </div>

                        <div className={s.cart__summary}>
                            <p>Итого: {calculateTotal()} руб.</p>
                            <button className={s.cart__checkout}>Купить</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    ));
});

export default Cart;