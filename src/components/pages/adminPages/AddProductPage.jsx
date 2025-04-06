import React from "react"
import { Helmet } from "react-helmet"
import AddProduct from "../../Admin/components/AppProduct/index.jsx";

const AddProductPage = () => {
    return (
        <>
            <Helmet>
                <title>Админка | Добавить товар</title>
            </Helmet>
            <AddProduct/>
        </>
    )
}

export default AddProductPage