import React from "react"
import { Helmet } from "react-helmet"
import Products from "../../Admin/components/Products/index.jsx";

const ProductsPage = () => {
    return (
        <>
            <Helmet>
                <title>Админка | Товары</title>
            </Helmet>
            <Products/>
        </>
    )
}

export default ProductsPage