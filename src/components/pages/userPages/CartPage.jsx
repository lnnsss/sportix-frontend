import React from "react"
import { Helmet } from "react-helmet";
import Cart from "../../Cart/index.jsx";

const CartPage = () => {
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Cart />
        </>
    )
}
export default CartPage