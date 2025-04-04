import React from "react"
import { Helmet } from "react-helmet";
import Product from "../../Product/index.jsx";

const ProductPage = () => {
    return (
        <>
            <Helmet>
                <title>Товар</title>
            </Helmet>
            <Product />
        </>
    )
}
export default ProductPage