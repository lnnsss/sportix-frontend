import React from "react"
import { Helmet } from "react-helmet";
import Products from "../../Products/index.jsx";

const ProductsPage = () => {
    return (
        <>
            <Helmet>
                <title>Каталог</title>
            </Helmet>
            <Products />
        </>
    )
}
export default ProductsPage